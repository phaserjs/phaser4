export declare class MultiBoolUniform {
    gl: WebGL2RenderingContext;
    handle: WebGLUniformLocation;
    glFunc: any;
    count: number;
    cache: boolean[];
    constructor(gl: WebGL2RenderingContext, handle: WebGLUniformLocation, info: WebGLActiveInfo, count: number);
    set(value: boolean[]): void;
}
//# sourceMappingURL=MultiBoolUniform.d.ts.map