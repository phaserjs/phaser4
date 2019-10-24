export declare class MatrixUniform {
    gl: WebGL2RenderingContext;
    handle: WebGLUniformLocation;
    glFunc: any;
    count: number;
    cache: (Float32Array | Int32Array | Uint32Array);
    constructor(gl: WebGL2RenderingContext, handle: WebGLUniformLocation, info: WebGLActiveInfo, count: number);
    set(value: Float32Array): void;
}
//# sourceMappingURL=MatrixUniform.d.ts.map