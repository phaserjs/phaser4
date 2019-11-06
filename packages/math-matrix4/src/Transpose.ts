import { IMatrix4 } from './IMatrix4';
import { Matrix4 } from './Matrix4';

export function Transpose (src: IMatrix4, dest: Matrix4 = new Matrix4()): Matrix4
{
    if (src === dest)
    {
        const m01 = src.m01;
        const m02 = src.m02;
        const m03 = src.m03;
        const m12 = src.m12;
        const m13 = src.m13;
        const m23 = src.m23;

        dest.m01 = src.m10;
        dest.m02 = src.m20;
        dest.m03 = src.m30;
    
        dest.m10 = m01;
        dest.m12 = src.m21;
        dest.m13 = src.m31;
    
        dest.m20 = m02;
        dest.m21 = m12;
        dest.m23 = src.m32;
    
        dest.m30 = m03;
        dest.m31 = m13;
        dest.m32 = m23;
    }
    else
    {
        dest.m00 = src.m00;
        dest.m01 = src.m10;
        dest.m02 = src.m20;
        dest.m03 = src.m30;
    
        dest.m10 = src.m01;
        dest.m11 = src.m11;
        dest.m12 = src.m21;
        dest.m13 = src.m31;
    
        dest.m20 = src.m02;
        dest.m21 = src.m12;
        dest.m22 = src.m22;
        dest.m23 = src.m32;
    
        dest.m30 = src.m03;
        dest.m31 = src.m13;
        dest.m32 = src.m23;
        dest.m33 = src.m33;
    }

    return dest;
}
