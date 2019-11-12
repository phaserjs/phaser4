import { IMatrix2D } from './IMatrix2D';

export function Determinant (src: IMatrix2D): number
{
    return (src.a * src.d - src.b * src.c);
}
