import { IMatrix2D } from './IMatrix2D';
import { Matrix2D } from './Matrix2D';

export function MultiplyScalar (src: IMatrix2D, scale: number, out: Matrix2D = new Matrix2D()): Matrix2D
{
    out.a = src.a * scale;
    out.b = src.b * scale;
    out.c = src.c * scale;
    out.d = src.d * scale;
    out.tx = src.tx * scale;
    out.ty = src.ty * scale;

    return out;
}
