import { Program } from './Program';
export function CreateProgram(renderer, vsSource, fsSource) {
    const program = new Program(renderer.gl, renderer.state, vsSource, fsSource);
    program.link().checkLinkage();
    return program;
}
//# sourceMappingURL=CreateProgram.js.map