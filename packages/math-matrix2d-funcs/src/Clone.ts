import { Matrix2D } from './Matrix2D';

export function Clone (src: Matrix2D): Matrix2D
{
    return new Matrix2D(src.a, src.b, src.c, src.d, src.tx, src.ty);
}
