import { Matrix2D } from './Matrix2D';

export function Copy (src: Matrix2D, dest: Matrix2D): Matrix2D
{
    return dest.fromValues(src.a, src.b, src.c, src.d, src.tx, src.ty);
}
