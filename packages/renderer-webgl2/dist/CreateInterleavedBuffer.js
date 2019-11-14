import { VertexBuffer } from './VertexBuffer';
export function CreateInterleavedBuffer(renderer, bytesPerVertex, data, usage = renderer.gl.STATIC_DRAW) {
    return new VertexBuffer(renderer.gl, renderer.state, null, bytesPerVertex, data, usage);
}
//# sourceMappingURL=CreateInterleavedBuffer.js.map