import { Matrix2D } from './Matrix2D';
export function Translate(src, x, y, out = new Matrix2D()) {
    const tx = src.tx;
    const ty = src.ty;
    out.tx = src.a * x + src.c * y + tx;
    out.ty = src.b * x + src.d * y + ty;
    return out;
}
//# sourceMappingURL=Translate.js.map