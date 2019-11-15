import { IMatrix2D, Matrix2D } from '@phaserjs/math-matrix2d';

//  Clones the src matrix to a new Matrix2D.

export function Clone (src: IMatrix2D): Matrix2D
{
    return new Matrix2D(src.a, src.b, src.c, src.d, src.tx, src.ty);
}
