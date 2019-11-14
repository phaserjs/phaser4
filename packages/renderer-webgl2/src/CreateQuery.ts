import { Query } from './Query';
import { WebGL2Renderer } from './WebGL2Renderer';

export function CreateQuery (renderer: WebGL2Renderer, target: GLenum): Query
{
    return new Query(renderer.gl, target);
}
