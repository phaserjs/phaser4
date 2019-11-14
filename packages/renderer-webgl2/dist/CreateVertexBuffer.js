import { VertexBuffer } from './VertexBuffer';
export function CreateVertexBuffer(renderer, type, itemSize, data, usage) {
    return new VertexBuffer(renderer.gl, renderer.state, type, itemSize, data, usage);
}
//# sourceMappingURL=CreateVertexBuffer.js.map