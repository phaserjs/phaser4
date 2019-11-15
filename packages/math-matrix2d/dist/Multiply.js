//  Multiplies the target Matrix by the src Matrix and returns the target.
export function Multiply(target, src) {
    const { a: a0, b: b0, c: c0, d: d0, tx: tx0, ty: ty0 } = target;
    const { a: a1, b: b1, c: c1, d: d1, tx: tx1, ty: ty1 } = src;
    target.a = a0 * a1 + c0 * b1;
    target.b = b0 * a1 + d0 * b1;
    target.c = a0 * c1 + c0 * d1;
    target.d = b0 * c1 + d0 * d1;
    target.tx = a0 * tx1 + c0 * ty1 + tx0;
    target.ty = b0 * tx1 + d0 * ty1 + ty0;
    return target;
}
//# sourceMappingURL=Multiply.js.map