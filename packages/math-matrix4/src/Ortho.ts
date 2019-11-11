import { Matrix4 } from './Matrix4';

//  Converts the target Matrix4 to be an orthographic projection matrix based on the given bounds, then returns the target Matrix4

export function Ortho (target: Matrix4, left: number, right: number, bottom: number, top: number, near: number, far: number): Matrix4
{
    const leftRight: number = 1 / (left - right);
    const bottomTop: number = 1 / (bottom - top);
    const nearFar: number = 1 / (near - far);
  
    const m00: number = -2 * leftRight;
    const m11: number = -2 * bottomTop;
    const m22: number = 2 * nearFar;
    const m30: number = (left + right) * leftRight;
    const m31: number = (top + bottom) * bottomTop;
    const m32: number = (far + near) * nearFar;

    return target.set(m00, 0, 0, 0, 0, m11, 0, 0, 0, 0, m22, 0, m30, m31, m32, 1);
}
