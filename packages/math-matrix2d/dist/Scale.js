import { Matrix2D } from './Matrix2D';
export function Scale(src, scaleX, scaleY, out = new Matrix2D()) {
    out.a = src.a * scaleX;
    out.b = src.b * scaleX;
    out.c = src.c * scaleY;
    out.d = src.d * scaleY;
    return out;
}
//# sourceMappingURL=Scale.js.map