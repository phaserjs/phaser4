import { IMatrix2D } from './IMatrix2D';
import { Matrix2D } from './Matrix2D';

export function Translate (src: IMatrix2D, x: number, y: number, out: Matrix2D = new Matrix2D()): Matrix2D
{
    const tx = src.tx;
    const ty = src.ty;

    out.tx = src.a * x + src.c * y + tx;
    out.ty = src.b * x + src.d * y + ty;

    return out;
}
