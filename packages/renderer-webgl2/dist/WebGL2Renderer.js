import { enableBlend, setBlendModeNormal } from './Blend';
export class WebGL2Renderer {
    constructor(canvas, contextAttributes) {
        this.width = 0;
        this.height = 0;
        this.viewport = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        this.currentDrawCalls = 0;
        this.contextLostExt = null;
        this.contextRestoredHandler = null;
        const gl = canvas.getContext('webgl2', contextAttributes);
        this.gl = gl;
        this.canvas = canvas;
        this.setState();
        this.initExtensions();
        this.width = gl.drawingBufferWidth;
        this.height = gl.drawingBufferHeight;
        this.setViewport(0, 0, this.width, this.height);
        enableBlend(gl);
        setBlendModeNormal(gl);
        this.setDepthTest(false);
        // tslint:disable-next-line: no-bitwise
        this.clearBits = gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT;
        this.contextLostExt = null;
        this.contextRestoredHandler = null;
        canvas.addEventListener('webglcontextlost', (e) => {
            e.preventDefault();
        });
        canvas.addEventListener('webglcontextrestored', () => {
            this.initExtensions();
            if (this.contextRestoredHandler) {
                this.contextRestoredHandler();
            }
        });
    }
    setState() {
        const gl = this.gl;
        const maxTextureUnits = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        const maxUniformBuffers = gl.getParameter(gl.MAX_UNIFORM_BUFFER_BINDINGS);
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
            maxTextureAnisotropy: (textureAnisotropy) ? gl.getParameter(textureAnisotropy.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 1,
            samples: gl.getParameter(gl.SAMPLES),
            parallelShaderCompile: Boolean(gl.getExtension('KHR_parallel_shader_compile')),
            multiDrawInstanced: Boolean(gl.getExtension('WEBGL_multi_draw_instanced'))
        };
        return this;
    }
    loseContext() {
        if (this.contextLostExt) {
            this.contextLostExt.loseContext();
        }
        return this;
    }
    restoreContext() {
        if (this.contextLostExt) {
            this.contextLostExt.restoreContext();
        }
        return this;
    }
    onContextRestored(callback) {
        this.contextRestoredHandler = callback;
        return this;
    }
    initExtensions() {
        const gl = this.gl;
        const compressed = 'WEBGL_compressed_texture_';
        const timer = 'EXT_disjoint_timer_query';
        const extensions = [
            'OES_texture_float_linear',
            'EXT_color_buffer_float',
            'EXT_texture_filter_anisotropic',
            compressed + 's3tc',
            compressed + 's3tc_srgb',
            compressed + 'etc',
            compressed + 'astc',
            compressed + 'pvrtc',
            timer,
            timer + '_webgl2',
            'KHR_parallel_shader_compile' // draft extension
        ];
        extensions.forEach((ext) => {
            gl.getExtension(ext);
        });
        this.contextLostExt = gl.getExtension('WEBGL_lose_context');
    }
    setViewport(x, y, width, height) {
        const viewport = this.viewport;
        if (viewport.width !== width || viewport.height !== height || viewport.x !== x || viewport.y !== y) {
            viewport.x = x;
            viewport.y = y;
            viewport.width = width;
            viewport.height = height;
            this.gl.viewport(x, y, width, height);
        }
        return this;
    }
    setDefaultViewport() {
        this.setViewport(0, 0, this.width, this.height);
        return this;
    }
    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = this.gl.drawingBufferWidth;
        this.height = this.gl.drawingBufferHeight;
        this.setViewport(0, 0, this.width, this.height);
        return this;
    }
    setDepthTest(value = true) {
        const gl = this.gl;
        if (value) {
            gl.enable(gl.DEPTH_TEST);
        }
        else {
            gl.disable(gl.DEPTH_TEST);
        }
        return this;
    }
    setColorMask(r, g, b, a) {
        this.gl.colorMask(r, g, b, a);
        return this;
    }
    setClearColor(r, g, b, a) {
        this.gl.clearColor(r, g, b, a);
        return this;
    }
    setClearMask(mask) {
        this.clearBits = mask;
        return this;
    }
    clear() {
        this.gl.clear(this.clearBits);
        return this;
    }
}
//# sourceMappingURL=WebGL2Renderer.js.map