export function GetScaling(src) {
    const { m11, m12, m13, m20, m21, m22, m23, m31, m32, m33 } = src;
    return {
        x: Math.hypot(m11, m12, m13),
        y: Math.hypot(m21, m22, m23),
        z: Math.hypot(m31, m32, m33)
    };
}
//# sourceMappingURL=GetScaling.js.map