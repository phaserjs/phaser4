//  Rotates the target Matrix4 by the angle on its x axis, then returns the target Matrix4
export function RotateX(target, angle) {
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    const { m10, m11, m12, m13, m20, m21, m22, m23 } = target;
    target.m10 = m10 * c + m20 * s;
    target.m11 = m11 * c + m21 * s;
    target.m12 = m12 * c + m22 * s;
    target.m13 = m13 * c + m23 * s;
    target.m20 = m20 * c - m10 * s;
    target.m21 = m21 * c - m11 * s;
    target.m22 = m22 * c - m12 * s;
    target.m23 = m23 * c - m13 * s;
    return target;
}
//# sourceMappingURL=RotateX.js.map