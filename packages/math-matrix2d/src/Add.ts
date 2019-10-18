import { Matrix2D } from './Matrix2D';

export function Add (a: Matrix2D, b: Matrix2D): Matrix2D
{
    const out: Matrix2D = a.clone();

    return out.add(b);
}
