import { VertexBuffer } from './VertexBuffer';
export function CreateMatrixBuffer(renderer, type, data, usage = renderer.gl.STATIC_DRAW) {
    return new VertexBuffer(renderer.gl, renderer.state, type, 0, data, usage);
}
//# sourceMappingURL=CreateMatrixBuffer.js.map