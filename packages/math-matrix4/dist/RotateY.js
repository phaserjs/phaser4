//  Rotates the target Matrix4 by the angle on its y axis, then returns the target Matrix4
export function RotateY(target, angle) {
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    const { m00, m01, m02, m03, m20, m21, m22, m23 } = target;
    target.m00 = m00 * c - m20 * s;
    target.m01 = m01 * c - m21 * s;
    target.m02 = m02 * c - m22 * s;
    target.m03 = m03 * c - m23 * s;
    target.m20 = m00 * s + m20 * c;
    target.m21 = m01 * s + m21 * c;
    target.m22 = m02 * s + m22 * c;
    target.m23 = m03 * s + m23 * c;
    return target;
}
//# sourceMappingURL=RotateY.js.map