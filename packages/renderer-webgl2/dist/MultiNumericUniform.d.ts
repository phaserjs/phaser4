export declare class MultiNumericUniform {
    gl: WebGL2RenderingContext;
    handle: WebGLUniformLocation;
    glFunc: any;
    count: number;
    cache: (Float32Array | Int32Array | Uint32Array);
    constructor(gl: WebGL2RenderingContext, handle: WebGLUniformLocation, info: WebGLActiveInfo, count: number);
    set(value: Int32Array | Uint32Array | Float32Array): void;
}
//# sourceMappingURL=MultiNumericUniform.d.ts.map