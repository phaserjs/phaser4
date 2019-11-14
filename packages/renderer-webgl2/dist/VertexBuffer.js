import { GetTypeSize } from './GetTypeSize';
export class VertexBuffer {
    constructor(gl, appState, type, itemSize, data, usage = gl.STATIC_DRAW, indexArray = false) {
        this.gl = gl;
        this.appState = appState;
        this.buffer = null;
        let numColumns = 1;
        if (type === gl.FLOAT_MAT4 || type === gl.FLOAT_MAT4x2 || type === gl.FLOAT_MAT4x3) {
            numColumns = 4;
        }
        else if (type === gl.FLOAT_MAT3 || type === gl.FLOAT_MAT3x2 || type === gl.FLOAT_MAT3x4) {
            numColumns = 3;
        }
        else if (type === gl.FLOAT_MAT2 || type === gl.FLOAT_MAT2x3 || type === gl.FLOAT_MAT2x4) {
            numColumns = 2;
        }
        if (type === gl.FLOAT_MAT4 || type === gl.FLOAT_MAT3x4 || type === gl.FLOAT_MAT2x4) {
            itemSize = 4;
            type = gl.FLOAT;
        }
        else if (type === gl.FLOAT_MAT3 || type === gl.FLOAT_MAT4x3 || type === gl.FLOAT_MAT2x3) {
            itemSize = 3;
            type = gl.FLOAT;
        }
        else if (type === gl.FLOAT_MAT2 || type === gl.FLOAT_MAT3x2 || type === gl.FLOAT_MAT4x2) {
            itemSize = 2;
            type = gl.FLOAT;
        }
        let dataLength;
        let byteLength;
        if (typeof data === 'number') {
            dataLength = data;
            if (type) {
                data *= GetTypeSize(type);
            }
            byteLength = data;
        }
        else {
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
    restore(data) {
        const { gl, appState, binding, byteLength, usage } = this;
        if (appState.vertexArray) {
            gl.bindVertexArray(null);
            appState.vertexArray = null;
        }
        this.buffer = gl.createBuffer();
        gl.bindBuffer(binding, this.buffer);
        if (data === undefined) {
            gl.bufferData(binding, byteLength, usage);
        }
        else {
            gl.bufferData(binding, data, usage);
        }
        gl.bindBuffer(binding, null);
        return this;
    }
    data(data, byteOffset = 0) {
        const { gl, appState, binding, buffer } = this;
        if (appState.vertexArray) {
            gl.bindVertexArray(null);
            appState.vertexArray = null;
        }
        gl.bindBuffer(binding, buffer);
        gl.bufferSubData(binding, byteOffset, data);
        gl.bindBuffer(binding, null);
        return this;
    }
    delete() {
        if (this.buffer) {
            this.gl.deleteBuffer(this.buffer);
            this.buffer = null;
        }
        return this;
    }
}
//# sourceMappingURL=VertexBuffer.js.map