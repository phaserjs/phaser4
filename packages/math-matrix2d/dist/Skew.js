//  Skews the target Matrix by the given angles (in radians), then returns the target Matrix
export function Skew(target, angleX, angleY) {
    target.b += Math.tan(angleX);
    target.c += Math.tan(angleY);
    return target;
}
//# sourceMappingURL=Skew.js.map