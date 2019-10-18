import { IMatrix2D } from './IMatrix2D';
export declare class Matrix2D {
    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;
    constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
    fromValues(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number): Matrix2D;
    clone(): Matrix2D;
    copy(source: IMatrix2D): Matrix2D;
    identity(): Matrix2D;
    add(src: IMatrix2D): Matrix2D;
    subtract(src: IMatrix2D): Matrix2D;
    sub(src: IMatrix2D): Matrix2D;
    multiply(src: IMatrix2D): Matrix2D;
    mul(src: IMatrix2D): Matrix2D;
    multiplyScalar(scale: number): Matrix2D;
    multiplyScalarAndAdd(src: IMatrix2D, scale: number): Matrix2D;
    rotate(angle: number): Matrix2D;
    scale(scaleX: number, scaleY?: number): Matrix2D;
    translate(x: number, y: number): Matrix2D;
    exactEquals(src: IMatrix2D): boolean;
    equals(src: IMatrix2D, epsilon?: number): boolean;
    determinant(): number;
    frob(): number;
    invert(): Matrix2D | null;
}
//# sourceMappingURL=Matrix2D.d.ts.map