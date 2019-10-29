export declare class Renderbuffer {
    gl: WebGL2RenderingContext;
    renderbuffer: WebGLRenderbuffer;
    width: number;
    height: number;
    internalFormat: GLenum;
    samples: number;
    readonly is3D: boolean;
    constructor(gl: WebGL2RenderingContext, width: number, height: number, internalFormat: GLenum, samples?: number);
    restore(): Renderbuffer;
    resize(width: number, height: number): Renderbuffer;
    delete(): Renderbuffer;
}
//# sourceMappingURL=Renderbuffer.d.ts.map