import { IState } from './IState';
import { IAttributeOptions } from './IAttributeOptions';

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

    vertexAttributeBuffer (attributeIndex: number, vertexBuffer: VertexBuffer, options: IAttributeOptions): VertexArray
    {
        this.attributeBuffer(attributeIndex, vertexBuffer, options, false);

        return this;
    }
    
}
