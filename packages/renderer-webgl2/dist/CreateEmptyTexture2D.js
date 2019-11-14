import { Texture } from './Texture';
export function CreateEmptyTexture2D(renderer, width, height, options = {}) {
    return new Texture(renderer.gl, renderer.state, renderer.gl.TEXTURE_2D, null, width, height, 0, false, options);
}
//# sourceMappingURL=CreateEmptyTexture2D.js.map