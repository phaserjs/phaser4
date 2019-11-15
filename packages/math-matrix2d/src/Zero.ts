import { Matrix2D } from './Matrix2D';

//  Zeroes the target Matrix and returns the target

export function Zero (target: Matrix2D): Matrix2D
{
    return target.set(0, 0, 0, 0);
}
