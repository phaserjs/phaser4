import { IMatrix2D, Matrix2D } from '@phaserjs/math-matrix2d';

//  Inverts the src Matrix and returns the result in a new Matrix, or null.

export function Invert (src: IMatrix2D): Matrix2D | null
{
    const { a, b, c, d, tx, ty } = src;

    let determinant: number = (a * d) - (b * c);

    if (!determinant)
    {
        return null;
    }

    determinant = 1 / determinant;
  
    return new Matrix2D(
        d * determinant,
        -b * determinant,
        -c * determinant,
        a * determinant,
        (c * ty - d * tx) * determinant,
        (b * tx - a * ty) * determinant
    );
}
