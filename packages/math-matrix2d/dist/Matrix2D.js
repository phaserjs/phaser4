//  A Matrix2D contains six elements in a short-form of the 3x3 Matrix, with the last column ignored.
export class Matrix2D {
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
    zero() {
        return this.set(0, 0, 0, 0);
    }
    identity() {
        return this.set();
    }
    getArray() {
        return [this.a, this.b, this.c, this.d, this.tx, this.ty];
    }
    fromArray(src) {
        return this.set(src[0], src[1], src[2], src[3], src[4], src[5]);
    }
    getX(x, y) {
        return x * this.a + y * this.c + this.tx;
    }
    getY(x, y) {
        return x * this.b + y * this.d + this.ty;
    }
    [Symbol.iterator]() {
        const data = this.getArray();
        return data[Symbol.iterator]();
    }
}
//# sourceMappingURL=Matrix2D.js.map