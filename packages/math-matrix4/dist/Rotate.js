import { Matrix4 } from './Matrix4';
export function Rotate(src, angle, axis, epsilon = 0.000001) {
    let { x, y, z } = axis;
    let len = Math.hypot(x, y, z);
    if (len < epsilon) {
        return null;
    }
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    const t = 1 - c;
    const { m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 } = src;
    // Construct the elements of the rotation matrix
    const b00 = x * x * t + c;
    const b01 = y * x * t + z * s;
    const b02 = z * x * t - y * s;
    const b10 = x * y * t - z * s;
    const b11 = y * y * t + c;
    const b12 = z * y * t + x * s;
    const b20 = x * z * t + y * s;
    const b21 = y * z * t - x * s;
    const b22 = z * z * t + c;
    //  Perform rotation-specific matrix multiplication
    const a00 = m00 * b00 + m10 * b01 + m20 * b02;
    const a01 = m01 * b00 + m11 * b01 + m21 * b02;
    const a02 = m02 * b00 + m12 * b01 + m22 * b02;
    const a03 = m03 * b00 + m13 * b01 + m23 * b02;
    const a10 = m00 * b10 + m10 * b11 + m20 * b12;
    const a11 = m01 * b10 + m11 * b11 + m21 * b12;
    const a12 = m02 * b10 + m12 * b11 + m22 * b12;
    const a13 = m03 * b10 + m13 * b11 + m23 * b12;
    const a20 = m00 * b20 + m10 * b21 + m20 * b22;
    const a21 = m01 * b20 + m11 * b21 + m21 * b22;
    const a22 = m02 * b20 + m12 * b21 + m22 * b22;
    const a23 = m03 * b20 + m13 * b21 + m23 * b22;
    return new Matrix4(a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, m30, m31, m32, m33);
}
//# sourceMappingURL=Rotate.js.map