import { UNIFORMS } from './const';
import { MatrixUniform } from './MatrixUniform';
import { MultiBoolUniform } from './MultiBoolUniform';
import { MultiNumericUniform } from './MultiNumericUniform';
import { Shader } from './Shader';
import { SingleComponentUniform } from './SingleComponentUniform';
export class Program {
    constructor(gl, appState, vsSource, fsSource) {
        this.uniforms = {};
        this.uniformBlocks = {};
        this.uniformBlockCount = 0;
        this.samplers = {};
        this.samplerCount = 0;
        this.linked = false;
        this.gl = gl;
        this.appState = appState;
        if (typeof vsSource === 'string') {
            this.vertexSource = vsSource;
        }
        else {
            this.vertexShader = vsSource;
        }
        if (typeof fsSource === 'string') {
            this.fragmentSource = fsSource;
        }
        else {
            this.fragmentShader = fsSource;
        }
        this.initialize();
    }
    initialize() {
        const { gl, appState, vertexSource, fragmentSource } = this;
        if (appState.program === this) {
            gl.useProgram(null);
            appState.program = null;
        }
        this.linked = false;
        this.uniformBlockCount = 0;
        this.samplerCount = 0;
        if (vertexSource) {
            this.vertexShader = new Shader(gl, appState, gl.VERTEX_SHADER, vertexSource);
        }
        if (fragmentSource) {
            this.fragmentShader = new Shader(gl, appState, gl.FRAGMENT_SHADER, fragmentSource);
        }
        this.program = this.gl.createProgram();
        return this;
    }
    link() {
        const { gl, program, vertexShader, fragmentShader } = this;
        gl.attachShader(program, vertexShader.shader);
        gl.attachShader(program, fragmentShader.shader);
        gl.linkProgram(program);
        return this;
    }
    checkCompletion() {
        if (this.gl.getExtension('KHR_parallel_shader_compile')) {
            // COMPLETION_STATUS_KHR
            return this.gl.getProgramParameter(this.program, 0x91B1);
        }
        return true;
    }
    checkLinkage() {
        if (this.linked) {
            return this;
        }
        const { gl, program, vertexShader, fragmentShader, vertexSource, fragmentSource } = this;
        if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
            this.linked = true;
            this.initVariables();
        }
        else {
            console.error(gl.getProgramInfoLog(program));
            vertexShader.checkCompilation();
            fragmentShader.checkCompilation();
        }
        if (vertexSource) {
            vertexShader.delete();
            this.vertexShader = null;
        }
        if (fragmentSource) {
            fragmentShader.delete();
            this.fragmentShader = null;
        }
        return this;
    }
    initVariables() {
        this.bind();
        const gl = this.gl;
        const program = this.program;
        const numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        let textureUnit;
        for (let i = 0; i < numUniforms; i++) {
            const uniformInfo = gl.getActiveUniform(program, i);
            const uniformHandle = gl.getUniformLocation(program, uniformInfo.name);
            const type = uniformInfo.type;
            const numElements = uniformInfo.size;
            if (UNIFORMS.SAMPLER.indexOf(type) !== -1) {
                textureUnit = this.samplerCount++;
                this.samplers[uniformInfo.name] = textureUnit;
                gl.uniform1i(uniformHandle, textureUnit);
            }
            else if (UNIFORMS.VEC.indexOf(type) !== -1) {
                this.uniforms[uniformInfo.name] = new MultiNumericUniform(gl, uniformHandle, uniformInfo, numElements);
            }
            else if (UNIFORMS.MAT.indexOf(type) !== -1) {
                this.uniforms[uniformInfo.name] = new MatrixUniform(gl, uniformHandle, uniformInfo, numElements);
            }
            else if (UNIFORMS.BOOL.indexOf(type) !== -1) {
                if (numElements > 1) {
                    this.uniforms[uniformInfo.name] = new MultiBoolUniform(gl, uniformHandle, uniformInfo, numElements);
                }
                else {
                    this.uniforms[uniformInfo.name] = new SingleComponentUniform(gl, uniformHandle, uniformInfo);
                }
            }
            else if (type === gl.INT || type === gl.UNSIGNED_INT || type === gl.FLOAT) {
                if (numElements > 1) {
                    this.uniforms[uniformInfo.name] = new MultiNumericUniform(gl, uniformHandle, uniformInfo, numElements);
                }
                else {
                    this.uniforms[uniformInfo.name] = new SingleComponentUniform(gl, uniformHandle, uniformInfo);
                }
            }
            else {
                console.error('Unknown uniform type');
            }
        }
        const numUniformBlocks = gl.getProgramParameter(program, gl.ACTIVE_UNIFORM_BLOCKS);
        for (let i = 0; i < numUniformBlocks; i++) {
            const blockName = gl.getActiveUniformBlockName(program, i);
            const blockIndex = gl.getUniformBlockIndex(program, blockName);
            const uniformBlockBase = this.uniformBlockCount++;
            gl.uniformBlockBinding(program, blockIndex, uniformBlockBase);
            this.uniformBlocks[blockName] = uniformBlockBase;
        }
    }
    uniform(name, value) {
        if (this.uniforms[name]) {
            this.uniforms[name].set(value);
        }
        return this;
    }
    bind() {
        const appState = this.appState;
        if (appState.program !== this) {
            this.gl.useProgram(this.program);
            appState.program = this;
        }
        return this;
    }
    delete() {
        if (this.program) {
            this.gl.deleteProgram(this.program);
            this.program = null;
            if (this.appState.program === this) {
                this.gl.useProgram(null);
                this.appState.program = null;
            }
        }
        return this;
    }
}
//# sourceMappingURL=Program.js.map