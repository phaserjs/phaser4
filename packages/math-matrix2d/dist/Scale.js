//  Scales the target Matrix by the given amounts, then returns the target Matrix.
export function Scale(target, scaleX, scaleY) {
    target.a *= scaleX;
    target.b *= scaleX;
    target.c *= scaleY;
    target.d *= scaleY;
    return target;
}
//# sourceMappingURL=Scale.js.map