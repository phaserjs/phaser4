import { IMatrix2D } from './IMatrix2D';

export function Equals (a: IMatrix2D, b: IMatrix2D, epsilon: number = 0.000001): boolean
{
    const a0 = a.a;
    const a1 = a.b;
    const a2 = a.c;
    const a3 = a.d;
    const a4 = a.tx;
    const a5 = a.ty;

    const b0 = b.a;
    const b1 = b.b;
    const b2 = b.c;
    const b3 = b.d;
    const b4 = b.tx;
    const b5 = b.ty;

    return (Math.abs(a0 - b0) <= epsilon * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
            Math.abs(a1 - b1) <= epsilon * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
            Math.abs(a2 - b2) <= epsilon * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
            Math.abs(a3 - b3) <= epsilon * Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
            Math.abs(a4 - b4) <= epsilon * Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
            Math.abs(a5 - b5) <= epsilon * Math.max(1.0, Math.abs(a5), Math.abs(b5))
    );
}
