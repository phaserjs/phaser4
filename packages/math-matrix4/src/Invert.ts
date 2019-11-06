import { IMatrix4 } from './IMatrix4';
import { Matrix4 } from './Matrix4';

export function Invert (src: IMatrix4, dest: Matrix4 = new Matrix4()): Matrix4
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

    const b00: number = a00 * a11 - a01 * a10;
    const b01: number = a00 * a12 - a02 * a10;
    const b02: number = a00 * a13 - a03 * a10;
    const b03: number = a01 * a12 - a02 * a11;
    const b04: number = a01 * a13 - a03 * a11;
    const b05: number = a02 * a13 - a03 * a12;
    const b06: number = a20 * a31 - a21 * a30;
    const b07: number = a20 * a32 - a22 * a30;
    const b08: number = a20 * a33 - a23 * a30;
    const b09: number = a21 * a32 - a22 * a31;
    const b10: number = a21 * a33 - a23 * a31;
    const b11: number = a22 * a33 - a23 * a32;
  
    // Calculate the determinant
    let det: number = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  
    if (!det)
    {
        return null;
    }

    det = 1.0 / det;
  
    dest.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    dest.m01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    dest.m02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    dest.m03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    dest.m10 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    dest.m11 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    dest.m12 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    dest.m13 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    dest.m20 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    dest.m21 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    dest.m22 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    dest.m23 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    dest.m30 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    dest.m31 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    dest.m32 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    dest.m33 = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return dest;
}
