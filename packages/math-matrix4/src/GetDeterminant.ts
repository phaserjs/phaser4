import { IMatrix4 } from './IMatrix4';

export interface IDeterminantResult
{
    d00: number;
    d01: number;
    d02: number;
    d03: number;
    d04: number;
    d05: number;
    d06: number;
    d07: number;
    d08: number;
    d09: number;
    d10: number;
    d11: number;
    determinant: number | null;
}

export function GetDeterminant (src: IMatrix4): IDeterminantResult
{
    const { m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 } = src;

    const d00: number = m00 * m11 - m01 * m10;
    const d01: number = m00 * m12 - m02 * m10;
    const d02: number = m00 * m13 - m03 * m10;
    const d03: number = m01 * m12 - m02 * m11;
    const d04: number = m01 * m13 - m03 * m11;
    const d05: number = m02 * m13 - m03 * m12;
    const d06: number = m20 * m31 - m21 * m30;
    const d07: number = m20 * m32 - m22 * m30;
    const d08: number = m20 * m33 - m23 * m30;
    const d09: number = m21 * m32 - m22 * m31;
    const d10: number = m21 * m33 - m23 * m31;
    const d11: number = m22 * m33 - m23 * m32;

    //  Calculate the determinant
    let determinant: number = d00 * d11 - d01 * d10 + d02 * d09 + d03 * d08 - d04 * d07 + d05 * d06;

    if (!determinant)
    {
        determinant = null;
    }
    else
    {
        determinant = 1 / determinant;
    }

    return { d00, d01, d02, d03, d04, d05, d06, d07, d08, d09, d10, d11, determinant };
}
