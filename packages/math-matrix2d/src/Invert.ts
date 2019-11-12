import { IMatrix2D } from './IMatrix2D';
import { Matrix2D } from './Matrix2D';

//  Inverts the target Matrix and then returns it

export function Invert (target: Matrix2D): Matrix2D
{
    const { a, b, c, d, tx, ty } = target;

    let determinant: number = a * d - b * c;

    if (determinant)
    {
        determinant = 1 / determinant;
  
        target.a = d * determinant;
        target.b = -b * determinant;
        target.c = -c * determinant;
        target.d = a * determinant;
        target.tx = (c * ty - d * tx) * determinant;
        target.ty = (b * tx - a * ty) * determinant;
    }

    return target;
}
