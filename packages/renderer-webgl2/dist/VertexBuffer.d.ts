import { IState } from './IState';
export declare class VertexBuffer {
    gl: WebGL2RenderingContext;
    appState: IState;
    buffer: WebGLBuffer;
    type: GLenum;
    itemSize: number;
    numItems: number;
    usage: GLenum;
    indexArray: boolean;
    binding: GLenum;
    numColumns: number;
    byteLength: number;
    integer: boolean;
    constructor(gl: WebGL2RenderingContext, appState: IState, type: GLenum, itemSize: number, data?: number | BufferSource, usage?: GLenum, indexArray?: boolean);
    restore(data?: number | BufferSource): VertexBuffer;
    data(data: BufferSource, byteOffset?: number): VertexBuffer;
    delete(): VertexBuffer;
}
//# sourceMappingURL=VertexBuffer.d.ts.map