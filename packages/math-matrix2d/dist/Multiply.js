import { Matrix2D } from './Matrix2D';
export function Multiply(a, b, out = new Matrix2D()) {
    const a0 = a.a;
    const b0 = a.b;
    const c0 = a.c;
    const d0 = a.d;
    const tx0 = a.tx;
    const ty0 = a.ty;
    const a1 = b.a;
    const b1 = b.b;
    const c1 = b.c;
    const d1 = b.d;
    const tx1 = b.tx;
    const ty1 = b.ty;
    out.a = a0 * a1 + c0 * b1;
    out.b = b0 * a1 + d0 * b1;
    out.c = a0 * c1 + c0 * d1;
    out.d = b0 * c1 + d0 * d1;
    out.tx = a0 * tx1 + c0 * ty1 + tx0;
    out.ty = b0 * tx1 + d0 * ty1 + ty0;
    return out;
}
//# sourceMappingURL=Multiply.js.map