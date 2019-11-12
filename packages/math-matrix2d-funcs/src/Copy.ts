import { IMatrix2D, Matrix2D } from '@phaserjs/math-matrix2d';

export function Copy (src: IMatrix2D, dest: Matrix2D): Matrix2D
{
    return dest.set(src.a, src.b, src.c, src.d, src.tx, src.ty);
}
