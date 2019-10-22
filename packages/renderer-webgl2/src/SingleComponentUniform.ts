

export class SingleComponentUniform
{
    gl: WebGL2RenderingContext;
    handle;
    glFuncName: string;
    cache: boolean | number;

    constructor (gl, handle, type)
    {
        this.gl = gl;
        this.handle = handle;
        this.glFuncName = UNIFORM_FUNC_NAME[type];
        this.cache = (type === gl.BOOL) ? false : 0;
    }

    set (value)
    {
        if (this.cache !== value)
        {
            this.gl[this.glFuncName](this.handle, value);
            this.cache = value;
        }
    }
}
