import { Matrix4 } from './Matrix4';

//  Rotates the target Matrix4 by the angle on its z axis, then returns the target Matrix4

export function RotateZ (target: Matrix4, angle: number): Matrix4
{
    const s: number = Math.sin(angle);
    const c: number = Math.cos(angle);

    const { m00, m01, m02, m03, m10, m11, m12, m13 } = target;

    target.m00 = m00 * c + m10 * s;
    target.m01 = m01 * c + m11 * s;
    target.m02 = m02 * c + m12 * s;
    target.m03 = m03 * c + m13 * s;
    target.m10 = m10 * c - m00 * s;
    target.m11 = m11 * c - m01 * s;
    target.m12 = m12 * c - m02 * s;
    target.m13 = m13 * c - m03 * s;
  
    return target;
}
