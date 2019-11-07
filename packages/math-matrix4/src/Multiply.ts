import { Matrix4 } from './Matrix4';

export function Multiply (a: Matrix4, b: Matrix4): Matrix4
{
    const [ a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33 ] = a.data;
    const [ b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33 ] = b.data;
    
    const m00 = b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30;
    const m01 = b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31;
    const m02 = b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32;
    const m03 = b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33;

    const m10 = b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30;
    const m11 = b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31;
    const m12 = b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32;
    const m13 = b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33;

    const m20 = b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30;
    const m21 = b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31;
    const m22 = b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32;
    const m23 = b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33;

    const m30 = b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30;
    const m31 = b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31;
    const m32 = b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32;
    const m33 = b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33;

    return new Matrix4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
}
