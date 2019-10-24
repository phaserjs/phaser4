import { DrawCall } from './DrawCall';
import { IState } from './IState';
import { IViewport } from './IViewport';
import { Program } from './Program';
import { Shader } from './Shader';
import { VertexArray } from './VertexArray';
import { VertexBuffer } from './VertexBuffer';
export declare class WebGL2Renderer {
    canvas: HTMLCanvasElement;
    gl: WebGL2RenderingContext;
    width: number;
    height: number;
    state: IState;
    viewport: IViewport;
    currentDrawCalls: number;
    emptyFragmentShader: any;
    clearBits: number;
    contextLostExt: any;
    contextRestoredHandler: any;
    constructor(canvas: HTMLCanvasElement, contextAttributes?: WebGLContextAttributes);
    setState(): WebGL2Renderer;
    loseContext(): WebGL2Renderer;
    restoreContext(): WebGL2Renderer;
    onContextRestored(callback: () => void): WebGL2Renderer;
    initExtensions(): void;
    setViewport(x: number, y: number, width: number, height: number): WebGL2Renderer;
    defaultViewport(): WebGL2Renderer;
    resize(width: number, height: number): WebGL2Renderer;
    colorMask(r: boolean, g: boolean, b: boolean, a: boolean): WebGL2Renderer;
    clearColor(r: number, g: number, b: number, a: number): WebGL2Renderer;
    clearMask(mask: GLenum): WebGL2Renderer;
    clear(): WebGL2Renderer;
    createProgram(vsSource: string | Shader, fsSource: string | Shader): Program;
    createVertexArray(): VertexArray;
    createVertexBuffer(type: GLenum, itemSize: number, data: ArrayBufferView | number, usage?: GLenum): VertexBuffer;
    createDrawCall(program: Program, vertexArray: VertexArray): DrawCall;
}
//# sourceMappingURL=WebGL2Renderer.d.ts.map