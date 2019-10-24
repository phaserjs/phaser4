import { GetTypeSize } from './GetTypeSize';
import { IAttributeOptions } from './IAttributeOptions';
import { IState } from './IState';
import { VertexBuffer } from './VertexBuffer';

export class VertexArray
{
    gl: WebGL2RenderingContext;
    appState: IState;
    vertexArray: WebGLVertexArrayObject;
    indexType: GLenum;
    indexed: boolean;
    numElements: number;
    numInstances: number;
    offsets: number;
    numDraws: number;

    constructor (gl: WebGL2RenderingContext, appState: IState)
    {
        this.gl = gl;
        this.appState = appState;
        this.vertexArray = null;
        this.indexType = null;
        this.indexed = false;
        this.numElements = 0;
        this.numInstances = 1;
        this.offsets = 0;
        this.numDraws = 1;
    }

    restore (): VertexArray
    {
        const appState = this.appState;

        if (appState.vertexArray === this)
        {
            appState.vertexArray = null;
        }

        // re-allocate at gl level, if necessary
        if (this.vertexArray !== null)
        {
            this.vertexArray = this.gl.createVertexArray();
        }

        return this;
    }

    vertexAttributeBuffer (attributeIndex: number, vertexBuffer: VertexBuffer, options?: IAttributeOptions): VertexArray
    {
        this.attributeBuffer(attributeIndex, vertexBuffer, options, false);

        return this;
    }

    instanceAttributeBuffer (attributeIndex: number, vertexBuffer: VertexBuffer, options?: IAttributeOptions): VertexArray
    {
        this.attributeBuffer(attributeIndex, vertexBuffer, options, true);

        return this;
    }

    indexBuffer (vertexBuffer: VertexBuffer): VertexArray
    {
        const gl = this.gl;

        // allocate at gl level, if necessary
        if (this.vertexArray === null)
        {
            this.vertexArray = gl.createVertexArray();
        }

        this.bind();

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, vertexBuffer.buffer);

        this.numElements = vertexBuffer.numItems * 3;
        this.indexType = vertexBuffer.type;
        this.indexed = true;

        return this;
    }
    
    delete (): VertexArray
    {
        if (this.vertexArray)
        {
            this.gl.deleteVertexArray(this.vertexArray);
            this.vertexArray = null;

            if (this.appState.vertexArray === this)
            {
                this.gl.bindVertexArray(null);
                this.appState.vertexArray = null;
            }
        }

        return this;
    }

    bind (): VertexArray
    {
        if (this.appState.vertexArray !== this)
        {
            this.gl.bindVertexArray(this.vertexArray);
            this.appState.vertexArray = this;
        }

        return this;
    }

    attributeBuffer (attributeIndex: number, vertexBuffer: VertexBuffer, options: IAttributeOptions = {}, instanced: boolean): VertexArray
    {
        const gl = this.gl;

        // allocate at gl level, if necessary
        if (this.vertexArray === null)
        {
            this.vertexArray = gl.createVertexArray();
        }

        this.bind();

        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer.buffer);

        const {
            type = vertexBuffer.type,
            size = vertexBuffer.itemSize,
            offset = 0,
            normalized = false,
            integer = Boolean(vertexBuffer.integer && !normalized)
        } = options;

        let {
            stride = 0,
        } = options;

        const numColumns: number = vertexBuffer.numColumns;

        if (stride === 0)
        {
            //  Set explicitly for matrix buffers
            stride = numColumns * size * GetTypeSize(type);
        }

        for (let i = 0; i < numColumns; i++)
        {
            if (integer)
            {
                gl.vertexAttribIPointer(
                    attributeIndex + i,
                    size,
                    type,
                    stride,
                    offset + i * size * GetTypeSize(type));
            }
            else
            {
                gl.vertexAttribPointer(
                    attributeIndex + i,
                    size,
                    type,
                    normalized,
                    stride,
                    offset + i * size * GetTypeSize(type));
            }

            if (instanced)
            {
                gl.vertexAttribDivisor(attributeIndex + i, 1);
            }

            gl.enableVertexAttribArray(attributeIndex + i);
        }

        if (this.numDraws === 1)
        {
            if (instanced)
            {
                this.numInstances = vertexBuffer.numItems;
            }
            else
            {
                this.numElements = this.numElements || vertexBuffer.numItems;
            }
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        return this;
    }
}
