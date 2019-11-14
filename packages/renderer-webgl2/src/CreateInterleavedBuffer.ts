import { VertexBuffer } from './VertexBuffer';
import { WebGL2Renderer } from './WebGL2Renderer';

export function CreateInterleavedBuffer (renderer: WebGL2Renderer, bytesPerVertex: number, data: ArrayBufferView | number, usage: GLenum = renderer.gl.STATIC_DRAW): VertexBuffer
{
    return new VertexBuffer(renderer.gl, renderer.state, null, bytesPerVertex, data, usage);
}
