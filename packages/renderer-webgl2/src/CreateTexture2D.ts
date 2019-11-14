import { ITexture } from './ITexture';
import { Texture } from './Texture';
import { WebGL2Renderer } from './WebGL2Renderer';

export function CreateTexture2D (renderer: WebGL2Renderer, image: TexImageSource, width?: number, height?: number, options: ITexture = {}): Texture
{
    if (!width && image && image.width)
    {
        width = image.width;
    }

    if (!height && image && image.height)
    {
        height = image.height;
    }

    return new Texture(renderer.gl, renderer.state, renderer.gl.TEXTURE_2D, image, width, height, 0, false, options);
}
