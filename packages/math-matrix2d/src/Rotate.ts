import { Matrix2D } from './Matrix2D';

//  Rotates the target Matrix by the angle, then returns the target Matrix

export function Rotate (target: Matrix2D, angle: number): Matrix2D
{
    const { a, b, c, d } = target;

    const sin = Math.sin(angle);
    const cos = Math.cos(angle);

    target.a = a * cos + c * sin;
    target.b = b * cos + d * sin;
    target.c = a * -sin + c * cos;
    target.d = b * -sin + d * cos;

    return target;
}
