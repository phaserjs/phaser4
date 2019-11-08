import { Matrix4 } from '@phaserjs/math-matrix4';
export function RotateZ(src, angle) {
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    const { m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 } = src;
    const a00 = m00 * c + m10 * s;
    const a01 = m01 * c + m11 * s;
    const a02 = m02 * c + m12 * s;
    const a03 = m03 * c + m13 * s;
    const a10 = m10 * c - m00 * s;
    const a11 = m11 * c - m01 * s;
    const a12 = m12 * c - m02 * s;
    const a13 = m13 * c - m03 * s;
    return new Matrix4(a00, a01, a02, a03, a10, a11, a12, a13, m20, m21, m22, m23, m30, m31, m32, m33);
}
//# sourceMappingURL=RotateZ.js.map