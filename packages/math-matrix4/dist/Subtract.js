import { Matrix4 } from './Matrix4';
export function Subtract(a, b) {
    const [a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33] = a.data;
    const [b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33] = b.data;
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