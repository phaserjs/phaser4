import { Matrix4 } from './Matrix4';

//  Converts the target Matrix4 to be a frustum matrix based on the given bounds, then returns the target Matrix4

export function Frustum (target: Matrix4, left: number, right: number, bottom: number, top: number, near: number, far: number): Matrix4
{
    const rl = 1 / (right - left);
    const tb = 1 / (top - bottom);
    const nf = 1 / (near - far);

    const m00 = (near * 2) * rl;
    const m11 = (near * 2) * tb;
    const m20 = (right + left) * rl;
    const m21 = (top + bottom) * tb;
    const m22 = (far + near) * nf;
    const m32 = (far * near * 2) * nf;

    return target.set(m00, 0, 0, 0, 0, m11, 0, 0, m20, m21, m22, -1, 0, 0, m32, 0);
}
