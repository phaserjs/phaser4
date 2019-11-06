import { IMatrix4 } from './IMatrix4';

export function Determinant (src: IMatrix4): number
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
  
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
