import { IState } from './IState';
export declare class UniformBuffer {
    gl: WebGL2RenderingContext;
    appState: IState;
    buffer: WebGLBuffer;
    dataViews: {};
    offsets: number[];
    sizes: number[];
    types: GLenum[];
    size: number;
    usage: GLenum;
    currentBase: GLuint;
    data: Float32Array;
    dirtyStart: number;
    dirtyEnd: number;
    constructor(gl: WebGL2RenderingContext, appState: IState, layout: GLenum[], usage?: GLenum);
    restore(): UniformBuffer;
    set(index: number, value: ArrayBufferView | ArrayLike<number>): UniformBuffer;
    update(): UniformBuffer;
    delete(): UniformBuffer;
    bind(index: GLuint): UniformBuffer;
}
//# sourceMappingURL=UniformBuffer.d.ts.map