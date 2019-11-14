import { VertexBuffer } from './VertexBuffer';
import { WebGL2Renderer } from './WebGL2Renderer';

export function CreateMatrixBuffer (renderer: WebGL2Renderer, type: GLenum, data: ArrayBufferView, usage: GLenum = renderer.gl.STATIC_DRAW): VertexBuffer
{
    return new VertexBuffer(renderer.gl, renderer.state, type, 0, data, usage);
}
