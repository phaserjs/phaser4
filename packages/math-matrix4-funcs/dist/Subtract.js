import { Matrix4 } from '@phaserjs/math-matrix4';
export function Subtract(a, b) {
    const { m00: a00, m01: a01, m02: a02, m03: a03, m10: a10, m11: a11, m12: a12, m13: a13, m20: a20, m21: a21, m22: a22, m23: a23, m30: a30, m31: a31, m32: a32, m33: a33 } = a;
    const { m00: b00, m01: b01, m02: b02, m03: b03, m10: b10, m11: b11, m12: b12, m13: b13, m20: b20, m21: b21, m22: b22, m23: b23, m30: b30, m31: b31, m32: b32, m33: b33 } = b;
    const m00 = a00 - b00;
    const m01 = a01 - b01;
    const m02 = a02 - b02;
    const m03 = a03 - b03;
    const m10 = a10 - b10;
    const m11 = a11 - b11;
    const m12 = a12 - b12;
    const m13 = a13 - b13;
    const m20 = a20 - b20;
    const m21 = a21 - b21;
    const m22 = a22 - b22;
    const m23 = a23 - b23;
    const m30 = a30 - b30;
    const m31 = a31 - b31;
    const m32 = a32 - b32;
    const m33 = a33 - b33;
    return new Matrix4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
}
//# sourceMappingURL=Subtract.js.map