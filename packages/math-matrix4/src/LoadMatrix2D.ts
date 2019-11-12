import { IMatrix2D } from '@phaserjs/math-matrix2d';
import { Matrix4 } from './Matrix4';

//  Loads the Matrix2D into the target Matrix4 and returns it

export function LoadMatrix2D (target: Matrix4, src: IMatrix2D): Matrix4
{
    const { a, b, c, d, tx, ty } = src;

    target.identity();

    target.m00 = a;
    target.m01 = b;
    target.m10 = c;
    target.m11 = d;
    target.m20 = tx;
    target.m21 = ty;
    
    return target;
}
