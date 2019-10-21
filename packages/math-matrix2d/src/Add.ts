import { IMatrix2D } from './IMatrix2D';
import { Matrix2D } from './Matrix2D';

export function Add (a: IMatrix2D, b: IMatrix2D, out: Matrix2D = new Matrix2D()): Matrix2D
{
    out.a = a.a + b.a;
    out.b = a.b + b.b;
    out.c = a.c + b.c;
    out.d = a.d + b.d;
    out.tx = a.tx + b.tx;
    out.ty = a.ty + b.ty;

    return out;
}
