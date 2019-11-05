import { GetUniform } from './GetUniform';
export class MatrixUniform {
    constructor(gl, handle, info, count) {
        this.gl = gl;
        this.handle = handle;
        this.count = count;
        const uniformData = GetUniform(gl, info.type);
        this.glFunc = uniformData.glFunc.bind(gl);
        this.cache = uniformData.cacheClass(uniformData.size * count);
    }
    set(value) {
        for (let i = 0; i < value.length; i++) {
            if (this.cache[i] !== value[i]) {
                this.glFunc(this.handle, false, value);
                this.cache.set(value);
                return;
            }
        }
    }
}
//# sourceMappingURL=MatrixUniform.js.map