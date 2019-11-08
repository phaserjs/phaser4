import { Matrix4 } from '@phaserjs/math-matrix4';
export function FromScaling(x, y = 0, z = 0) {
    return new Matrix4(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
}
//# sourceMappingURL=FromScaling.js.map