import { GetTypeSize } from './GetTypeSize';
import { IState } from './IState';

export class VertexBuffer
{
    gl: WebGL2RenderingContext;
    appState: IState;
    buffer: WebGLBuffer;
    type: GLenum;
    itemSize: number;
    numItems: number;
    usage: GLenum;
    indexArray: boolean;
    binding: GLenum;
    numColumns: number;
    byteLength: number;
    integer: boolean;

    constructor (gl: WebGL2RenderingContext, appState: IState, type: GLenum, itemSize: number, data?: number | BufferSource, usage: GLenum = gl.STATIC_DRAW, indexArray: boolean = false)
    {
        this.gl = gl;
        this.appState = appState;
        this.buffer = null;

        let numColumns: number = 1;

        if (type === gl.FLOAT_MAT4 || type === gl.FLOAT_MAT4x2 || type === gl.FLOAT_MAT4x3)
        {
            numColumns = 4;
        }
        else if (type === gl.FLOAT_MAT3 || type === gl.FLOAT_MAT3x2 || type === gl.FLOAT_MAT3x4)
        {
            numColumns = 3;
        }
        else if (type === gl.FLOAT_MAT2 || type === gl.FLOAT_MAT2x3 || type === gl.FLOAT_MAT2x4)
        {
            numColumns = 2;
        }

        if (type === gl.FLOAT_MAT4 || type === gl.FLOAT_MAT3x4 || type === gl.FLOAT_MAT2x4)
        {
            itemSize = 4;
            type = gl.FLOAT;
        }
        else if (type === gl.FLOAT_MAT3 || type === gl.FLOAT_MAT4x3 || type === gl.FLOAT_MAT2x3)
        {
            itemSize = 3;
            type = gl.FLOAT;
        }
        else if (type === gl.FLOAT_MAT2 || type === gl.FLOAT_MAT3x2 || type === gl.FLOAT_MAT4x2)
        {
            itemSize = 2;
            type = gl.FLOAT;
        }

        let dataLength: number;
        let byteLength: number;

        if (typeof data === 'number')
        {
            dataLength = data;

            if (type)
            {
                data *= GetTypeSize(type);
            }

            byteLength = data;
        }
        else
        {
            byteLength = data.byteLength;

            //  Otherwise TypeScript moans that 'length' isn't a valid property, but it is.
            dataLength = data['length'];
        }

        this.type = type;
        this.itemSize = itemSize;
        this.numItems = (type) ? dataLength / (itemSize * numColumns) : byteLength / itemSize;
        this.numColumns = numColumns;
        this.byteLength = byteLength;
        this.usage = usage;
        this.indexArray = Boolean(indexArray);
        this.integer = (type === gl.BYTE || type === gl.UNSIGNED_BYTE || type === gl.SHORT || type === gl.UNSIGNED_SHORT || type === gl.INT || type === gl.UNSIGNED_INT);
        this.binding = (this.indexArray) ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;

        this.restore(data);
    }

    restore (data?: number | BufferSource): VertexBuffer
    {
        const gl = this.gl;
        const appState = this.appState;
        const binding = this.binding;

        if (appState.vertexArray)
        {
            gl.bindVertexArray(null);
            appState.vertexArray = null;
        }

        this.buffer = gl.createBuffer();

        gl.bindBuffer(binding, this.buffer);

        if (data === undefined)
        {
            gl.bufferData(binding, this.byteLength, this.usage);
        }
        else
        {
            gl.bufferData(binding, data as BufferSource, this.usage);
        }

        gl.bindBuffer(binding, null);

        return this;
    }

    data (data: BufferSource, byteOffset: number = 0): VertexBuffer
    {
        const gl = this.gl;
        const appState = this.appState;
        const binding = this.binding;

        if (appState.vertexArray)
        {
            gl.bindVertexArray(null);
            appState.vertexArray = null;
        }

        gl.bindBuffer(binding, this.buffer);
        gl.bufferSubData(binding, byteOffset, data);
        gl.bindBuffer(binding, null);

        return this;
    }

    delete (): VertexBuffer
    {
        if (this.buffer)
        {
            this.gl.deleteBuffer(this.buffer);
            this.buffer = null;
        }

        return this;
    }
}
