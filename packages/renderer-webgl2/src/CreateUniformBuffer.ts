import { UniformBuffer } from './UniformBuffer';
import { WebGL2Renderer } from './WebGL2Renderer';

export function CreateUniformBuffer (renderer: WebGL2Renderer, layout: GLenum[], usage: GLenum = renderer.gl.DYNAMIC_DRAW): UniformBuffer
{
    return new UniformBuffer(renderer.gl, renderer.state, layout, usage);
}
