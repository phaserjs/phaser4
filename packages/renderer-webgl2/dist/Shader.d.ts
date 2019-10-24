import { IState } from './IState';
export declare class Shader {
    gl: WebGL2RenderingContext;
    appState: IState;
    shader: WebGLShader;
    type: number;
    source: string;
    constructor(gl: WebGL2RenderingContext, appState: IState, type: number, source: string);
    restore(): Shader;
    delete(): Shader;
    checkCompilation(): Shader;
}
//# sourceMappingURL=Shader.d.ts.map