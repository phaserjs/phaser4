import { Matrix2D } from '@phaserjs/math-matrix2d';
export function Scale(src, scaleX, scaleY) {
    return new Matrix2D(src.a * scaleX, src.b * scaleX, src.c * scaleY, src.d * scaleY);
}
//# sourceMappingURL=Scale.js.map