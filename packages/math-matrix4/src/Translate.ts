import { IMatrix4 } from './IMatrix4';
import { Matrix4 } from './Matrix4';

export function Translate (src: IMatrix4, x: number, y: number, z: number, out: Matrix4 = new Matrix4()): Matrix4
{
    const a00: number = src.m00;
    const a01: number = src.m01;
    const a02: number = src.m02;
    const a03: number = src.m03;

    const a10: number = src.m10;
    const a11: number = src.m11;
    const a12: number = src.m12;
    const a13: number = src.m13;

    const a20: number = src.m20;
    const a21: number = src.m21;
    const a22: number = src.m22;
    const a23: number = src.m23;

    const a30: number = src.m30;
    const a31: number = src.m31;
    const a32: number = src.m32;
    const a33: number = src.m33;

    if (src === out)
    {
        out.m30 = a00 * x + a10 * y + a20 * z + a30;
        out.m31 = a01 * x + a11 * y + a21 * z + a31;
        out.m32 = a02 * x + a12 * y + a22 * z + a32;
        out.m33 = a03 * x + a13 * y + a23 * z + a33;
    }
    else
    {
        out.m00 = a00;
        out.m01 = a01;
        out.m02 = a02;
        out.m03 = a03;

        out.m10 = a10;
        out.m11 = a11;
        out.m12 = a12;
        out.m13 = a13;

        out.m20 = a20;
        out.m21 = a21;
        out.m22 = a22;
        out.m23 = a23;

        out.m30 = a00 * x + a10 * y + a20 * z + a30;
        out.m31 = a01 * x + a11 * y + a21 * z + a31;
        out.m32 = a02 * x + a12 * y + a22 * z + a32;
        out.m33 = a03 * x + a13 * y + a23 * z + a33;
    }

    return out;
}
