import { IMatrix2D } from '@phaserjs/math-matrix2d';

export function Determinant (src: IMatrix2D): number
{
    return (src.a * src.d - src.b * src.c);
}
