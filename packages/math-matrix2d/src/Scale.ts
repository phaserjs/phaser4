import { IMatrix2D } from './IMatrix2D';
import { Matrix2D } from './Matrix2D';

export function Scale (src: IMatrix2D, scaleX: number, scaleY: number, out: Matrix2D = new Matrix2D()): Matrix2D
{
    out.a = src.a * scaleX;
    out.b = src.b * scaleX;
    out.c = src.c * scaleY;
    out.d = src.d * scaleY;

    return out;
}
