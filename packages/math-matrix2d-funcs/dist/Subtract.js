import { Matrix2D } from '@phaserjs/math-matrix2d';
export function Subtract(a, b) {
    return new Matrix2D(a.a - b.a, a.b - b.b, a.c - b.c, a.c - b.c, a.tx - b.tx, a.ty - b.ty);
}
//# sourceMappingURL=Subtract.js.map