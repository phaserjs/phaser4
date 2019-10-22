import { WEBGL_INFO } from './WebGLInfo';

export class Program
{
    gl: WebGL2RenderingContext;
    appState;
    program;
    transformFeedbackVaryings = null;
    uniforms = {};
    uniformBlocks = {};
    uniformBlockCount = 0;
    samplers = {};
    samplerCount = 0;

    vertexSource = null;
    vertexShader = null;
    fragmentSource = null;
    fragmentShader = null;
    linked = false;

    constructor (gl, appState, vsSource, fsSource, xformFeebackVars)
    {
        this.gl = gl;
        this.appState = appState;
        this.transformFeedbackVaryings = xformFeebackVars || null;

        if (typeof vsSource === 'string')
        {
            this.vertexSource = vsSource;
        }
        else
        {
            this.vertexShader = vsSource;
        }

        if (typeof fsSource === 'string')
        {
            this.fragmentSource = fsSource;
        }
        else
        {
            this.fragmentShader = fsSource;
        }

        this.initialize();
    }

    initialize (): Program
    {
        const gl = this.gl;
        const appState = this.appState;

        if (appState.program === this)
        {
            gl.useProgram(null);
            appState.program = null;
        }

        this.linked = false;
        this.uniformBlockCount = 0;
        this.samplerCount = 0;

        if (this.vertexSource)
        {
            this.vertexShader = new Shader(gl, appState, gl.VERTEX_SHADER, this.vertexSource);
        }

        if (this.fragmentSource)
        {
            this.fragmentShader = new Shader(gl, appState, gl.FRAGMENT_SHADER, this.fragmentSource);
        }

        this.program = this.gl.createProgram();

        return this;
    }

    link (): Program
    {
        const gl = this.gl;
        const program = this.program;

        gl.attachShader(program, this.vertexShader.shader);
        gl.attachShader(program, this.fragmentShader.shader);

        if (this.transformFeedbackVaryings)
        {
            this.gl.transformFeedbackVaryings(program, this.transformFeedbackVaryings, gl.SEPARATE_ATTRIBS);
        }

        gl.linkProgram(program);

        return this;
    }

    checkCompletion (): boolean
    {
        if (WEBGL_INFO.PARALLEL_SHADER_COMPILE)
        {
            // COMPLETION_STATUS_KHR
            return this.gl.getProgramParameter(this.program, 0x91B1);
        }

        return true;
    }

    checkLinkage (): Program
    {
        if (this.linked)
        {
            return this;
        }

        if (this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS))
        {
            this.linked = true;
            this.initVariables();
        }
        else
        {
            console.error(this.gl.getProgramInfoLog(this.program));

            this.vertexShader.checkCompilation();
            this.fragmentShader.checkCompilation();
        }

        if (this.vertexSource)
        {
            this.vertexShader.delete();
            this.vertexShader = null;
        }

        if (this.fragmentSource)
        {
            this.fragmentShader.delete();
            this.fragmentShader = null;
        }

        return this;
    }

    initVariables ()
    {
        this.bind();

        const gl = this.gl;
        const program = this.program;

        const numUniforms: number = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

        let textureUnit: number;

        for (let i = 0; i < numUniforms; ++i)
        {
            const uniformInfo = gl.getActiveUniform(program, i);
            const uniformHandle = gl.getUniformLocation(program, uniformInfo.name);
            const type = uniformInfo.type;
            const numElements = uniformInfo.size;

            let UniformClass = null;

            switch (type)
            {
                case gl.SAMPLER_2D:
                case gl.INT_SAMPLER_2D:
                case gl.UNSIGNED_INT_SAMPLER_2D:
                case gl.SAMPLER_2D_SHADOW:
                case gl.SAMPLER_2D_ARRAY:
                case gl.INT_SAMPLER_2D_ARRAY:
                case gl.UNSIGNED_INT_SAMPLER_2D_ARRAY:
                case gl.SAMPLER_2D_ARRAY_SHADOW:
                case gl.SAMPLER_CUBE:
                case gl.INT_SAMPLER_CUBE:
                case gl.UNSIGNED_INT_SAMPLER_CUBE:
                case gl.SAMPLER_CUBE_SHADOW:
                case gl.SAMPLER_3D:
                case gl.INT_SAMPLER_3D:
                case gl.UNSIGNED_INT_SAMPLER_3D:
                    textureUnit = this.samplerCount++;
                    this.samplers[uniformInfo.name] = textureUnit;
                    gl.uniform1i(uniformHandle, textureUnit);
                    break;

                case gl.INT:
                case gl.UNSIGNED_INT:
                case gl.FLOAT:
                    UniformClass = (numElements > 1) ? MultiNumericUniform : SingleComponentUniform;
                    break;

                case gl.BOOL:
                    UniformClass = (numElements > 1) ? MultiBoolUniform : SingleComponentUniform;
                    break;

                case gl.FLOAT_VEC2:
                case gl.INT_VEC2:
                case gl.UNSIGNED_INT_VEC2:
                case gl.FLOAT_VEC3:
                case gl.INT_VEC3:
                case gl.UNSIGNED_INT_VEC3:
                case gl.FLOAT_VEC4:
                case gl.INT_VEC4:
                case gl.UNSIGNED_INT_VEC4:
                    UniformClass = MultiNumericUniform;
                    break;

                case gl.BOOL_VEC2:
                case gl.BOOL_VEC3:
                case gl.BOOL_VEC4:
                    UniformClass = MultiBoolUniform;
                    break;

                case gl.FLOAT_MAT2:
                case gl.FLOAT_MAT3:
                case gl.FLOAT_MAT4:
                case gl.FLOAT_MAT2x3:
                case gl.FLOAT_MAT2x4:
                case gl.FLOAT_MAT3x2:
                case gl.FLOAT_MAT3x4:
                case gl.FLOAT_MAT4x2:
                case gl.FLOAT_MAT4x3:
                    UniformClass = MatrixUniform;
                    break;

                default:
                    console.error('Unrecognized uniform type: ' + uniformInfo.name);
                    break;
            }

            if (UniformClass)
            {
                this.uniforms[uniformInfo.name] = new UniformClass(gl, uniformHandle, type, numElements);
            }
        }

        const numUniformBlocks = gl.getProgramParameter(program, gl.ACTIVE_UNIFORM_BLOCKS);

        for (let i = 0; i < numUniformBlocks; ++i)
        {
            const blockName = gl.getActiveUniformBlockName(program, i);
            const blockIndex = gl.getUniformBlockIndex(program, blockName);

            const uniformBlockBase = this.uniformBlockCount++;

            gl.uniformBlockBinding(program, blockIndex, uniformBlockBase);

            this.uniformBlocks[blockName] = uniformBlockBase;
        }
    }

    // Set the value of a uniform.
    uniform (name, value)
    {
        // some uniforms are optimized out
        if (this.uniforms[name])
        {
            this.uniforms[name].set(value);
        }

        return this;
    }

    // Use this program.
    bind ()
    {
        if (this.appState.program !== this)
        {
            this.gl.useProgram(this.program);

            this.appState.program = this;
        }

        return this;
    }

}
