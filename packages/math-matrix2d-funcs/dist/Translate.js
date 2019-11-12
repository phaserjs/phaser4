import { Matrix2D } from '@phaserjs/math-matrix2d';
export function Translate(src, x, y) {
    const tx = src.a * x + src.c * y + src.tx;
    const ty = src.b * x + src.d * y + src.ty;
    return new Matrix2D(1, 0, 0, 1, tx, ty);
}
//# sourceMappingURL=Translate.js.map