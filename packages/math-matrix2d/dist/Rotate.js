//  Rotates the target Matrix by the angle (in radians), then returns the target Matrix.
export function Rotate(target, angle) {
    const { a, b, c, d } = target;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    target.a = (a * cos) + (c * sin);
    target.b = (b * cos) + (d * sin);
    target.c = (a * -sin) + (c * cos);
    target.d = (b * -sin) + (d * cos);
    return target;
}
//# sourceMappingURL=Rotate.js.map