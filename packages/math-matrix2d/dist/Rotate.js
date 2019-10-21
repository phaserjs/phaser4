import { Matrix2D } from './Matrix2D';
export function Rotate(src, angle, out = new Matrix2D()) {
    const a = src.a;
    const b = src.b;
    const c = src.c;
    const d = src.d;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    out.a = a * cos + c * sin;
    out.b = b * cos + d * sin;
    out.c = a * -sin + c * cos;
    out.d = b * -sin + d * cos;
    return out;
}
//# sourceMappingURL=Rotate.js.map