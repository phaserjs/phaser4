//  Scales the target Matrix4 by the x, y and z values, then returns the target Matrix4
export function Scale(target, scaleX, scaleY, scaleZ) {
    target.m00 *= scaleX;
    target.m01 *= scaleX;
    target.m02 *= scaleX;
    target.m03 *= scaleX;
    target.m10 *= scaleY;
    target.m11 *= scaleY;
    target.m12 *= scaleY;
    target.m13 *= scaleY;
    target.m20 *= scaleZ;
    target.m21 *= scaleZ;
    target.m22 *= scaleZ;
    target.m23 *= scaleZ;
    return target;
}
//# sourceMappingURL=Scale.js.map