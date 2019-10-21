import { Matrix2D } from './Matrix2D';
export function Add(a, b, out = new Matrix2D()) {
    out.a = a.a + b.a;
    out.b = a.b + b.b;
    out.c = a.c + b.c;
    out.d = a.d + b.d;
    out.tx = a.tx + b.tx;
    out.ty = a.ty + b.ty;
    return out;
}
//# sourceMappingURL=Add.js.map