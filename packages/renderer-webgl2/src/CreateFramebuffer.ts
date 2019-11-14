import { Framebuffer } from './Framebuffer';
import { WebGL2Renderer } from './WebGL2Renderer';

export function CreateFramebuffer (renderer: WebGL2Renderer): Framebuffer
{
    return new Framebuffer(renderer.gl, renderer.state);
}
