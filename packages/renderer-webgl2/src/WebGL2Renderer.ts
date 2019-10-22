import { init, WEBGL_INFO } from './WebGLInfo';

export class WebGL2Renderer
{
    canvas: HTMLCanvasElement;
    gl: WebGL2RenderingContext;
    width: number = 0;
    height: number = 0;
    viewportX: number = 0;
    viewportY: number = 0;
    viewportWidth: number = 0;
    viewportHeight: number = 0;
    currentDrawCalls: number = 0;
    emptyFragmentShader: any;

    state = {
        program: null,
        vertexArray: null,
        transformFeedback: null,
        activeTexture: -1,
        textures: null,
        uniformBuffers: null,
        freeUniformBufferBases: [],
        drawFramebuffer: null,
        readFramebuffer: null,
        extensions: {
            debugShaders: null,
            multiDrawInstanced: null
        }
    };

    clearBits: number;
    cpuTime: number;
    gpuTime: number;

    contextLostExt = null;
    contextRestoredHandler = null;

    constructor (canvas: HTMLCanvasElement, contextAttributes: any)
    {
        const gl = canvas.getContext('webgl2', contextAttributes) as WebGL2RenderingContext;

        this.gl = gl;
        this.canvas = canvas;

        init(gl);

        this.width = gl.drawingBufferWidth;
        this.height = gl.drawingBufferHeight;

        const state = this.state;

        state.textures = new Array(WEBGL_INFO.MAX_TEXTURE_UNITS);
        state.uniformBuffers = new Array(WEBGL_INFO.MAX_UNIFORM_BUFFERS);

        this.clearBits = gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT| gl.STENCIL_BUFFER_BIT;

        this.cpuTime = 0;
        this.gpuTime = 0;

        this.viewport(0, 0, this.width, this.height);

        this.contextLostExt = null;
        this.contextRestoredHandler = null;

        this.initExtensions();

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

        this.state.extensions.debugShaders = gl.getExtension('WEBGL_debug_shaders');
        this.contextLostExt = gl.getExtension('WEBGL_lose_context');

        // Draft extensions
        gl.getExtension('KHR_parallel_shader_compile');

        this.state.extensions.multiDrawInstanced = gl.getExtension('WEBGL_multi_draw_instanced');
    }

    viewport (x: number, y: number, width: number, height: number): WebGL2Renderer
    {
        if (this.viewportWidth !== width || this.viewportHeight !== height || this.viewportX !== x || this.viewportY !== y)
        {
            this.viewportX = x;
            this.viewportY = y;

            this.viewportWidth = width;
            this.viewportHeight = height;

            this.gl.viewport(x, y, this.viewportWidth, this.viewportHeight);
        }

        return this;
    }

    defaultViewport (): WebGL2Renderer
    {
        this.viewport(0, 0, this.width, this.height);

        return this;
    }

    resize (width: number, height: number): WebGL2Renderer
    {
        this.canvas.width = width;
        this.canvas.height = height;

        this.width = this.gl.drawingBufferWidth;
        this.height = this.gl.drawingBufferHeight;

        this.viewport(0, 0, this.width, this.height);

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

    createProgram (vsSource, fsSource, xformFeedbackVars): Program
    {
        const program = new Program(this.gl, this.state, vsSource, fsSource, xformFeedbackVars);

        program.link().checkLinkage();

        return program;
    }

}
