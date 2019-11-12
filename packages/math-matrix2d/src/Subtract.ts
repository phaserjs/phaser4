import { IMatrix2D } from './IMatrix2D';
import { Matrix2D } from './Matrix2D';

export function Subtract (target: Matrix2D, src: IMatrix2D): Matrix2D
{
    target.a -= src.a;
    target.b -= src.b;
    target.c -= src.c;
    target.d -= src.d;
    target.tx -= src.tx;
    target.ty -= src.ty;

    return target;
}
