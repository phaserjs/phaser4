import { IMatrix2D, Matrix2D } from '@phaserjs/math-matrix2d';

export function MultiplyScalarAndAdd (a: IMatrix2D, b: IMatrix2D, scale: number): Matrix2D
{
    return new Matrix2D(
        a.a + (b.a * scale),
        a.b + (b.b * scale),
        a.c + (b.c * scale),
        a.d + (b.d * scale),
        a.tx + (b.tx * scale),
        a.ty + (b.ty * scale),
    );
}
