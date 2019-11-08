import { IMatrix4, Matrix4 } from '@phaserjs/math-matrix4';

export function Scale (src: IMatrix4, scaleX: number, scaleY: number, scaleZ: number): Matrix4
{
    const { m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 } = src;

    return new Matrix4(
        m00 * scaleX,
        m01 * scaleX,
        m02 * scaleX,
        m03 * scaleX,
        m10 * scaleY,
        m11 * scaleY,
        m12 * scaleY,
        m13 * scaleY,
        m20 * scaleZ,
        m21 * scaleZ,
        m22 * scaleZ,
        m23 * scaleZ,
        m30,
        m31,
        m32,
        m33
    );
}
