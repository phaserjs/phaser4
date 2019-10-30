import { enableBlend, setBlendModeNormal } from './Blend';
import { DrawCall } from './DrawCall';
import { Framebuffer } from './Framebuffer';
import { IState } from './IState';
import { ITexture } from './ITexture';
import { IViewport } from './IViewport';
import { Program } from './Program';
import { Query } from './Query';
import { Renderbuffer } from './Renderbuffer';
import { Shader } from './Shader';
import { Texture } from './Texture';
import { UniformBuffer } from './UniformBuffer';
import { VertexArray } from './VertexArray';
import { VertexBuffer } from './VertexBuffer';

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
    clearBits: number;

    contextLostExt = null;
    contextRestoredHandler = null;

    constructor (canvas: HTMLCanvasElement, contextAttributes?: WebGLContextAttributes)
    {
        const gl = canvas.getContext('webgl2', contextAttributes) as WebGL2RenderingContext;

        this.gl = gl;
        this.canvas = canvas;

        gl.cullFace(gl.BACK);
        gl.frontFace(gl.CCW);
        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.CULL_FACE);
        gl.depthFunc(gl.LEQUAL);

        this.setState();
        this.initExtensions();

        this.width = gl.drawingBufferWidth;
        this.height = gl.drawingBufferHeight;

        this.setViewport(0, 0, this.width, this.height);

        enableBlend(gl);
        setBlendModeNormal(gl);

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

        gl.getExtension('OES_texture_float_linear');
        gl.getExtension('EXT_color_buffer_float');
        gl.getExtension('EXT_texture_filter_anisotropic');

        const compressed = 'WEBGL_compressed_texture_';

        gl.getExtension(compressed + 's3tc');
        gl.getExtension(compressed + 's3tc_srgb');
        gl.getExtension(compressed + 'etc');
        gl.getExtension(compressed + 'astc');
        gl.getExtension(compressed + 'pvrtc');

        const timer = 'EXT_disjoint_timer_query';

        gl.getExtension(timer);
        gl.getExtension(timer + '_webgl2');

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

    setDefaultViewport (): WebGL2Renderer
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

    setColorMask (r: GLboolean, g: GLboolean, b: GLboolean, a: GLboolean): WebGL2Renderer
    {
        this.gl.colorMask(r, g, b, a);

        return this;
    }

    setClearColor (r: GLclampf, g: GLclampf, b: GLclampf, a: GLclampf): WebGL2Renderer
    {
        this.gl.clearColor(r, g, b, a);

        return this;
    }

    setClearMask (mask: GLenum): WebGL2Renderer
    {
        this.clearBits = mask;

        return this;
    }

    clear (): WebGL2Renderer
    {
        this.gl.clear(this.clearBits);

        return this;
    }

    getX (x: number): number
    {
        return x / this.width * 2 - 1;
    }
    
    getY (y: number): number
    {
        return y / this.height * -2 + 1;
    }

    getXY (x: number, y: number): { x: number, y: number }
    {
        return {
            x: x / this.width * 2 - 1,
            y: y / this.height * -2 + 1
        };
    }

    getQuadPosition (x: number, y: number, width: number, height: number): Float32Array
    {
        const TL = this.getXY(x, y);
        const TR = this.getXY(x + width, y);
        const BL = this.getXY(x, y + height);
        const BR = this.getXY(x + width, y + height);
       
        return new Float32Array([
            TL.x, TL.y,
            TR.x, TR.y,
            BL.x, BL.y,
            BL.x, BL.y,
            TR.x, TR.y,
            BR.x, BR.y
        ]);
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

    createMatrixBuffer (type: GLenum, data: ArrayBufferView, usage: GLenum = this.gl.STATIC_DRAW): VertexBuffer
    {
        return new VertexBuffer(this.gl, this.state, type, 0, data, usage);
    }

    createInterleavedBuffer (bytesPerVertex: number, data: ArrayBufferView | number, usage: GLenum = this.gl.STATIC_DRAW): VertexBuffer
    {
        return new VertexBuffer(this.gl, this.state, null, bytesPerVertex, data, usage);
    }

    createIndexBuffer (type: GLenum, itemSize: number, data: ArrayBufferView, usage: GLenum = this.gl.STATIC_DRAW): VertexBuffer
    {
        return new VertexBuffer(this.gl, this.state, type, itemSize, data, usage, true);
    }

    createUniformBuffer (layout: GLenum[], usage: GLenum = this.gl.DYNAMIC_DRAW): UniformBuffer
    {
        return new UniformBuffer(this.gl, this.state, layout, usage);
    }

    createDrawCall (program: Program, vertexArray: VertexArray): DrawCall
    {
        return new DrawCall(this.gl, this.state, program, vertexArray);
    }

    createFramebuffer (): Framebuffer
    {
        return new Framebuffer(this.gl, this.state);
    }

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

    createTexture2D (image: TexImageSource, width?: number, height?: number, options: ITexture = {}): Texture
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

    //  TODO createTextureArray

}
