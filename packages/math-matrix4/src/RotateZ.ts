import { IMatrix4 } from './IMatrix4';
import { Matrix4 } from './Matrix4';

export function RotateZ (src: IMatrix4, angle: number): Matrix4
{
    const s: number = Math.sin(angle);
    const c: number = Math.cos(angle);

    const { m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33 } = src;

    const a00: number = m00 * c + m10 * s;
    const a01: number = m01 * c + m11 * s;
    const a02: number = m02 * c + m12 * s;
    const a03: number = m03 * c + m13 * s;
    const a10: number = m10 * c - m00 * s;
    const a11: number = m11 * c - m01 * s;
    const a12: number = m12 * c - m02 * s;
    const a13: number = m13 * c - m03 * s;
  
    return new Matrix4(a00, a01, a02, a03, a10, a11, a12, a13, m20, m21, m22, m23, m30, m31, m32, m33);
}
