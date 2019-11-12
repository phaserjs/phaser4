import { IMatrix2D } from './IMatrix2D';
import { Matrix2D } from './Matrix2D';

export function Translate (target: Matrix2D, x: number, y: number): Matrix2D
{
    const { a, b, c, d, tx, ty } = target;

    target.tx = a * x + c * y + tx;
    target.ty = b * x + d * y + ty;

    return target;
}
