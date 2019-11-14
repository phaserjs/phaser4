import { DrawCall } from './DrawCall';
export function CreateDrawCall(renderer, program, vertexArray) {
    return new DrawCall(renderer.gl, renderer.state, program, vertexArray);
}
//# sourceMappingURL=CreateDrawCall.js.map