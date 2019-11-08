import { IMatrix4 } from './IMatrix4';
import { Matrix4 } from './Matrix4';

export function RotateX (src: IMatrix4, angle: number): Matrix4
{
    const s: number = Math.sin(angle);
    const c: number = Math.cos(angle);

    const { m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 } = src;

    const a10: number = m10 * c + m20 * s;
    const a11: number = m11 * c + m21 * s;
    const a12: number = m12 * c + m22 * s;
    const a13: number = m13 * c + m23 * s;
    const a20: number = m20 * c - m10 * s;
    const a21: number = m21 * c - m11 * s;
    const a22: number = m22 * c - m12 * s;
    const a23: number = m23 * c - m13 * s;

    return new Matrix4(m00, m01, m02, m03, a10, a11, a12, a13, a20, a21, a22, a23, m30, m31, m32, m33);
}
