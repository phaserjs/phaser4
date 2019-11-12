import { Matrix2D } from '@phaserjs/math-matrix2d';
export function Invert(src, out = new Matrix2D()) {
    const a = src.a;
    const b = src.b;
    const c = src.c;
    const d = src.d;
    const tx = src.tx;
    const ty = src.ty;
    let det = a * d - b * c;
    if (!det) {
        return null;
    }
    det = 1 / det;
    out.a = d * det;
    out.b = -b * det;
    out.c = -c * det;
    out.d = a * det;
    out.tx = (c * ty - d * tx) * det;
    out.ty = (b * tx - a * ty) * det;
    return out;
}
//# sourceMappingURL=Invert.js.map