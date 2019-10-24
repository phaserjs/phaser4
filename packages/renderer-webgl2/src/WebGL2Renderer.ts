import { IState } from './IState';
import { IViewport } from './IViewport';
import { Program } from './Program';

export class WebGL2Renderer
{
    canvas: HTMLCanvasElement;
    gl: WebGL2RenderingContext;

    width: number = 0;
    height: number = 0;

    state: IState;
    viewport: IViewport;

    currentDrawCalls: number = 0;
    emptyFragmentShader: any;

    clearBits: number;

    contextLostExt = null;
    contextRestoredHandler = null;

    constructor (canvas: HTMLCanvasElement, contextAttributes: any)
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

            if (this.contextRestoredHandler) {
                this.contextRestoredHandler();
            }
        });
    }

    setState (): WebGL2Renderer
    {
        const gl = this.gl;

        this.state = {
            program: null,
            vertexArray: null,
            transformFeedback: null,
            activeTexture: -1,
            textures: new Array(gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
            uniformBuffers: new Array(gl.getParameter(gl.MAX_UNIFORM_BUFFER_BINDINGS)),
            freeUniformBufferBases: [],
            drawFramebuffer: null,
            readFramebuffer: null,
            extensions: {
                debugShaders: gl.getExtension('WEBGL_debug_shaders'),
                multiDrawInstanced: gl.getExtension('WEBGL_multi_draw_instanced')
            }
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

}
