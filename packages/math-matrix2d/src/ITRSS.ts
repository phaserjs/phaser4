import { Matrix2D } from './Matrix2D';

//  Apply the identity, translate, rotate, scale and skew operations on the target Matrix then returns it.

export function ITRSS (target: Matrix2D, x: number, y: number, angle: number = 0, scaleX: number = 1, scaleY: number = 1, skewX: number = 0, skewY: number = 0): Matrix2D
{
    if (angle === 0)
    {
        return target.set(1, 0, 0, 1, x, y);
    }
    else
    {
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);

        return target.set(
            cos * scaleX,
            sin * scaleX,
            -sin * scaleY,
            cos * scaleY,
            x,
            y
        );
    }
}
