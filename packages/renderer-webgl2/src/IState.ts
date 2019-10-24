export interface IState
{
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
        multiDrawInstanced: null;
    };
}
