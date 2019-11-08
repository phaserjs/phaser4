import { IMatrix4 } from '@phaserjs/math-matrix4';

export function Determinant (src: IMatrix4): number
{
    const { m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 } = src;

    const b00: number = m00 * m11 - m01 * m10;
    const b01: number = m00 * m12 - m02 * m10;
    const b02: number = m00 * m13 - m03 * m10;
    const b03: number = m01 * m12 - m02 * m11;
    const b04: number = m01 * m13 - m03 * m11;
    const b05: number = m02 * m13 - m03 * m12;
    const b06: number = m20 * m31 - m21 * m30;
    const b07: number = m20 * m32 - m22 * m30;
    const b08: number = m20 * m33 - m23 * m30;
    const b09: number = m21 * m32 - m22 * m31;
    const b10: number = m21 * m33 - m23 * m31;
    const b11: number = m22 * m33 - m23 * m32;
  
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
