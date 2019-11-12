import { Matrix2D, Scale } from '@phaserjs/math-matrix2d';
export function FromScaling(scaleX, scaleY = scaleX) {
    return Scale(new Matrix2D(), scaleX, scaleY);
}
//# sourceMappingURL=FromScaling.js.map