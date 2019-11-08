import { Matrix4 } from '@phaserjs/math-matrix4';
export function RotateX(src, angle) {
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    const { m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 } = src;
    const a10 = m10 * c + m20 * s;
    const a11 = m11 * c + m21 * s;
    const a12 = m12 * c + m22 * s;
    const a13 = m13 * c + m23 * s;
    const a20 = m20 * c - m10 * s;
    const a21 = m21 * c - m11 * s;
    const a22 = m22 * c - m12 * s;
    const a23 = m23 * c - m13 * s;
    return new Matrix4(m00, m01, m02, m03, a10, a11, a12, a13, a20, a21, a22, a23, m30, m31, m32, m33);
}
//# sourceMappingURL=RotateX.js.map