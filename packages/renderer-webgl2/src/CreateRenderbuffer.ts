import { Renderbuffer } from './Renderbuffer';
import { WebGL2Renderer } from './WebGL2Renderer';

export function CreateRenderbuffer (renderer: WebGL2Renderer, width: number, height: number, internalFormat: GLenum, samples: number = 0): Renderbuffer
{
    return new Renderbuffer(renderer.gl, width, height, internalFormat, samples);
}
