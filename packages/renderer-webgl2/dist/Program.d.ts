import { IState } from './IState';
import { Shader } from './Shader';
export declare class Program {
    gl: WebGL2RenderingContext;
    appState: IState;
    program: WebGLProgram;
    uniforms: {};
    uniformBlocks: {};
    uniformBlockCount: number;
    samplers: {};
    samplerCount: number;
    vertexSource: string;
    vertexShader: Shader;
    fragmentSource: string;
    fragmentShader: Shader;
    linked: boolean;
    constructor(gl: WebGL2RenderingContext, appState: IState, vsSource: string | Shader, fsSource: string | Shader);
    initialize(): Program;
    link(): Program;
    checkCompletion(): boolean;
    checkLinkage(): Program;
    initVariables(): void;
    uniform(name: string, value: number | boolean): Program;
    bind(): Program;
}
//# sourceMappingURL=Program.d.ts.map