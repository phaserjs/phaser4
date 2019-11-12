export function Translate(target, x, y) {
    const { a, b, c, d, tx, ty } = target;
    target.tx = a * x + c * y + tx;
    target.ty = b * x + d * y + ty;
    return target;
}
//# sourceMappingURL=Translate.js.map