import { IMatrix2D } from '@phaserjs/math-matrix2d';

//  Return the determinant for the src Matrix.

export function Determinant (src: IMatrix2D): number
{
    const { a, b, c, d } = src;

    return (a * d) - (b * c);
}
