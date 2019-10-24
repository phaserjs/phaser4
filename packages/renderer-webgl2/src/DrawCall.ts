import { IState } from './IState';
import { Program } from './Program';
import { VertexArray } from './VertexArray';

export class DrawCall
{
    gl: WebGL2RenderingContext;
    appState: IState;
    currentProgram: Program;
    drawPrimitive: GLenum;
    currentVertexArray: VertexArray;
    // currentTransformFeedback: any;
    uniformIndices: {};
    uniformNames: string[];
    uniformValues: any[];
    uniformCount: number;
    uniformBuffers: any[];
    uniformBlockNames: any[];
    uniformBlockCount: number;
    textures: any[];
    textureCount: number;
    offsets: Int32Array;
    numElements: Int32Array;
    numInstances: Int32Array;
    numDraws: number;

    constructor (gl: WebGL2RenderingContext, appState: IState, program: Program, vertexArray: VertexArray = null)
    {
        this.gl = gl;
        this.appState = appState;

        this.currentProgram = program;
        this.drawPrimitive = gl.TRIANGLES;
        this.currentVertexArray = vertexArray;
        // this.currentTransformFeedback = null;
        this.appState = appState;

        this.uniformIndices = {};

        this.uniformNames = new Array(appState.maxUniforms);
        this.uniformValues = new Array(appState.maxUniforms);

        this.uniformCount = 0;

        this.uniformBuffers = new Array(appState.maxUniformBuffers);

        this.uniformBlockNames = new Array(appState.maxUniformBuffers);
        this.uniformBlockCount = 0;

        this.textures = new Array(appState.maxTextureUnits);
        this.textureCount = 0;

        this.offsets = new Int32Array(1);
        this.numElements = new Int32Array(1);
        this.numInstances = new Int32Array(1);

        if (this.currentVertexArray)
        {
            this.numElements[0] = this.currentVertexArray.numElements;
            this.numInstances[0] = this.currentVertexArray.numInstances;
        }

        this.numDraws = 1;
    }

    setPrimitive (primitive: GLenum): DrawCall
    {
        this.drawPrimitive = primitive;

        return this;
    }

    /*
    transformFeedback(transformFeedback)
    {
        this.currentTransformFeedback = transformFeedback;

        return this;
    }
    */

   uniform (name: string, value): DrawCall
   {
        let index = this.uniformIndices[name];

        if (index === undefined)
        {
            index = this.uniformCount++;
            this.uniformIndices[name] = index;
            this.uniformNames[index] = name;
        }

        this.uniformValues[index] = value;

        return this;
    }

    /*
    uniformBlock (name: string, buffer)
    {
        const base = this.currentProgram.uniformBlocks[name];

        this.uniformBuffers[base] = buffer;

        return this;
    }
    */

   drawRanges (...counts): DrawCall
   {
        this.numDraws = counts.length;

        if (this.offsets.length < this.numDraws)
        {
            this.offsets = new Int32Array(this.numDraws);
        }

        if (this.numElements.length < this.numDraws)
        {
            this.numElements = new Int32Array(this.numDraws);
        }

        if (this.numInstances.length < this.numDraws)
        {
            this.numInstances = new Int32Array(this.numDraws);
        }

        for (let i = 0; i < this.numDraws; ++i)
        {
            const count = counts[i];

            this.offsets[i] = count[0];
            this.numElements[i] = count[1];
            this.numInstances[i] = count[2] || 1;
        }

        return this;
    }

    draw (): DrawCall
    {
        const gl = this.gl;
        const appState = this.appState;

        const uniformNames = this.uniformNames;
        const uniformValues = this.uniformValues;
        const uniformBuffers = this.uniformBuffers;
        const uniformBlockCount = this.currentProgram.uniformBlockCount;
        const textures = this.textures;
        const textureCount = this.currentProgram.samplerCount;
        const drawPrimitive = this.drawPrimitive;
        const numElements = this.numElements;
        const numInstances = this.numInstances;
        const currentVertexArray = this.currentVertexArray;
        const offsets = this.offsets;
        const numDraws = this.numDraws;

        let indexed = false;

        this.currentProgram.bind();

        if (currentVertexArray)
        {
            currentVertexArray.bind();

            indexed = currentVertexArray.indexed;
        }

        for (let uIndex = 0; uIndex < this.uniformCount; uIndex++)
        {
            this.currentProgram.uniform(uniformNames[uIndex], uniformValues[uIndex]);
        }

        for (let base = 0; base < uniformBlockCount; base++)
        {
            uniformBuffers[base].bind(base);
        }

        for (let tIndex = 0; tIndex < textureCount; tIndex++)
        {
            textures[tIndex].bind(tIndex);
        }

        /*
        if (this.currentTransformFeedback)
        {
            this.currentTransformFeedback.bind();
            this.gl.beginTransformFeedback(this.drawPrimitive);
        }
        else if (this.appState.transformFeedback)
        {
            this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, null);
            this.appState.transformFeedback = null;
        }
        */

        if (appState.multiDrawInstanced)
        {
            const ext = appState.extensions.multiDrawInstanced;

            if (indexed)
            {
                ext.multiDrawElementsInstancedWEBGL(drawPrimitive, numElements, 0, currentVertexArray.indexType, offsets, 0, numInstances, 0, numDraws);
            }
            else
            {
                ext.multiDrawArraysInstancedWEBGL(drawPrimitive, offsets, 0, numElements, 0, numInstances, 0, numDraws);
            }
        }
        else if (indexed)
        {
            for (let i = 0; i < numDraws; i++)
            {
                gl.drawElementsInstanced(drawPrimitive, numElements[i], currentVertexArray.indexType, offsets[i], numInstances[i]);
            }
        }
        else
        {
            for (let i = 0; i < numDraws; i++)
            {
                gl.drawArraysInstanced(drawPrimitive, offsets[i], numElements[i], numInstances[i]);
            }
        }

        /*
        if (this.currentTransformFeedback)
        {
            this.gl.endTransformFeedback();
        }
        */

        return this;
    }
}
