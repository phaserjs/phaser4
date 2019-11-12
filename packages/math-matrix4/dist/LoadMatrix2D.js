//  Loads the Matrix2D into the target Matrix4 and returns it
export function LoadMatrix2D(target, src) {
    const { a, b, c, d, tx, ty } = src;
    target.identity();
    target.m00 = a;
    target.m01 = b;
    target.m10 = c;
    target.m11 = d;
    target.m20 = tx;
    target.m21 = ty;
    return target;
}
//# sourceMappingURL=LoadMatrix2D.js.map