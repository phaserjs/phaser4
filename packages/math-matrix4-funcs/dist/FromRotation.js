import { Matrix4 } from '@phaserjs/math-matrix4';
export function FromRotation(angle, axis, epsilon = 0.000001) {
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
    const a00 = x * x * t + c;
    const a01 = y * x * t + z * s;
    const a02 = z * x * t - y * s;
    const a10 = x * y * t - z * s;
    const a11 = y * y * t + c;
    const a12 = z * y * t + x * s;
    const a20 = x * z * t + y * s;
    const a21 = y * z * t - x * s;
    const a22 = z * z * t + c;
    return new Matrix4(a00, a01, a02, 0, a10, a11, a12, 0, a20, a21, a22, 0, 0, 0, 0, 1);
}
//# sourceMappingURL=FromRotation.js.map