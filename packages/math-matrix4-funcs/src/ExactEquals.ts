import { Matrix4 } from './Matrix4';

export function ExactEquals (a: Matrix4, b: Matrix4): boolean
{
    return (
        a.m00 === b.m00 &&
        a.m01 === b.m01 &&
        a.m02 === b.m02 &&
        a.m03 === b.m03 &&
        a.m10 === b.m10 &&
        a.m11 === b.m11 &&
        a.m12 === b.m12 &&
        a.m13 === b.m13 &&
        a.m20 === b.m20 &&
        a.m21 === b.m21 &&
        a.m22 === b.m22 &&
        a.m23 === b.m23 &&
        a.m30 === b.m30 &&
        a.m31 === b.m31 &&
        a.m32 === b.m32 &&
        a.m33 === b.m33
    );
}
