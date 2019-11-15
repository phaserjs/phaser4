//  A Matrix2D contains six elements in a short-form of the 3x3 Matrix, with the last column ignored.
//  |----|----|----|
//  | a  | b  | 0  |
//  |----|----|----|
//  | c  | d  | 0  |
//  |----|----|----|
//  | tx | ty | 1  |
//  |----|----|----|
export class Matrix2D {
    /**
     * Creates an instance of Matrix2D.
     *
     * @param {number} [a=1] - X scale.
     * @param {number} [b=0] - X skew.
     * @param {number} [c=0] - Y skew.
     * @param {number} [d=1] - Y scale.
     * @param {number} [tx=0] - X translation
     * @param {number} [ty=0] - Y translation
     * @memberof Matrix2D
     */
    constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
        this.set(a, b, c, d, tx, ty);
    }
    set(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
        return this;
    }
    identity() {
        return this.set();
    }
    toArray() {
        return [this.a, this.b, this.c, this.d, this.tx, this.ty];
    }
    fromArray(src) {
        return this.set(src[0], src[1], src[2], src[3], src[4], src[5]);
    }
    [Symbol.iterator]() {
        const data = this.toArray();
        return data[Symbol.iterator]();
    }
}
//# sourceMappingURL=Matrix2D.js.map