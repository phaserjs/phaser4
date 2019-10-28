import { Texture } from './Texture';

export interface IState
{
    program: WebGLProgram;
    vertexArray: WebGLVertexArrayObject;
    transformFeedback: WebGLTransformFeedback;
    activeTexture: number;
    textures: Texture[];
    uniformBuffers: WebGLBuffer[];
    freeUniformBufferBases: [];
    drawFramebuffer: WebGLFramebuffer;
    readFramebuffer: WebGLFramebuffer;
    extensions: {
        debugShaders: WEBGL_debug_shaders;
        multiDrawInstanced: any;
    };
    maxTextureUnits: number;
    textureAnisotropy: EXT_texture_filter_anisotropic;
    maxTextureAnisotropy: number;
    maxUniformBuffers: number;
    maxUniforms: number;
    samples: number;
    parallelShaderCompile: boolean;
    multiDrawInstanced: boolean;
}
