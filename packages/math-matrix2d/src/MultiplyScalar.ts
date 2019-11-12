import { Matrix2D } from './Matrix2D';

//  Multiplies the target Matrix by the given amount, then returns the target Matrix

export function MultiplyScalar (target: Matrix2D, scale: number): Matrix2D
{
    target.a *= scale;
    target.b *= scale;
    target.c *= scale;
    target.d *= scale;
    target.tx *= scale;
    target.ty *= scale;

    return target;
}
