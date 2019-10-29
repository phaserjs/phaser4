export class Renderbuffer
{
    gl: WebGL2RenderingContext;
    renderbuffer: WebGLRenderbuffer;
    width: number;
    height: number;
    internalFormat: GLenum;
    samples: number;
    readonly is3D: boolean = false;

    constructor (gl: WebGL2RenderingContext, width: number, height: number, internalFormat: GLenum, samples = 0)
    {
        this.gl = gl;
        this.renderbuffer = null;
        this.width = width;
        this.height = height;
        this.internalFormat = internalFormat;
        this.samples = samples;

        this.restore();
    }

    restore (): Renderbuffer
    {
        this.renderbuffer = this.gl.createRenderbuffer();

        this.resize(this.width, this.height);

        return this;
    }

    resize (width: number, height: number): Renderbuffer
    {
        const gl = this.gl;

        this.width = width;
        this.height = height;

        gl.bindRenderbuffer(gl.RENDERBUFFER, this.renderbuffer);
        gl.renderbufferStorageMultisample(gl.RENDERBUFFER, this.samples, this.internalFormat, width, height);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        
        return this;
    }

    delete (): Renderbuffer
    {
        this.gl.deleteRenderbuffer(this.renderbuffer);

        this.renderbuffer = null;

        return this;
    }
}
