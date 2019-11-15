import { Matrix2D } from './Matrix2D';

//  Skews the target Matrix by the given angles (in radians), then returns the target Matrix

export function Skew (target: Matrix2D, angleX: number, angleY: number): Matrix2D
{
    target.b += Math.tan(angleX);
    target.c += Math.tan(angleY);

    return target;
}
