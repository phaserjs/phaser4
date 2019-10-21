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
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;
    }

    fromValues (a: number = 1, b: number = 0, c: number = 0, d: number = 1, tx: number = 0, ty: number = 0): Matrix2D
    {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.tx = tx;
        this.ty = ty;

        return this;
    }
}
