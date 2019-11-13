//  A Matrix2D contains six elements in a short-form of the 3x3 Matrix, with the last column ignored.

export class Matrix2D
{
    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;

    constructor (a: number = 1, b: number = 0, c: number = 0, d: number = 1, tx: number = 0, ty: number = 0)
    {
        this.set(a, b, c, d, tx, ty);
    }

    set (a: number = 1, b: number = 0, c: number = 0, d: number = 1, tx: number = 0, ty: number = 0): Matrix2D
    {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;

        return this;
    }

    zero (): Matrix2D
    {
        return this.set(0, 0, 0, 0);
    }

    identity (): Matrix2D
    {
        return this.set();
    }

    getArray (): number[]
    {
        return [ this.a, this.b, this.c, this.d, this.tx, this.ty ];
    }

    fromArray (src: number[]): Matrix2D
    {
        return this.set(src[0], src[1], src[2], src[3], src[4], src[5]);
    }

    getX (x: number, y: number): number
    {
        return x * this.a + y * this.c + this.tx;
    }

    getY (x: number, y: number): number
    {
        return x * this.b + y * this.d + this.ty;
    }

    [Symbol.iterator] ()
    {
        const data = this.getArray();

        return data[Symbol.iterator]();
    }
}
