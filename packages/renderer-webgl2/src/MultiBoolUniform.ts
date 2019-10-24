import { GetUniform } from './GetUniform';

export class MultiBoolUniform
{
    gl: WebGL2RenderingContext;
    handle: WebGLUniformLocation;
    glFunc;
    count: number;
    cache: boolean[];

    constructor (gl: WebGL2RenderingContext, handle: WebGLUniformLocation, info: WebGLActiveInfo, count: number)
    {
        this.gl = gl;

        this.handle = handle;

        this.count = count;

        const uniformData = GetUniform(gl, info.type);

        this.glFunc = uniformData.glFunc;

        this.cache = new Array(uniformData.size * count).fill(false);
    }

    set (value: boolean[])
    {
        for (let i = 0; i < value.length; i++)
        {
            if (this.cache[i] !== value[i])
            {
                this.glFunc(this.handle, value);

                for (let j = i; j < value.length; j++)
                {
                    this.cache[j] = value[j];
                }

                return;
            }
        }
    }
}
