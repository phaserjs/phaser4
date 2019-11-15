import { IMatrix2D, Matrix2D } from '@phaserjs/math-matrix2d';

//  Copy the values from the src Matrix to the target Matrix and return the target Matrix.

export function Copy (src: IMatrix2D, target: Matrix2D): Matrix2D
{
    return target.set(src.a, src.b, src.c, src.d, src.tx, src.ty);
}
