import { ITexture } from './ITexture';
import { Texture } from './Texture';
import { WebGL2Renderer } from './WebGL2Renderer';

export function CreateEmptyTexture2D (renderer: WebGL2Renderer, width: number, height: number, options: ITexture = {}): Texture
{
    return new Texture(renderer.gl, renderer.state, renderer.gl.TEXTURE_2D, null, width, height, 0, false, options);
}
