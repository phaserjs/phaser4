//  Converts the target Matrix4 to be an orthographic projection matrix based on the given bounds, then returns the target Matrix4
export function Ortho(target, left, right, bottom, top, near, far) {
    const leftRight = 1 / (left - right);
    const bottomTop = 1 / (bottom - top);
    const nearFar = 1 / (near - far);
    const m00 = -2 * leftRight;
    const m11 = -2 * bottomTop;
    const m22 = 2 * nearFar;
    const m30 = (left + right) * leftRight;
    const m31 = (top + bottom) * bottomTop;
    const m32 = (far + near) * nearFar;
    return target.set(m00, 0, 0, 0, 0, m11, 0, 0, 0, 0, m22, 0, m30, m31, m32, 1);
}
//# sourceMappingURL=Ortho.js.map