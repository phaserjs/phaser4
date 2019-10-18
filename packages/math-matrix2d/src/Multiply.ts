import { Matrix2D } from './Matrix2D';

export function Multiply (a: Matrix2D, b: Matrix2D): Matrix2D
{
    const out: Matrix2D = a.clone();

    return out.multiply(b);
}
