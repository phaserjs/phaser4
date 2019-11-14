import { IState } from './IState';
import { IViewport } from './IViewport';
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
}
//# sourceMappingURL=WebGL2Renderer.d.ts.map