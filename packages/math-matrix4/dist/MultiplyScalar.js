import { Matrix4 } from './Matrix4';
export function MultiplyScalar(src, amount) {
    const { m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 } = src;
    const a00 = m00 * amount;
    const a01 = m01 * amount;
    const a02 = m02 * amount;
    const a03 = m03 * amount;
    const a10 = m10 * amount;
    const a11 = m11 * amount;
    const a12 = m12 * amount;
    const a13 = m13 * amount;
    const a20 = m20 * amount;
    const a21 = m21 * amount;
    const a22 = m22 * amount;
    const a23 = m23 * amount;
    const a30 = m30 * amount;
    const a31 = m31 * amount;
    const a32 = m32 * amount;
    const a33 = m33 * amount;
    return new Matrix4(a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33);
}
//# sourceMappingURL=MultiplyScalar.js.map