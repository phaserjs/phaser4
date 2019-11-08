//  Multiplies the target Matrix4 by the given amount, then returns the target Matrix4
export function MultiplyScalar(target, amount) {
    target.m00 *= amount;
    target.m01 *= amount;
    target.m02 *= amount;
    target.m03 *= amount;
    target.m10 *= amount;
    target.m11 *= amount;
    target.m12 *= amount;
    target.m13 *= amount;
    target.m20 *= amount;
    target.m21 *= amount;
    target.m22 *= amount;
    target.m23 *= amount;
    target.m30 *= amount;
    target.m31 *= amount;
    target.m32 *= amount;
    target.m33 *= amount;
    return target;
}
//# sourceMappingURL=MultiplyScalar.js.map