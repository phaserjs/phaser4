import { IState } from './IState';

export class Shader
{
    gl: WebGL2RenderingContext;
    appState: IState;
    shader: WebGLShader;
    type: number;
    source: string;

    constructor (gl: WebGL2RenderingContext, appState: IState, type: number, source: string)
    {
        this.gl = gl;
        this.appState = appState;

        //  Either gl.VERTEX_SHADER or gl.FRAGMENT_SHADER
        this.type = type;

        this.source = source;

        this.restore();
    }

    restore (): Shader
    {
        const gl = this.gl;

        const shader = gl.createShader(this.type);

        gl.shaderSource(shader, this.source);

        gl.compileShader(shader);

        this.shader = shader;

        return this;

    }

    delete (): Shader
    {
        if (this.shader)
        {
            this.gl.deleteShader(this.shader);
            this.shader = null;
        }

        return this;
    }

    checkCompilation (): Shader
    {
        const gl = this.gl;
        const shader = this.shader;

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        {
            console.error(gl.getShaderInfoLog(shader));

            // tslint:disable-next-line: quotemark
            const lines = this.source.split("\n");

            for (let i = 0; i < lines.length; ++i)
            {
                console.error(`${i + 1}: ${lines[i]}`);
            }
        }

        return this;
    }
}
