import { IMatrix2D } from '@phaserjs/math-matrix2d';

export function ExactEquals (a: IMatrix2D, b: IMatrix2D): boolean
{
    return (
        a.a === b.a &&
        a.b === b.b &&
        a.c === b.c &&
        a.d === b.d &&
        a.tx === b.tx &&
        a.ty === b.ty
    );
}
