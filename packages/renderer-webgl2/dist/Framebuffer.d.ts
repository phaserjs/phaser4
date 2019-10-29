import { IColorAttachment } from './IColorAttachment';
import { IState } from './IState';
import { Renderbuffer } from './Renderbuffer';
import { Texture } from './Texture';
export declare class Framebuffer {
    gl: WebGL2RenderingContext;
    appState: IState;
    framebuffer: WebGLFramebuffer;
    numColorTargets: number;
    colorAttachments: IColorAttachment[];
    colorAttachmentEnums: GLenum[];
    colorAttachmentTargets: GLenum[];
    depthAttachment: Texture | Renderbuffer;
    depthAttachmentTarget: GLenum;
    width: number;
    height: number;
    constructor(gl: WebGL2RenderingContext, appState: IState);
    restore(): Framebuffer;
    colorTarget(index: number, attachment: Texture | Renderbuffer, target?: GLenum): Framebuffer;
    depthTarget(attachment: Texture | Renderbuffer, target?: GLenum): Framebuffer;
    resize(width?: number, height?: number): Framebuffer;
    delete(): Framebuffer;
    getStatus(): GLenum;
    bindForDraw(): Framebuffer;
    bindForRead(): Framebuffer;
    bindAndCaptureState(): Framebuffer;
    restoreState(framebuffer: Framebuffer): Framebuffer;
}
//# sourceMappingURL=Framebuffer.d.ts.map