import { Renderbuffer } from './Renderbuffer';
export function CreateRenderbuffer(renderer, width, height, internalFormat, samples = 0) {
    return new Renderbuffer(renderer.gl, width, height, internalFormat, samples);
}
//# sourceMappingURL=CreateRenderbuffer.js.map