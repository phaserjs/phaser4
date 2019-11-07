// Format: column-major, when typed out it looks like row-major

export class Matrix4
{
    // m00 - Component in column 0, row 0 position (index 0)
    // m01 - Component in column 0, row 1 position (index 1)
    // m02 - Component in column 0, row 2 position (index 2)
    // m03 - Component in column 0, row 3 position (index 3)
    // m10 - Component in column 1, row 0 position (index 4)
    // m11 - Component in column 1, row 1 position (index 5)
    // m12 - Component in column 1, row 2 position (index 6)
    // m13 - Component in column 1, row 3 position (index 7)
    // m20 - Component in column 2, row 0 position (index 8)
    // m21 - Component in column 2, row 1 position (index 9)
    // m22 - Component in column 2, row 2 position (index 10)
    // m23 - Component in column 2, row 3 position (index 11)
    // m30 - Component in column 3, row 0 position (index 12)
    // m31 - Component in column 3, row 1 position (index 13)
    // m32 - Component in column 3, row 2 position (index 14)
    // m33 - Component in column 3, row 3 position (index 15)
   
    m00: number;
    m01: number;
    m02: number;
    m03: number;
    m10: number;
    m11: number;
    m12: number;
    m13: number;
    m20: number;
    m21: number;
    m22: number;
    m23: number;
    m30: number;
    m31: number;
    m32: number;
    m33: number;

    constructor (m00: number = 1, m01: number = 0, m02: number = 0, m03: number = 0, m10: number = 0, m11: number = 1, m12: number = 0, m13: number = 0, m20: number = 0, m21: number = 0, m22: number = 1, m23: number = 0, m30: number = 0, m31: number = 0, m32: number = 0, m33: number = 1)
    {
        this.fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    }

    fromValues (m00: number = 1, m01: number = 0, m02: number = 0, m03: number = 0, m10: number = 0, m11: number = 1, m12: number = 0, m13: number = 0, m20: number = 0, m21: number = 0, m22: number = 1, m23: number = 0, m30: number = 0, m31: number = 0, m32: number = 0, m33: number = 1): Matrix4
    {
        this.m00 = m00;
        this.m01 = m01;
        this.m02 = m02;
        this.m03 = m03;
        this.m10 = m10;
        this.m11 = m11;
        this.m12 = m12;
        this.m13 = m13;
        this.m20 = m20;
        this.m21 = m21;
        this.m22 = m22;
        this.m23 = m23;
        this.m30 = m30;
        this.m31 = m31;
        this.m32 = m32;
        this.m33 = m33;

        return this;
    }

    get data (): number[]
    {
        return [ this.m00, this.m01, this.m02, this.m03, this.m10, this.m11, this.m12, this.m13, this.m20, this.m21, this.m22, this.m23, this.m30, this.m31, this.m32, this.m33 ];
    }
}
