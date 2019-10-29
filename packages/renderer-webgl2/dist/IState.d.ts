import { Framebuffer } from './Framebuffer';
import { Texture } from './Texture';
import { UniformBuffer } from './UniformBuffer';
export interface IState {
    program: WebGLProgram;
    vertexArray: WebGLVertexArrayObject;
    transformFeedback: WebGLTransformFeedback;
    activeTexture: number;
    textures: Texture[];
    uniformBuffers: UniformBuffer[];
    freeUniformBufferBases: [];
    drawFramebuffer: Framebuffer;
    readFramebuffer: Framebuffer;
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
//# sourceMappingURL=IState.d.ts.map