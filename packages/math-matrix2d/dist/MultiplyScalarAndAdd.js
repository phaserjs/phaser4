import { Matrix2D } from './Matrix2D';
export function MultiplyScalarAndAdd(a, b, scale, out = new Matrix2D()) {
    out.a = a.a + (b.a * scale);
    out.b = a.b + (b.b * scale);
    out.c = a.c + (b.c * scale);
    out.d = a.d + (b.d * scale);
    out.tx = a.tx + (b.tx * scale);
    out.ty = a.ty + (b.ty * scale);
    return out;
}
//# sourceMappingURL=MultiplyScalarAndAdd.js.map