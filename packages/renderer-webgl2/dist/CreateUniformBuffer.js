import { UniformBuffer } from './UniformBuffer';
export function CreateUniformBuffer(renderer, layout, usage = renderer.gl.DYNAMIC_DRAW) {
    return new UniformBuffer(renderer.gl, renderer.state, layout, usage);
}
//# sourceMappingURL=CreateUniformBuffer.js.map