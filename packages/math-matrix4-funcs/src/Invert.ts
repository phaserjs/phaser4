import { IMatrix4 } from './IMatrix4';
import { Matrix4 } from './Matrix4';

export function Invert (src: IMatrix4): Matrix4
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
  
    // Calculate the determinant
    let det: number = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  
    if (!det)
    {
        return null;
    }

    det = 1 / det;
  
    const a00: number = (m11 * b11 - m12 * b10 + m13 * b09) * det;
    const a01: number = (m02 * b10 - m01 * b11 - m03 * b09) * det;
    const a02: number = (m31 * b05 - m32 * b04 + m33 * b03) * det;
    const a03: number = (m22 * b04 - m21 * b05 - m23 * b03) * det;
    const a10: number = (m12 * b08 - m10 * b11 - m13 * b07) * det;
    const a11: number = (m00 * b11 - m02 * b08 + m03 * b07) * det;
    const a12: number = (m32 * b02 - m30 * b05 - m33 * b01) * det;
    const a13: number = (m20 * b05 - m22 * b02 + m23 * b01) * det;
    const a20: number = (m10 * b10 - m11 * b08 + m13 * b06) * det;
    const a21: number = (m01 * b08 - m00 * b10 - m03 * b06) * det;
    const a22: number = (m30 * b04 - m31 * b02 + m33 * b00) * det;
    const a23: number = (m21 * b02 - m20 * b04 - m23 * b00) * det;
    const a30: number = (m11 * b07 - m10 * b09 - m12 * b06) * det;
    const a31: number = (m00 * b09 - m01 * b07 + m02 * b06) * det;
    const a32: number = (m31 * b01 - m30 * b03 - m32 * b00) * det;
    const a33: number = (m20 * b03 - m21 * b01 + m22 * b00) * det;

    return new Matrix4(a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33);
}
