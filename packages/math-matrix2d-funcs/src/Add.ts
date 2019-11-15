import { IMatrix2D, Matrix2D } from '@phaserjs/math-matrix2d';

//  Adds a to b and returns the values in a new Matrix2D

export function Add (a: IMatrix2D, b: IMatrix2D): Matrix2D
{
    return new Matrix2D(
        a.a + b.a,
        a.b + b.b,
        a.c + b.c,
        a.c + b.c,
        a.tx + b.tx,
        a.ty + b.ty
    );
}
