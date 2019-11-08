import { GetDeterminant } from './index';
//  Inverts the target Matrix4 and then returns it
export function Invert(target) {
    const { m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 } = target;
    const { d00, d01, d02, d03, d04, d05, d06, d07, d08, d09, d10, d11, determinant } = GetDeterminant(target);
    if (determinant !== null) {
        target.m00 = (m11 * d11 - m12 * d10 + m13 * d09) * determinant;
        target.m01 = (m02 * d10 - m01 * d11 - m03 * d09) * determinant;
        target.m02 = (m31 * d05 - m32 * d04 + m33 * d03) * determinant;
        target.m03 = (m22 * d04 - m21 * d05 - m23 * d03) * determinant;
        target.m10 = (m12 * d08 - m10 * d11 - m13 * d07) * determinant;
        target.m11 = (m00 * d11 - m02 * d08 + m03 * d07) * determinant;
        target.m12 = (m32 * d02 - m30 * d05 - m33 * d01) * determinant;
        target.m13 = (m20 * d05 - m22 * d02 + m23 * d01) * determinant;
        target.m20 = (m10 * d10 - m11 * d08 + m13 * d06) * determinant;
        target.m21 = (m01 * d08 - m00 * d10 - m03 * d06) * determinant;
        target.m22 = (m30 * d04 - m31 * d02 + m33 * d00) * determinant;
        target.m23 = (m21 * d02 - m20 * d04 - m23 * d00) * determinant;
        target.m30 = (m11 * d07 - m10 * d09 - m12 * d06) * determinant;
        target.m31 = (m00 * d09 - m01 * d07 + m02 * d06) * determinant;
        target.m32 = (m31 * d01 - m30 * d03 - m32 * d00) * determinant;
        target.m33 = (m20 * d03 - m21 * d01 + m22 * d00) * determinant;
    }
    return target;
}
//# sourceMappingURL=Invert.js.map