export declare class Matrix2D {
    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;
    constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
    set(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number): Matrix2D;
    zero(): Matrix2D;
    identity(): Matrix2D;
    getArray(): number[];
    fromArray(src: number[]): Matrix2D;
    [Symbol.iterator](): IterableIterator<number>;
}
//# sourceMappingURL=Matrix2D.d.ts.map