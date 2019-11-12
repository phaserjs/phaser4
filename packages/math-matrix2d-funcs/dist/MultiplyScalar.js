import { Matrix2D } from '@phaserjs/math-matrix2d';
export function MultiplyScalar(src, scale) {
    return new Matrix2D(src.a * scale, src.b * scale, src.c * scale, src.d * scale, src.tx * scale, src.ty * scale);
}
//# sourceMappingURL=MultiplyScalar.js.map