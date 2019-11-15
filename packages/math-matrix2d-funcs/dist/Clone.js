import { Matrix2D } from '@phaserjs/math-matrix2d';
//  Clones the src matrix to a new Matrix2D.
export function Clone(src) {
    return new Matrix2D(src.a, src.b, src.c, src.d, src.tx, src.ty);
}
//# sourceMappingURL=Clone.js.map