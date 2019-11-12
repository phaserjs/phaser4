import { Matrix2D } from './Matrix2D';

export function FromTranslation (x: number, y: number): Matrix2D
{
    return new Matrix2D(1, 0, 0, 1, x, y);
}
