export declare class Query {
    gl: WebGL2RenderingContext;
    query: WebGLQuery;
    target: GLenum;
    active: boolean;
    result: any;
    constructor(gl: WebGL2RenderingContext, target: GLenum);
    restore(): Query;
    begin(): Query;
    end(): Query;
    ready(): boolean;
    delete(): Query;
}
//# sourceMappingURL=Query.d.ts.map