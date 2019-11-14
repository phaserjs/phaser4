import { DrawCall } from './DrawCall';
import { Program } from './Program';
import { VertexArray } from './VertexArray';
import { WebGL2Renderer } from './WebGL2Renderer';

export function CreateDrawCall (renderer: WebGL2Renderer, program: Program, vertexArray: VertexArray): DrawCall
{
    return new DrawCall(renderer.gl, renderer.state, program, vertexArray);
}
