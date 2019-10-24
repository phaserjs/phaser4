import { GetUniform } from './GetUniform';

export class SingleComponentUniform
{
    gl: WebGL2RenderingContext;
    handle: WebGLUniformLocation;
    glFunc;
    cache: boolean | number;

    constructor (gl: WebGL2RenderingContext, handle: WebGLUniformLocation, info: WebGLActiveInfo)
    {
        this.gl = gl;

        this.handle = handle;

        const uniformData = GetUniform(gl, info.type);

        this.glFunc = uniformData.glFunc;

        this.cache = (info.type === gl.BOOL) ? false : 0;
    }

    set (value: boolean | number)
    {
        if (this.cache !== value)
        {
            this.glFunc(this.handle, value);

            this.cache = value;
        }
    }
}
