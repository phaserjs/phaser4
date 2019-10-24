export type IUniform1ui = (location: WebGLUniformLocation | null, x: number) => void;
export type IUniform2ui = (location: WebGLUniformLocation | null, x: number, y: number) => void;
export type IUniform3ui = (location: WebGLUniformLocation | null, x: number, y: number, z: number) => void;
export type IUniform4ui = (location: WebGLUniformLocation | null, x: number, y: number, z: number, w: number) => void;

export type IUniform1fv = (location: WebGLUniformLocation | null, data: Float32Array | number[], srcOffset?: number, srcLength?: number) => void;
export type IUniform2fv = (location: WebGLUniformLocation | null, data: Float32Array | number[], srcOffset?: number, srcLength?: number) => void;
export type IUniform3fv = (location: WebGLUniformLocation | null, data: Float32Array | number[], srcOffset?: number, srcLength?: number) => void;
export type IUniform4fv = (location: WebGLUniformLocation | null, data: Float32Array | number[], srcOffset?: number, srcLength?: number) => void;

export type IUniform1iv = (location: WebGLUniformLocation | null, data: Int32Array | number[], srcOffset?: number, srcLength?: number) => void;
export type IUniform2iv = (location: WebGLUniformLocation | null, data: Int32Array | number[], srcOffset?: number, srcLength?: number) => void;
export type IUniform3iv = (location: WebGLUniformLocation | null, data: Int32Array | number[], srcOffset?: number, srcLength?: number) => void;
export type IUniform4iv = (location: WebGLUniformLocation | null, data: Int32Array | number[], srcOffset?: number, srcLength?: number) => void;

export type IUniform1uiv = (location: WebGLUniformLocation | null, data: Uint32Array | number[], srcOffset?: number, srcLength?: number) => void;
export type IUniform2uiv = (location: WebGLUniformLocation | null, data: Uint32Array | number[], srcOffset?: number, srcLength?: number) => void;
export type IUniform3uiv = (location: WebGLUniformLocation | null, data: Uint32Array | number[], srcOffset?: number, srcLength?: number) => void;
export type IUniform4uiv = (location: WebGLUniformLocation | null, data: Uint32Array | number[], srcOffset?: number, srcLength?: number) => void;

export type IUniformMatrix2fv = (location: WebGLUniformLocation | null,   transpose: boolean, data: Float32Array, srcOffset?: number, srcLength?: number) => void;
export type IUniformMatrix3x2fv = (location: WebGLUniformLocation | null, transpose: boolean, data: Float32Array, srcOffset?: number, srcLength?: number) => void;
export type IUniformMatrix4x2fv = (location: WebGLUniformLocation | null, transpose: boolean, data: Float32Array, srcOffset?: number, srcLength?: number) => void;
export type IUniformMatrix2x3fv = (location: WebGLUniformLocation | null, transpose: boolean, data: Float32Array, srcOffset?: number, srcLength?: number) => void;
export type IUniformMatrix3fv = (location: WebGLUniformLocation | null,   transpose: boolean, data: Float32Array, srcOffset?: number, srcLength?: number) => void;
export type IUniformMatrix4x3fv = (location: WebGLUniformLocation | null, transpose: boolean, data: Float32Array, srcOffset?: number, srcLength?: number) => void;
export type IUniformMatrix2x4fv = (location: WebGLUniformLocation | null, transpose: boolean, data: Float32Array, srcOffset?: number, srcLength?: number) => void;
export type IUniformMatrix3x4fv = (location: WebGLUniformLocation | null, transpose: boolean, data: Float32Array, srcOffset?: number, srcLength?: number) => void;

export type IUniform =
    IUniform1ui | IUniform2ui | IUniform3ui | IUniform4ui |
    IUniform1fv | IUniform2fv | IUniform3fv | IUniform4fv |
    IUniform1iv | IUniform2iv | IUniform3iv | IUniform4iv |
    IUniform1uiv | IUniform2uiv | IUniform3uiv | IUniform4uiv |
    IUniformMatrix2fv | IUniformMatrix3x2fv | IUniformMatrix4x2fv | IUniformMatrix2x3fv |
    IUniformMatrix3fv | IUniformMatrix4x3fv | IUniformMatrix2x4fv | IUniformMatrix3x4fv;

export interface IUniformData
{
    glFunc: IUniform;
    size: number;
    cacheClass: (size: number) => (Float32Array | Int32Array | Uint32Array);
}
