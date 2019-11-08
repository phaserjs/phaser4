import { IMatrix4, Matrix4 } from './index';

//  Subtracts the src Matrix4 from the target Matrix4 and returns the target

export function Subtract (target: Matrix4, src: IMatrix4): Matrix4
{
    const { m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 } = src;

    target.m00 -= m00;
    target.m01 -= m01;
    target.m02 -= m02;
    target.m03 -= m03;
    target.m10 -= m10;
    target.m11 -= m11;
    target.m12 -= m12;
    target.m13 -= m13;
    target.m20 -= m20;
    target.m21 -= m21;
    target.m22 -= m22;
    target.m23 -= m23;
    target.m30 -= m30;
    target.m31 -= m31;
    target.m32 -= m32;
    target.m33 -= m33;
    
    return target;
}
