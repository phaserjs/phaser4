import { Matrix2D } from './Matrix2D';

export function Identity (src: Matrix2D = new Matrix2D()): Matrix2D
{
    return src.fromValues();
}
