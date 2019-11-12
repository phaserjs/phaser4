import { Matrix2D } from './Matrix2D';

export function Scale (target: Matrix2D, scaleX: number, scaleY: number): Matrix2D
{
    target.a *= scaleX;
    target.b *= scaleX;
    target.c *= scaleY;
    target.d *= scaleY;

    return target;
}
