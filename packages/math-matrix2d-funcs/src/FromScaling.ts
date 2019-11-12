import { Matrix2D, Scale } from '@phaserjs/math-matrix2d';

export function FromScaling (scaleX: number, scaleY: number = scaleX): Matrix2D
{
    return Scale(new Matrix2D(), scaleX, scaleY);
}
