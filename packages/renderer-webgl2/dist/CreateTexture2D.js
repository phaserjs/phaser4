import { Texture } from './Texture';
export function CreateTexture2D(renderer, image, width, height, options = {}) {
    if (!width && image && image.width) {
        width = image.width;
    }
    if (!height && image && image.height) {
        height = image.height;
    }
    return new Texture(renderer.gl, renderer.state, renderer.gl.TEXTURE_2D, image, width, height, 0, false, options);
}
//# sourceMappingURL=CreateTexture2D.js.map