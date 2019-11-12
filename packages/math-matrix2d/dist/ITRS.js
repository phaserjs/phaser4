//  Apply the identity, translate, rotate and scale operations on the target Matrix.
export function ITRS(target, x, y, angle, scaleX, scaleY) {
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    return target.set(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
}
//# sourceMappingURL=ITRS.js.map