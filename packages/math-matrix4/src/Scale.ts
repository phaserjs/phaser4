import { IMatrix4 } from './IMatrix4';
import { Matrix4 } from './Matrix4';

export function Scale (src: IMatrix4, scaleX: number, scaleY: number, scaleZ: number, out: Matrix4 = new Matrix4()): Matrix4
{
    out.m00 = src.m00 * scaleX;
    out.m01 = src.m01 * scaleX;
    out.m02 = src.m02 * scaleX;
    out.m03 = src.m03 * scaleX;

    out.m10 = src.m10 * scaleY;
    out.m11 = src.m11 * scaleY;
    out.m12 = src.m12 * scaleY;
    out.m13 = src.m13 * scaleY;

    out.m20 = src.m20 * scaleZ;
    out.m21 = src.m21 * scaleZ;
    out.m22 = src.m22 * scaleZ;
    out.m23 = src.m23 * scaleZ;

    out.m30 = src.m30;
    out.m31 = src.m31;
    out.m32 = src.m32;
    out.m33 = src.m33;

    return out;
}
