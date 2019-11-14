import { VertexArray } from './VertexArray';
import { WebGL2Renderer } from './WebGL2Renderer';

export function CreateVertexArray (renderer: WebGL2Renderer): VertexArray
{
    return new VertexArray(renderer.gl, renderer.state);
}
