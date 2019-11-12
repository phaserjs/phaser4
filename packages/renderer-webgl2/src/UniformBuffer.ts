import { GetUniformSize } from './GetUniform';
import { IState } from './IState';

export class UniformBuffer
{
    gl: WebGL2RenderingContext;
    appState: IState;

    buffer: WebGLBuffer;
    dataViews: {};
    offsets: number[];
    sizes: number[];
    types: GLenum[];
    size: number;
    usage: GLenum;
    currentBase: GLuint;

    data: Float32Array;
    dirtyStart: number;
    dirtyEnd: number;

    constructor (gl: WebGL2RenderingContext, appState: IState, layout: GLenum[], usage: GLenum = gl.DYNAMIC_DRAW)
    {
        this.gl = gl;
        this.appState = appState;

        this.buffer = null;
        this.dataViews = {};

        const len = layout.length;

        const offsets = new Array(len);
        const sizes = new Array(len);
        const types = new Array(len);

        this.size = 0;
        this.usage = usage;

        // -1 indicates unbound
        this.currentBase = -1;

        for (let i = 0; i < len; i++)
        {
            const { size, uboType, stride } = GetUniformSize(layout[i]);

            if (size === 2)
            {
                this.size += this.size % 2;
            }
            else if (size === 4)
            {
                this.size += (4 - this.size % 4) % 4;
            }

            offsets[i] = this.size;
            sizes[i] = stride;
            types[i] = uboType;

            this.size += stride;
        }

        this.offsets = offsets;
        this.sizes = sizes;
        this.types = types;

        this.size += (4 - this.size % 4) % 4;

        const data = new Float32Array(this.size);

        this.dataViews[gl.FLOAT] = data;
        this.dataViews[gl.INT] = new Int32Array(data.buffer);
        this.dataViews[gl.UNSIGNED_INT] = new Uint32Array(data.buffer);

        this.data = data;

        this.dirtyStart = this.size;
        this.dirtyEnd = 0;

        this.restore();
    }

    restore (): UniformBuffer
    {
        const gl = this.gl;
        const appState = this.appState;
        const currentBase = this.currentBase;

        if (currentBase !== -1 && appState.uniformBuffers[currentBase] === this)
        {
            appState.uniformBuffers[currentBase] = null;
        }

        this.buffer = gl.createBuffer();

        gl.bindBuffer(gl.UNIFORM_BUFFER, this.buffer);
        gl.bufferData(gl.UNIFORM_BUFFER, this.size * 4, this.usage);
        gl.bindBuffer(gl.UNIFORM_BUFFER, null);

        return this;
    }

    set (index: number, value: ArrayBufferView | number[]): UniformBuffer
    {
        const view = this.dataViews[this.types[index]];
        const offset = this.offsets[index];
        const size = this.sizes[index];

        if (this.sizes[index] === 1)
        {
            view[offset] = value;
        }
        else
        {
            view.set(value, offset);
        }

        if (offset < this.dirtyStart)
        {
            this.dirtyStart = offset;
        }

        if (this.dirtyEnd < offset + size)
        {
            this.dirtyEnd = offset + size;
        }

        return this;
    }

    update (): UniformBuffer
    {
        const gl = this.gl;

        if (this.dirtyStart >= this.dirtyEnd)
        {
            return this;
        }

        const data = this.data.subarray(this.dirtyStart, this.dirtyEnd);
        const offset = this.dirtyStart * 4;

        gl.bindBuffer(gl.UNIFORM_BUFFER, this.buffer);
        gl.bufferSubData(gl.UNIFORM_BUFFER, offset, data);
        gl.bindBuffer(gl.UNIFORM_BUFFER, null);

        this.dirtyStart = this.size;
        this.dirtyEnd = 0;

        return this;
    }

    delete (): UniformBuffer
    {
        const gl = this.gl;
        const appState = this.appState;
        const currentBase = this.currentBase;

        if (this.buffer)
        {
            gl.deleteBuffer(this.buffer);

            this.buffer = null;

            if (currentBase !== -1 && appState.uniformBuffers[currentBase] === this)
            {
                appState.uniformBuffers[currentBase] = null;
            }
        }

        return this;
    }

    bind (index: GLuint): UniformBuffer
    {
        const gl = this.gl;
        const appState = this.appState;
        const currentBase = this.currentBase;
        const currentBuffer = appState.uniformBuffers[index];

        if (currentBuffer !== this)
        {
            if (currentBuffer)
            {
                currentBuffer.currentBase = -1;
            }

            if (currentBase !== -1)
            {
                appState.uniformBuffers[currentBase] = null;
            }

            gl.bindBufferBase(gl.UNIFORM_BUFFER, index, this.buffer);
            
            appState.uniformBuffers[index] = this;

            this.currentBase = index;
        }

        return this;
    }
}
