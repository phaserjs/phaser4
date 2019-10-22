export const WEBGL_INFO = {
    MAX_TEXTURE_UNITS: 0,
    MAX_UNIFORM_BUFFERS: 0,
    MAX_UNIFORMS: 0,
    SAMPLES: 0,
    VENDOR: '(Unknown)',
    RENDERER: '(Unknown)',
    FLOAT_RENDER_TARGETS: false,
    LINEAR_FLOAT_TEXTURES: false,
    S3TC_TEXTURES: false,
    S3TC_SRGB_TEXTURES: false,
    ETC_TEXTURES: false,
    ASTC_TEXTURES: false,
    PVRTC_TEXTURES: false,
    LOSE_CONTEXT: false,
    DEBUG_SHADERS: false,
    GPU_TIMER: false,
    TEXTURE_ANISOTROPY: false,
    MAX_TEXTURE_ANISOTROPY: 1,
    DEBUG_RENDERER_INFO: false,
    PARALLEL_SHADER_COMPILE: false,
    MULTI_DRAW_INSTANCED: false,
};

export function init (gl: WebGL2RenderingContext)
{
    // https://www.khronos.org/registry/webgl/specs/1.0/
    // https://www.khronos.org/registry/webgl/specs/latest/2.0/#1.1

    WEBGL_INFO.MAX_TEXTURE_UNITS = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    WEBGL_INFO.MAX_UNIFORM_BUFFERS = gl.getParameter(gl.MAX_UNIFORM_BUFFER_BINDINGS);
    WEBGL_INFO.MAX_UNIFORMS = Math.min(gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS), gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS));
    WEBGL_INFO.SAMPLES = gl.getParameter(gl.SAMPLES);

    // Extensions

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/
    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/

    WEBGL_INFO.FLOAT_RENDER_TARGETS = Boolean(gl.getExtension('EXT_color_buffer_float'));
    WEBGL_INFO.LINEAR_FLOAT_TEXTURES = Boolean(gl.getExtension('OES_texture_float_linear'));
    WEBGL_INFO.S3TC_TEXTURES = Boolean(gl.getExtension('WEBGL_compressed_texture_s3tc'));
    WEBGL_INFO.S3TC_SRGB_TEXTURES = Boolean(gl.getExtension('WEBGL_compressed_texture_s3tc_srgb'));
    WEBGL_INFO.ETC_TEXTURES = Boolean(gl.getExtension('WEBGL_compressed_texture_etc'));
    WEBGL_INFO.ASTC_TEXTURES = Boolean(gl.getExtension('WEBGL_compressed_texture_astc'));
    WEBGL_INFO.PVRTC_TEXTURES = Boolean(gl.getExtension('WEBGL_compressed_texture_pvrtc'));
    WEBGL_INFO.LOSE_CONTEXT = Boolean(gl.getExtension('WEBGL_lose_context'));
    WEBGL_INFO.DEBUG_SHADERS = Boolean(gl.getExtension('WEBGL_debug_shaders'));
    WEBGL_INFO.GPU_TIMER = Boolean(gl.getExtension('EXT_disjoint_timer_query_webgl2') || gl.getExtension('EXT_disjoint_timer_query'));
        
    // https://www.khronos.org/registry/webgl/extensions/EXT_texture_filter_anisotropic/
    
    WEBGL_INFO.TEXTURE_ANISOTROPY = Boolean(gl.getExtension('EXT_texture_filter_anisotropic'));
    WEBGL_INFO.MAX_TEXTURE_ANISOTROPY = (WEBGL_INFO.TEXTURE_ANISOTROPY) ? gl.getParameter(0x84FF) : 1;

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_debug_renderer_info/
    WEBGL_INFO.DEBUG_RENDERER_INFO = Boolean(gl.getExtension('WEBGL_debug_renderer_info'));

    if (WEBGL_INFO.DEBUG_RENDERER_INFO)
    {
        WEBGL_INFO.VENDOR = gl.getParameter(0x9245);
        WEBGL_INFO.RENDERER = gl.getParameter(0x9246);
    }

    // Draft extensions
    WEBGL_INFO.PARALLEL_SHADER_COMPILE = Boolean(gl.getExtension('KHR_parallel_shader_compile'));
    WEBGL_INFO.MULTI_DRAW_INSTANCED = Boolean(gl.getExtension('WEBGL_multi_draw_instanced'));
}
