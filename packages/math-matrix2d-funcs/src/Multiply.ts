import { IMatrix2D, Matrix2D } from '@phaserjs/math-matrix2d';

export function Multiply (a: IMatrix2D, b: IMatrix2D): Matrix2D
{
    const { a: a0, b: b0, c: c0, d: d0, tx: tx0, ty: ty0 } = a;
    const { a: a1, b: b1, c: c1, d: d1, tx: tx1, ty: ty1 } = b;
    
    return new Matrix2D(
        a0 * a1 + c0 * b1,
        b0 * a1 + d0 * b1,
        a0 * c1 + c0 * d1,
        b0 * c1 + d0 * d1,
        a0 * tx1 + c0 * ty1 + tx0,
        b0 * tx1 + d0 * ty1 + ty0
    );
}
