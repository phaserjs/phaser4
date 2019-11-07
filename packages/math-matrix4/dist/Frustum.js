import { Matrix4 } from './Matrix4';
export function Frustum(left, right, bottom, top, near, far) {
    const rl = 1 / (right - left);
    const tb = 1 / (top - bottom);
    const nf = 1 / (near - far);
    const m00 = (near * 2) * rl;
    const m11 = (near * 2) * tb;
    const m20 = (right + left) * rl;
    const m21 = (top + bottom) * tb;
    const m22 = (far + near) * nf;
    const m32 = (far * near * 2) * nf;
    return new Matrix4(m00, 0, 0, 0, 0, m11, 0, 0, m20, m21, m22, -1, 0, 0, m32, 0);
}
//# sourceMappingURL=Frustum.js.map