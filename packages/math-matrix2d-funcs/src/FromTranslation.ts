import { Matrix2D, Translate } from '@phaserjs/math-matrix2d';

export function FromTranslation (x: number, y: number): Matrix2D
{
    return Translate(new Matrix2D(), x, y);
}
