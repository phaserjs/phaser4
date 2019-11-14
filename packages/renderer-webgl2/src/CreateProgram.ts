import { Program } from './Program';
import { Shader } from './Shader';
import { WebGL2Renderer } from './WebGL2Renderer';

export function CreateProgram (renderer: WebGL2Renderer, vsSource: string | Shader, fsSource: string | Shader): Program
{
    const program = new Program(renderer.gl, renderer.state, vsSource, fsSource);

    program.link().checkLinkage();

    return program;
}
