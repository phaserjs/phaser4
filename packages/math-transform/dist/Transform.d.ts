import { Matrix2D } from '@phaserjs/math-matrix2d';
export declare class Transform {
    readonly local: Matrix2D;
    readonly world: Matrix2D;
    private _position;
    private _scale;
    private _skew;
    private _origin;
    private _rotation;
    private _a;
    private _b;
    private _c;
    private _d;
    private dirty;
    constructor(x?: number, y?: number, rotation?: number, scaleX?: number, scaleY?: number);
    update(): boolean;
    private updateCache;
    set x(value: number);
    get x(): number;
    set y(value: number);
    get y(): number;
    set rotation(value: number);
    get rotation(): number;
    set scaleX(value: number);
    get scaleX(): number;
    set scaleY(value: number);
    get scaleY(): number;
    set originX(value: number);
    get originX(): number;
    set originY(value: number);
    get originY(): number;
    set skewX(value: number);
    get skewX(): number;
    set skewY(value: number);
    get skewY(): number;
}
//# sourceMappingURL=Transform.d.ts.map