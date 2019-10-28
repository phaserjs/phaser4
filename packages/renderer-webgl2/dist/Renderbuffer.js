export class Renderbuffer {
    constructor(gl, width, height, internalFormat, samples = 0) {
        this.gl = gl;
        this.renderbuffer = null;
        this.width = width;
        this.height = height;
        this.internalFormat = internalFormat;
        this.samples = samples;
        this.restore();
    }
    restore() {
        this.renderbuffer = this.gl.createRenderbuffer();
        this.resize(this.width, this.height);
        return this;
    }
    resize(width, height) {
        const gl = this.gl;
        this.width = width;
        this.height = height;
        gl.bindRenderbuffer(gl.RENDERBUFFER, this.renderbuffer);
        gl.renderbufferStorageMultisample(gl.RENDERBUFFER, this.samples, this.internalFormat, width, height);
        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        return this;
    }
    delete() {
        this.gl.deleteRenderbuffer(this.renderbuffer);
        this.renderbuffer = null;
        return this;
    }
}
//# sourceMappingURL=Renderbuffer.js.map