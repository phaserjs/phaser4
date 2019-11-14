import { VertexBuffer } from './VertexBuffer';
export function CreateIndexBuffer(renderer, type, itemSize, data, usage = renderer.gl.STATIC_DRAW) {
    return new VertexBuffer(renderer.gl, renderer.state, type, itemSize, data, usage, true);
}
//# sourceMappingURL=CreateIndexBuffer.js.map