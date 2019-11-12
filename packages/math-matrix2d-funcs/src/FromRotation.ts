import { Matrix2D, Rotate } from '@phaserjs/math-matrix2d';

export function FromRotation (angle: number): Matrix2D
{
    return Rotate(new Matrix2D(), angle);
}
