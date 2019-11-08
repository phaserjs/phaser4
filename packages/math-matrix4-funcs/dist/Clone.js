import { Matrix4 } from '@phaserjs/math-matrix4';
export function Clone(src) {
    return new Matrix4(src.m00, src.m01, src.m02, src.m03, src.m10, src.m11, src.m12, src.m13, src.m20, src.m21, src.m22, src.m23, src.m30, src.m31, src.m32, src.m33);
}
//# sourceMappingURL=Clone.js.map