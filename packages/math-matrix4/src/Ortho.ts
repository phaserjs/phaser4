import { Matrix4 } from './index';

//  Converts the target Matrix4 to be an orthographic projection matrix based on the given bounds, then returns the target Matrix4

export function Ortho (target: Matrix4, left: number, right: number, bottom: number, top: number, near: number, far: number): Matrix4
{
    const lr: number = 1 / (left - right);
    const bt: number = 1 / (bottom - top);
    const nf: number = 1 / (near - far);
  
    const m00: number = -2 * lr;
    const m11: number = -2 * bt;
    const m22: number = 2 * nf;
    const m30: number = (left + right) * lr;
    const m31: number = (top + bottom) * bt;
    const m32: number = (far + near) * nf;

    return target.set(m00, 0, 0, 0, 0, m11, 0, 0, 0, 0, m22, 0, m30, m31, m32, 1);
}
