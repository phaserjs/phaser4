import { GetUniform } from './GetUniform';
export class SingleComponentUniform {
    constructor(gl, handle, info) {
        this.gl = gl;
        this.handle = handle;
        const uniformData = GetUniform(gl, info.type);
        this.glFunc = uniformData.glFunc;
        this.cache = (info.type === gl.BOOL) ? false : 0;
    }
    set(value) {
        if (this.cache !== value) {
            this.glFunc(this.handle, value);
            this.cache = value;
        }
    }
}
//# sourceMappingURL=SingleComponentUniform.js.map