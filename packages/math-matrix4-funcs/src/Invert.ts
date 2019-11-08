import { GetDeterminant, IMatrix4, Matrix4 } from '@phaserjs/math-matrix4';

export function Invert (src: IMatrix4): Matrix4 | null
{
    const { m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 } = src;

    const { d00, d01, d02, d03, d04, d05, d06, d07, d08, d09, d10, d11, determinant } = GetDeterminant(src);

    if (determinant === null)
    {
        return null;
    }

    const a00: number = (m11 * d11 - m12 * d10 + m13 * d09) * determinant;
    const a01: number = (m02 * d10 - m01 * d11 - m03 * d09) * determinant;
    const a02: number = (m31 * d05 - m32 * d04 + m33 * d03) * determinant;
    const a03: number = (m22 * d04 - m21 * d05 - m23 * d03) * determinant;
    const a10: number = (m12 * d08 - m10 * d11 - m13 * d07) * determinant;
    const a11: number = (m00 * d11 - m02 * d08 + m03 * d07) * determinant;
    const a12: number = (m32 * d02 - m30 * d05 - m33 * d01) * determinant;
    const a13: number = (m20 * d05 - m22 * d02 + m23 * d01) * determinant;
    const a20: number = (m10 * d10 - m11 * d08 + m13 * d06) * determinant;
    const a21: number = (m01 * d08 - m00 * d10 - m03 * d06) * determinant;
    const a22: number = (m30 * d04 - m31 * d02 + m33 * d00) * determinant;
    const a23: number = (m21 * d02 - m20 * d04 - m23 * d00) * determinant;
    const a30: number = (m11 * d07 - m10 * d09 - m12 * d06) * determinant;
    const a31: number = (m00 * d09 - m01 * d07 + m02 * d06) * determinant;
    const a32: number = (m31 * d01 - m30 * d03 - m32 * d00) * determinant;
    const a33: number = (m20 * d03 - m21 * d01 + m22 * d00) * determinant;

    return new Matrix4(a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33);
}
