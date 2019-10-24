export interface IState {
    program: WebGLProgram;
    vertexArray: WebGLVertexArrayObject;
    transformFeedback: WebGLTransformFeedback;
    activeTexture: number;
    textures: WebGLTexture[];
    uniformBuffers: WebGLBuffer[];
    freeUniformBufferBases: [];
    drawFramebuffer: WebGLFramebuffer;
    readFramebuffer: WebGLFramebuffer;
    extensions: {
        debugShaders: WEBGL_debug_shaders;
        multiDrawInstanced: any;
    };
    maxTextureUnits: number;
    maxUniformBuffers: number;
    maxUniforms: number;
    samples: number;
    parallelShaderCompile: boolean;
    multiDrawInstanced: boolean;
}
//# sourceMappingURL=IState.d.ts.map