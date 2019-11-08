import { Matrix4 } from '@phaserjs/math-matrix4';

// Generates a look-at matrix with the given eye position, focal point, and up axis.
// If you want a matrix that actually makes an object look at another object, you should use targetTo instead.

/*
export function LookAt (eye: IVector3, center: IVector3, up: IVector3): Matrix4
{
    const { m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 } = a;
    const { m00: b00, m01: b01, m02: b02, m03: b03, m10: b10, m11: b11, m12: b12, m13: b13, m20: b20, m21: b21, m22: b22, m23: b23, m30: b30, m31: b31, m32: b32, m33: b33 } = b;

    return new Matrix4(
        m00 + b00,
        m01 + b01,
        m02 + b02,
        m03 + b03,
        m10 + b10,
        m11 + b11,
        m12 + b12,
        m13 + b13,
        m20 + b20,
        m21 + b21,
        m22 + b22,
        m23 + b23,
        m30 + b30,
        m31 + b31,
        m32 + b32,
        m33 + b33
    );
}
*/
