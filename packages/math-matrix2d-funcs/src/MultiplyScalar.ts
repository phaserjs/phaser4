import { IMatrix2D, Matrix2D } from '@phaserjs/math-matrix2d';

export function MultiplyScalar (src: IMatrix2D, scale: number): Matrix2D
{
    return new Matrix2D(
        src.a * scale,
        src.b * scale,
        src.c * scale,
        src.d * scale,
        src.tx * scale,
        src.ty * scale
    );
}
