import { IMatrix2D, Matrix2D } from '@phaserjs/math-matrix2d';

export function Scale (src: IMatrix2D, scaleX: number, scaleY: number): Matrix2D
{
    return new Matrix2D(
        src.a * scaleX,
        src.b * scaleX,
        src.c * scaleY,
        src.d * scaleY
    );
}
