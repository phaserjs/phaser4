import { IAttributeOptions } from './IAttributeOptions';
import { IState } from './IState';
import { VertexBuffer } from './VertexBuffer';
export declare class VertexArray {
    gl: WebGL2RenderingContext;
    appState: IState;
    vertexArray: WebGLVertexArrayObject;
    indexType: GLenum;
    indexed: boolean;
    numElements: number;
    numInstances: number;
    offsets: number;
    numDraws: number;
    constructor(gl: WebGL2RenderingContext, appState: IState);
    restore(): VertexArray;
    vertexAttributeBuffer(attributeIndex: number, vertexBuffer: VertexBuffer, options: IAttributeOptions): VertexArray;
    instanceAttributeBuffer(attributeIndex: number, vertexBuffer: VertexBuffer, options: IAttributeOptions): VertexArray;
    indexBuffer(vertexBuffer: VertexBuffer): VertexArray;
    delete(): VertexArray;
    bind(): VertexArray;
    attributeBuffer(attributeIndex: number, vertexBuffer: VertexBuffer, options: IAttributeOptions, instanced: boolean): VertexArray;
}
//# sourceMappingURL=VertexArray.d.ts.map