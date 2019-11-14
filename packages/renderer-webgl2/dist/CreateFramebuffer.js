import { Framebuffer } from './Framebuffer';
export function CreateFramebuffer(renderer) {
    return new Framebuffer(renderer.gl, renderer.state);
}
//# sourceMappingURL=CreateFramebuffer.js.map