import { IMatrix2D } from '@phaserjs/math-matrix2d';
import { Matrix4 } from './Matrix4';

//  Loads the Matrix2D into the target Matrix4 and returns it

export function LoadMatrix2D (target: Matrix4, src: IMatrix2D): Matrix4
{
    const { a, b, c, d, tx, ty } = src;

    return target.set(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1);
}
