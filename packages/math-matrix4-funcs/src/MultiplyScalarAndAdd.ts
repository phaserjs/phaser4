import { Matrix4 } from './Matrix4';

export function MultiplyScalarAndAdd (a: Matrix4, b: Matrix4, scale: number): Matrix4
{
    const [ a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, a30, a31, a32, a33 ] = a.data;
    const [ b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33 ] = b.data;
    
    const m00 = a00 + (b00 * scale);
    const m01 = a01 + (b01 * scale);
    const m02 = a02 + (b02 * scale);
    const m03 = a00 + (b03 * scale);

    const m10 = a10 + (b10 * scale);
    const m11 = a11 + (b11 * scale);
    const m12 = a12 + (b12 * scale);
    const m13 = a13 + (b13 * scale);

    const m20 = a20 + (b20 * scale);
    const m21 = a21 + (b21 * scale);
    const m22 = a22 + (b22 * scale);
    const m23 = a23 + (b23 * scale);

    const m30 = a30 + (b30 * scale);
    const m31 = a31 + (b31 * scale);
    const m32 = a32 + (b32 * scale);
    const m33 = a33 + (b33 * scale);

    return new Matrix4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
}
