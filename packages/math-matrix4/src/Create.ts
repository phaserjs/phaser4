import { IMatrix4 } from './IMatrix4';

export function Create (m00: number = 1, m01: number = 0, m02: number = 0, m03: number = 0, m10: number = 0, m11: number = 1, m12: number = 0, m13: number = 0, m20: number = 0, m21: number = 0, m22: number = 1, m23: number = 0, m30: number = 0, m31: number = 0, m32: number = 0, m33: number = 1): IMatrix4
{
    return { m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 };
}
