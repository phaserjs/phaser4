//  Multiplies the target Matrix by the given amount, then returns the target Matrix
export function MultiplyScalar(target, scale) {
    target.a *= scale;
    target.b *= scale;
    target.c *= scale;
    target.d *= scale;
    target.tx *= scale;
    target.ty *= scale;
    return target;
}
//# sourceMappingURL=MultiplyScalar.js.map