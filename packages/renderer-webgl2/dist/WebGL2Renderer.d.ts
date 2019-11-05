import { DrawCall } from './DrawCall';
import { Framebuffer } from './Framebuffer';
import { IState } from './IState';
import { ITexture } from './ITexture';
import { IViewport } from './IViewport';
import { Program } from './Program';
import { Query } from './Query';
import { Renderbuffer } from './Renderbuffer';
import { Shader } from './Shader';
import { Texture } from './Texture';
import { UniformBuffer } from './UniformBuffer';
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
    setDefaultViewport(): WebGL2Renderer;
    resize(width: number, height: number): WebGL2Renderer;
    setDepthTest(value?: boolean): WebGL2Renderer;
    setColorMask(r: GLboolean, g: GLboolean, b: GLboolean, a: GLboolean): WebGL2Renderer;
    setClearColor(r: GLclampf, g: GLclampf, b: GLclampf, a: GLclampf): WebGL2Renderer;
    setClearMask(mask: GLenum): WebGL2Renderer;
    clear(): WebGL2Renderer;
    getX(x: number): number;
    getY(y: number): number;
    getXY(x: number, y: number): {
        x: number;
        y: number;
    };
    getQuadPosition(x: number, y: number, width: number, height: number): Float32Array;
    createProgram(vsSource: string | Shader, fsSource: string | Shader): Program;
    createVertexArray(): VertexArray;
    createVertexBuffer(type: GLenum, itemSize: number, data: ArrayBufferView | number, usage?: GLenum): VertexBuffer;
    createMatrixBuffer(type: GLenum, data: ArrayBufferView, usage?: GLenum): VertexBuffer;
    createInterleavedBuffer(bytesPerVertex: number, data: ArrayBufferView | number, usage?: GLenum): VertexBuffer;
    createIndexBuffer(type: GLenum, itemSize: number, data: ArrayBufferView, usage?: GLenum): VertexBuffer;
    createUniformBuffer(layout: GLenum[], usage?: GLenum): UniformBuffer;
    createDrawCall(program: Program, vertexArray: VertexArray): DrawCall;
    createFramebuffer(): Framebuffer;
    createQuery(target: GLenum): Query;
    createRenderbuffer(width: number, height: number, internalFormat: GLenum, samples?: number): Renderbuffer;
    createEmptyTexture2D(width: number, height: number, options?: ITexture): Texture;
    createTexture2D(image: TexImageSource, width?: number, height?: number, options?: ITexture): Texture;
}
//# sourceMappingURL=WebGL2Renderer.d.ts.map