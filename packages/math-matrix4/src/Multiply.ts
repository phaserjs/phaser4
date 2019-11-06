import { IMatrix4 } from './IMatrix4';
import { Matrix4 } from './Matrix4';

export function Multiply (a: Matrix4, b: IMatrix4, out: Matrix4 = new Matrix4()): Matrix4
{
    const a00: number = a.m00;
    const a01: number = a.m01;
    const a02: number = a.m02;
    const a03: number = a.m03;

    const a10: number = a.m10;
    const a11: number = a.m11;
    const a12: number = a.m12;
    const a13: number = a.m13;

    const a20: number = a.m20;
    const a21: number = a.m21;
    const a22: number = a.m22;
    const a23: number = a.m23;

    const a30: number = a.m30;
    const a31: number = a.m31;
    const a32: number = a.m32;
    const a33: number = a.m33;
    
    //  Cache the current line
    let b0: number = b.m00;
    let b1: number = b.m01;
    let b2: number = b.m02;
    let b3: number = b.m03;

    out.m00 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out.m01 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out.m02 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out.m03 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  
    b0 = b.m10;
    b1 = b.m11;
    b2 = b.m12;
    b3 = b.m13;

    out.m10 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out.m11 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out.m12 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out.m13 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  
    b0 = b.m20;
    b1 = b.m21;
    b2 = b.m22;
    b3 = b.m23;

    out.m20 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out.m21 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out.m22 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out.m23 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  
    b0 = b.m30;
    b1 = b.m31;
    b2 = b.m32;
    b3 = b.m33;

    out.m30 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out.m31 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out.m32 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out.m33 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    return out;
}
