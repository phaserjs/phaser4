import { Matrix4 } from './Matrix4';

//  Transposes the target Matrix4 and then returns it

export function Transpose (target: Matrix4): Matrix4
{
    const { m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 } = target;

    return target.set(m00, m10, m20, m30, m01, m11, m21, m31, m02, m12, m22, m32, m03, m13, m23, m33);
}
