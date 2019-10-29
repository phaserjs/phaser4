import { IState } from './IState';
import { Program } from './Program';
import { Texture } from './Texture';
import { UniformBuffer } from './UniformBuffer';
import { VertexArray } from './VertexArray';
export declare class DrawCall {
    gl: WebGL2RenderingContext;
    appState: IState;
    currentProgram: Program;
    drawPrimitive: GLenum;
    currentVertexArray: VertexArray;
    uniformIndices: {};
    uniformNames: string[];
    uniformValues: any[];
    uniformCount: number;
    uniformBuffers: UniformBuffer[];
    uniformBlockNames: string[];
    uniformBlockCount: number;
    textures: Texture[];
    textureCount: number;
    offsets: Int32Array;
    numElements: Int32Array;
    numInstances: Int32Array;
    numDraws: number;
    constructor(gl: WebGL2RenderingContext, appState: IState, program: Program, vertexArray?: VertexArray);
    setPrimitive(primitive: GLenum): DrawCall;
    uniform(name: string, value: any): DrawCall;
    uniformBlock(name: string, buffer: UniformBuffer): DrawCall;
    texture(name: string, texture: Texture): DrawCall;
    drawRanges(...counts: number[]): DrawCall;
    draw(): DrawCall;
}
//# sourceMappingURL=DrawCall.d.ts.map