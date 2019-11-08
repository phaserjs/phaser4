import { IMatrix4 } from './IMatrix4';
export interface IDeterminantResult {
    d00: number;
    d01: number;
    d02: number;
    d03: number;
    d04: number;
    d05: number;
    d06: number;
    d07: number;
    d08: number;
    d09: number;
    d10: number;
    d11: number;
    determinant: number | null;
}
export declare function GetDeterminant(src: IMatrix4): IDeterminantResult;
//# sourceMappingURL=GetDeterminant.d.ts.map