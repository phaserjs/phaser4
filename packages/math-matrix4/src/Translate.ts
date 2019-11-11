import { Matrix4 } from './Matrix4';

//  Translates the target Matrix4 by the x, y and z values, then returns the target Matrix4

export function Translate (target: Matrix4, x: number = 0, y: number = 0, z: number = 0): Matrix4
{
    const { m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 } = target;

    target.m30 = m00 * x + m10 * y + m20 * z + m30;
    target.m31 = m01 * x + m11 * y + m21 * z + m31;
    target.m32 = m02 * x + m12 * y + m22 * z + m32;
    target.m33 = m03 * x + m13 * y + m23 * z + m33;

    return target;
}
