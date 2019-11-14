export class DrawCall {
    constructor(gl, appState, program, vertexArray = null) {
        this.gl = gl;
        this.appState = appState;
        this.currentProgram = program;
        this.drawPrimitive = gl.TRIANGLES;
        this.currentVertexArray = vertexArray;
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
        if (vertexArray) {
            this.numElements[0] = vertexArray.numElements;
            this.numInstances[0] = vertexArray.numInstances;
        }
        this.numDraws = 1;
    }
    setPrimitive(primitive) {
        this.drawPrimitive = primitive;
        return this;
    }
    uniform(name, value) {
        let index = this.uniformIndices[name];
        if (index === undefined) {
            index = this.uniformCount++;
            this.uniformIndices[name] = index;
            this.uniformNames[index] = name;
        }
        this.uniformValues[index] = value;
        return this;
    }
    uniformBlock(name, buffer) {
        const base = this.currentProgram.uniformBlocks[name];
        this.uniformBuffers[base] = buffer;
        return this;
    }
    texture(name, texture) {
        const unit = this.currentProgram.samplers[name];
        this.textures[unit] = texture;
        return this;
    }
    drawRanges(...counts) {
        this.numDraws = counts.length;
        if (this.offsets.length < this.numDraws) {
            this.offsets = new Int32Array(this.numDraws);
        }
        if (this.numElements.length < this.numDraws) {
            this.numElements = new Int32Array(this.numDraws);
        }
        if (this.numInstances.length < this.numDraws) {
            this.numInstances = new Int32Array(this.numDraws);
        }
        for (let i = 0; i < this.numDraws; ++i) {
            const count = counts[i];
            this.offsets[i] = count[0];
            this.numElements[i] = count[1];
            this.numInstances[i] = count[2] || 1;
        }
        return this;
    }
    draw() {
        const { gl, appState, uniformNames, uniformValues, uniformBuffers, uniformBlockCount } = this;
        const { textures, textureCount, drawPrimitive, numElements, numInstances, currentVertexArray, offsets, numDraws } = this;
        let indexed = false;
        this.currentProgram.bind();
        if (currentVertexArray) {
            currentVertexArray.bind();
            indexed = currentVertexArray.indexed;
        }
        for (let uIndex = 0; uIndex < this.uniformCount; uIndex++) {
            this.currentProgram.uniform(uniformNames[uIndex], uniformValues[uIndex]);
        }
        for (let base = 0; base < uniformBlockCount; base++) {
            uniformBuffers[base].bind(base);
        }
        for (let tIndex = 0; tIndex < textureCount; tIndex++) {
            textures[tIndex].bind(tIndex);
        }
        if (appState.multiDrawInstanced) {
            const ext = appState.extensions.multiDrawInstanced;
            if (indexed) {
                ext.multiDrawElementsInstancedWEBGL(drawPrimitive, numElements, 0, currentVertexArray.indexType, offsets, 0, numInstances, 0, numDraws);
            }
            else {
                ext.multiDrawArraysInstancedWEBGL(drawPrimitive, offsets, 0, numElements, 0, numInstances, 0, numDraws);
            }
        }
        else if (indexed) {
            for (let i = 0; i < numDraws; i++) {
                gl.drawElementsInstanced(drawPrimitive, numElements[i], currentVertexArray.indexType, offsets[i], numInstances[i]);
            }
        }
        else {
            for (let i = 0; i < numDraws; i++) {
                gl.drawArraysInstanced(drawPrimitive, offsets[i], numElements[i], numInstances[i]);
            }
        }
        return this;
    }
}
//# sourceMappingURL=DrawCall.js.map