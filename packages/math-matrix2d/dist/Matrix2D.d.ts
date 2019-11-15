export declare class Matrix2D {
    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;
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
    constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
    set(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number): Matrix2D;
    identity(): Matrix2D;
    toArray(): number[];
    fromArray(src: number[]): Matrix2D;
    [Symbol.iterator](): IterableIterator<number>;
}
//# sourceMappingURL=Matrix2D.d.ts.map