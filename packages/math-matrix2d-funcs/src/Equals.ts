import { IMatrix2D } from '@phaserjs/math-matrix2d';

export function Equals (a: IMatrix2D, b: IMatrix2D, epsilon: number = 0.000001): boolean
{
    const { a: a0, b: b0, c: c0, d: d0, tx: tx0, ty: ty0 } = a;
    const { a: a1, b: b1, c: c1, d: d1, tx: tx1, ty: ty1 } = b;

    return (
        Math.abs(a0 - a1) <= epsilon * Math.max(1, Math.abs(a0), Math.abs(a1)) &&
        Math.abs(b0 - b1) <= epsilon * Math.max(1, Math.abs(b0), Math.abs(b1)) &&
        Math.abs(c0 - c1) <= epsilon * Math.max(1, Math.abs(c0), Math.abs(c1)) &&
        Math.abs(d0 - d1) <= epsilon * Math.max(1, Math.abs(d0), Math.abs(d1)) &&
        Math.abs(tx0 - tx1) <= epsilon * Math.max(1, Math.abs(tx0), Math.abs(tx1)) &&
        Math.abs(ty0 - ty1) <= epsilon * Math.max(1, Math.abs(ty0), Math.abs(ty1))
    );
}
