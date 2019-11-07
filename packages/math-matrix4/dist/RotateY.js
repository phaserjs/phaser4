import { Matrix4 } from './Matrix4';
export function RotateY(src, angle) {
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    const { m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 } = src;
    const a00 = m00 * c - m20 * s;
    const a01 = m01 * c - m21 * s;
    const a02 = m02 * c - m22 * s;
    const a03 = m03 * c - m23 * s;
    const a20 = m00 * s + m20 * c;
    const a21 = m01 * s + m21 * c;
    const a22 = m02 * s + m22 * c;
    const a23 = m03 * s + m23 * c;
    return new Matrix4(a00, a01, a02, a03, m10, m11, m12, m13, a20, a21, a22, a23, m30, m31, m32, m33);
}
//# sourceMappingURL=RotateY.js.map