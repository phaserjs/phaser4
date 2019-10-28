import { DrawCall } from './DrawCall';
import { IState } from './IState';
import { IViewport } from './IViewport';
import { Program } from './Program';
import { Query } from './Query';
import { Renderbuffer } from './Renderbuffer';
import { Shader } from './Shader';
import { VertexArray } from './VertexArray';
import { VertexBuffer } from './VertexBuffer';
import { Texture } from './Texture';
import { ITexture } from './ITexture';
import { ITextureSource } from './ITextureSource';

export class WebGL2Renderer
{
    canvas: HTMLCanvasElement;
    gl: WebGL2RenderingContext;

    width: number = 0;
    height: number = 0;

    state: IState;
    viewport: IViewport = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };

    currentDrawCalls: number = 0;
    emptyFragmentShader: any;

    clearBits: number;

    contextLostExt = null;
    contextRestoredHandler = null;

    constructor (canvas: HTMLCanvasElement, contextAttributes?: WebGLContextAttributes)
    {
        const gl = canvas.getContext('webgl2', contextAttributes) as WebGL2RenderingContext;

        this.gl = gl;
        this.canvas = canvas;

        this.setState();
        this.initExtensions();

        this.width = gl.drawingBufferWidth;
        this.height = gl.drawingBufferHeight;

        this.setViewport(0, 0, this.width, this.height);

        // tslint:disable-next-line: no-bitwise
        this.clearBits = gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT;

        this.contextLostExt = null;
        this.contextRestoredHandler = null;

        this.canvas.addEventListener('webglcontextlost', (e) => {
            e.preventDefault();
        });

        this.canvas.addEventListener('webglcontextrestored', () => {

            this.initExtensions();

            if (this.contextRestoredHandler)
            {
                this.contextRestoredHandler();
            }
        });
    }

    setState (): WebGL2Renderer
    {
        const gl = this.gl;

        const maxTextureUnits: number = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        const maxUniformBuffers: number = gl.getParameter(gl.MAX_UNIFORM_BUFFER_BINDINGS);
        const textureAnisotropy = gl.getExtension('EXT_texture_filter_anisotropic');

        this.state = {
            program: null,
            vertexArray: null,
            transformFeedback: null,
            activeTexture: -1,
            textures: new Array(maxTextureUnits),
            uniformBuffers: new Array(maxUniformBuffers),
            freeUniformBufferBases: [],
            drawFramebuffer: null,
            readFramebuffer: null,
            extensions: {
                debugShaders: gl.getExtension('WEBGL_debug_shaders'),
                multiDrawInstanced: gl.getExtension('WEBGL_multi_draw_instanced')
            },
            maxTextureUnits,
            maxUniformBuffers,
            maxUniforms: Math.min(gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS), gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS)),
            textureAnisotropy,
            maxTextureAnisotropy: (textureAnisotropy) ? gl.getParameter(0x84FF) : 1,
            samples: gl.getParameter(gl.SAMPLES),
            parallelShaderCompile: Boolean(gl.getExtension('KHR_parallel_shader_compile')),
            multiDrawInstanced: Boolean(gl.getExtension('WEBGL_multi_draw_instanced'))
        };

        return this;
    }

    loseContext (): WebGL2Renderer
    {
        if (this.contextLostExt)
        {
            this.contextLostExt.loseContext();
        }

        return this;
    }

    restoreContext (): WebGL2Renderer
    {
        if (this.contextLostExt)
        {
            this.contextLostExt.restoreContext();
        }

        return this;
    }

    onContextRestored (callback: () => void): WebGL2Renderer
    {
        this.contextRestoredHandler = callback;

        return this;
    }

    initExtensions ()
    {
        const gl = this.gl;

        gl.getExtension('EXT_color_buffer_float');
        gl.getExtension('OES_texture_float_linear');
        gl.getExtension('WEBGL_compressed_texture_s3tc');
        gl.getExtension('WEBGL_compressed_texture_s3tc_srgb');
        gl.getExtension('WEBGL_compressed_texture_etc');
        gl.getExtension('WEBGL_compressed_texture_astc');
        gl.getExtension('WEBGL_compressed_texture_pvrtc');
        gl.getExtension('EXT_disjoint_timer_query_webgl2');
        gl.getExtension('EXT_disjoint_timer_query');
        gl.getExtension('EXT_texture_filter_anisotropic');

        this.contextLostExt = gl.getExtension('WEBGL_lose_context');

        // Draft extensions
        gl.getExtension('KHR_parallel_shader_compile');
    }

    setViewport (x: number, y: number, width: number, height: number): WebGL2Renderer
    {
        const viewport = this.viewport;

        if (viewport.width !== width || viewport.height !== height || viewport.x !== x || viewport.y !== y)
        {
            viewport.x = x;
            viewport.y = y;

            viewport.width = width;
            viewport.height = height;

            this.gl.viewport(x, y, width, height);
        }

        return this;
    }

    defaultViewport (): WebGL2Renderer
    {
        this.setViewport(0, 0, this.width, this.height);

        return this;
    }

    resize (width: number, height: number): WebGL2Renderer
    {
        this.canvas.width = width;
        this.canvas.height = height;

        this.width = this.gl.drawingBufferWidth;
        this.height = this.gl.drawingBufferHeight;

        this.setViewport(0, 0, this.width, this.height);

        return this;
    }

    colorMask (r: boolean, g: boolean, b: boolean, a: boolean): WebGL2Renderer
    {
        this.gl.colorMask(r, g, b, a);

        return this;
    }

    clearColor (r: number, g: number, b: number, a: number): WebGL2Renderer
    {
        this.gl.clearColor(r, g, b, a);

        return this;
    }

    clearMask (mask: GLenum): WebGL2Renderer
    {
        this.clearBits = mask;

        return this;
    }

    clear (): WebGL2Renderer
    {
        this.gl.clear(this.clearBits);

        return this;
    }

    createProgram (vsSource: string | Shader, fsSource: string | Shader): Program
    {
        const program = new Program(this.gl, this.state, vsSource, fsSource);

        program.link().checkLinkage();

        return program;
    }

    createVertexArray ()
    {
        return new VertexArray(this.gl, this.state);
    }

    createVertexBuffer (type: GLenum, itemSize: number, data: ArrayBufferView | number, usage?: GLenum)
    {
        return new VertexBuffer(this.gl, this.state, type, itemSize, data, usage);
    }

    createMatrixBuffer(type: GLenum, data: ArrayBufferView, usage: GLenum = this.gl.STATIC_DRAW): VertexBuffer
    {
        return new VertexBuffer(this.gl, this.state, type, 0, data, usage);
    }

    createInterleavedBuffer(bytesPerVertex: number, data: ArrayBufferView | number, usage: GLenum = this.gl.STATIC_DRAW): VertexBuffer
    {
        return new VertexBuffer(this.gl, this.state, null, bytesPerVertex, data, usage);
    }

    createIndexBuffer(type: GLenum, itemSize: number, data: ArrayBufferView, usage: GLenum = this.gl.STATIC_DRAW): VertexBuffer
    {
        return new VertexBuffer(this.gl, this.state, type, itemSize, data, usage, true);
    }

    createDrawCall (program: Program, vertexArray: VertexArray): DrawCall
    {
        return new DrawCall(this.gl, this.state, program, vertexArray);
    }

    // createFramebuffer (): Framebuffer
    // {
    //     return new Framebuffer(this.gl, this.state);
    // }

    createQuery (target: GLenum): Query
    {
        return new Query(this.gl, target);
    }

    createRenderbuffer (width: number, height: number, internalFormat: GLenum, samples: number = 0): Renderbuffer
    {
        return new Renderbuffer(this.gl, width, height, internalFormat, samples);
    }

    createEmptyTexture2D (width: number, height: number, options: ITexture = {}): Texture
    {
        return new Texture(this.gl, this.state, this.gl.TEXTURE_2D, null, width, height, 0, false, options);
    }

    createTexture2D (image: ITextureSource, width?: number, height?: number, options: ITexture = {}): Texture
    {
        if (!width && image && image.width)
        {
            width = image.width;
        }

        if (!height && image && image.height)
        {
            height = image.height;
        }

        return new Texture(this.gl, this.state, this.gl.TEXTURE_2D, image, width, height, 0, false, options);
    }
}
