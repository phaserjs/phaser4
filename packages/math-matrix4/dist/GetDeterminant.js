export function GetDeterminant(src) {
    const { m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 } = src;
    const d00 = m00 * m11 - m01 * m10;
    const d01 = m00 * m12 - m02 * m10;
    const d02 = m00 * m13 - m03 * m10;
    const d03 = m01 * m12 - m02 * m11;
    const d04 = m01 * m13 - m03 * m11;
    const d05 = m02 * m13 - m03 * m12;
    const d06 = m20 * m31 - m21 * m30;
    const d07 = m20 * m32 - m22 * m30;
    const d08 = m20 * m33 - m23 * m30;
    const d09 = m21 * m32 - m22 * m31;
    const d10 = m21 * m33 - m23 * m31;
    const d11 = m22 * m33 - m23 * m32;
    //  Calculate the determinant
    let determinant = d00 * d11 - d01 * d10 + d02 * d09 + d03 * d08 - d04 * d07 + d05 * d06;
    if (!determinant) {
        determinant = null;
    }
    else {
        determinant = 1 / determinant;
    }
    return { d00, d01, d02, d03, d04, d05, d06, d07, d08, d09, d10, d11, determinant };
}
//# sourceMappingURL=GetDeterminant.js.map