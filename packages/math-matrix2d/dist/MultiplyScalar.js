import { Matrix2D } from './Matrix2D';
export function MultiplyScalar(src, scale, out = new Matrix2D()) {
    out.a = src.a * scale;
    out.b = src.b * scale;
    out.c = src.c * scale;
    out.d = src.d * scale;
    out.tx = src.tx * scale;
    out.ty = src.ty * scale;
    return out;
}
//# sourceMappingURL=MultiplyScalar.js.map