import { VertexBuffer } from './VertexBuffer';
import { WebGL2Renderer } from './WebGL2Renderer';

export function CreateIndexBuffer (renderer: WebGL2Renderer, type: GLenum, itemSize: number, data: ArrayBufferView, usage: GLenum = renderer.gl.STATIC_DRAW): VertexBuffer
{
    return new VertexBuffer(renderer.gl, renderer.state, type, itemSize, data, usage, true);
}
