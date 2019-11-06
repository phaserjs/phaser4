export interface IMatrix4
{
    m00: number;    // Component in column 0, row 0 position (index 0)
    m01: number;    // Component in column 0, row 1 position (index 1)
    m02: number;    // Component in column 0, row 2 position (index 2)
    m03: number;    // Component in column 0, row 3 position (index 3)

    m10: number;    // Component in column 1, row 0 position (index 4)
    m11: number;    // Component in column 1, row 1 position (index 5)
    m12: number;    // Component in column 1, row 2 position (index 6)
    m13: number;    // Component in column 1, row 3 position (index 7)

    m20: number;    // Component in column 2, row 0 position (index 8)
    m21: number;    // Component in column 2, row 1 position (index 9)
    m22: number;    // Component in column 2, row 2 position (index 10)
    m23: number;    // Component in column 2, row 3 position (index 11)

    m30: number;    // Component in column 3, row 0 position (index 12)
    m31: number;    // Component in column 3, row 1 position (index 13)
    m32: number;    // Component in column 3, row 2 position (index 14)
    m33: number;    // Component in column 3, row 3 position (index 15)
}
