//  Loads the Matrix2D into the target Matrix4 and returns it
export function LoadMatrix2D(target, src) {
    const { a, b, c, d, tx, ty } = src;
    return target.set(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1);
}
//# sourceMappingURL=LoadMatrix2D.js.map