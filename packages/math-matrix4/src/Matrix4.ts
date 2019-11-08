export class Matrix4
{
    /**
     * Component in column 0, row 0 position (index 0)
     *
     * @type {number}
     * @memberof Matrix4
     */
    m00: number;

    /**
     * Component in column 0, row 1 position (index 1)
     *
     * @type {number}
     * @memberof Matrix4
     */
    m01: number;

    /**
     * Component in column 0, row 2 position (index 2)
     *
     * @type {number}
     * @memberof Matrix4
     */
    m02: number;

    /**
     * Component in column 0, row 3 position (index 3)
     *
     * @type {number}
     * @memberof Matrix4
     */
    m03: number;

    /**
     * Component in column 1, row 0 position (index 4)
     *
     * @type {number}
     * @memberof Matrix4
     */
    m10: number;

    /**
     * Component in column 1, row 1 position (index 5)
     *
     * @type {number}
     * @memberof Matrix4
     */
    m11: number;

    /**
     * Component in column 1, row 2 position (index 6)
     *
     * @type {number}
     * @memberof Matrix4
     */
    m12: number;

    /**
     * Component in column 1, row 3 position (index 7)
     *
     * @type {number}
     * @memberof Matrix4
     */
    m13: number;

    /**
     * Component in column 2, row 0 position (index 8)
     *
     * @type {number}
     * @memberof Matrix4
     */
    m20: number;

    /**
     * Component in column 2, row 1 position (index 9)
     *
     * @type {number}
     * @memberof Matrix4
     */
    m21: number;

    /**
     * Component in column 2, row 2 position (index 10)
     *
     * @type {number}
     * @memberof Matrix4
     */
    m22: number;

    /**
     * Component in column 2, row 3 position (index 11)
     *
     * @type {number}
     * @memberof Matrix4
     */
    m23: number;

    /**
     * Component in column 3, row 0 position (index 12)
     *
     * @type {number}
     * @memberof Matrix4
     */
    m30: number;

    /**
     * Component in column 3, row 1 position (index 13)
     *
     * @type {number}
     * @memberof Matrix4
     */
    m31: number;

    /**
     * Component in column 3, row 2 position (index 14)
     *
     * @type {number}
     * @memberof Matrix4
     */
    m32: number;

    /**
     * Component in column 3, row 3 position (index 15)
     *
     * @type {number}
     * @memberof Matrix4
     */
    m33: number;

    /**
     * Creates an instance of a Matrix4.
     * 
     * Format: column-major, when typed out it looks like row-major.
     * 
     * @param {number} [m00=1] - Component in column 0, row 0 position (index 0)
     * @param {number} [m01=0] - Component in column 0, row 1 position (index 1)
     * @param {number} [m02=0] - Component in column 0, row 2 position (index 2)
     * @param {number} [m03=0] - Component in column 0, row 3 position (index 3)
     * @param {number} [m10=0] - Component in column 1, row 0 position (index 4)
     * @param {number} [m11=1] - Component in column 1, row 1 position (index 5)
     * @param {number} [m12=0] - Component in column 1, row 2 position (index 6)
     * @param {number} [m13=0] - Component in column 1, row 3 position (index 7)
     * @param {number} [m20=0] - Component in column 2, row 0 position (index 8)
     * @param {number} [m21=0] - Component in column 2, row 1 position (index 9)
     * @param {number} [m22=1] - Component in column 2, row 2 position (index 10)
     * @param {number} [m23=0] - Component in column 2, row 3 position (index 11)
     * @param {number} [m30=0] - Component in column 3, row 0 position (index 12)
     * @param {number} [m31=0] - Component in column 3, row 1 position (index 13)
     * @param {number} [m32=0] - Component in column 3, row 2 position (index 14)
     * @param {number} [m33=1] - Component in column 3, row 3 position (index 15)
     * @memberof Matrix4
     */
    constructor (m00: number = 1, m01: number = 0, m02: number = 0, m03: number = 0, m10: number = 0, m11: number = 1, m12: number = 0, m13: number = 0, m20: number = 0, m21: number = 0, m22: number = 1, m23: number = 0, m30: number = 0, m31: number = 0, m32: number = 0, m33: number = 1)
    {
        this.set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
    }

    /**
     * Sets the components of this Matrix4.
     * 
     * If no parameters are given it resets this Matrix4 to an identity matrix.
     * 
     * @param {number} [m00=1] - Component in column 0, row 0 position (index 0)
     * @param {number} [m01=0] - Component in column 0, row 1 position (index 1)
     * @param {number} [m02=0] - Component in column 0, row 2 position (index 2)
     * @param {number} [m03=0] - Component in column 0, row 3 position (index 3)
     * @param {number} [m10=0] - Component in column 1, row 0 position (index 4)
     * @param {number} [m11=1] - Component in column 1, row 1 position (index 5)
     * @param {number} [m12=0] - Component in column 1, row 2 position (index 6)
     * @param {number} [m13=0] - Component in column 1, row 3 position (index 7)
     * @param {number} [m20=0] - Component in column 2, row 0 position (index 8)
     * @param {number} [m21=0] - Component in column 2, row 1 position (index 9)
     * @param {number} [m22=1] - Component in column 2, row 2 position (index 10)
     * @param {number} [m23=0] - Component in column 2, row 3 position (index 11)
     * @param {number} [m30=0] - Component in column 3, row 0 position (index 12)
     * @param {number} [m31=0] - Component in column 3, row 1 position (index 13)
     * @param {number} [m32=0] - Component in column 3, row 2 position (index 14)
     * @param {number} [m33=1] - Component in column 3, row 3 position (index 15)
     * @returns {Matrix4}
     * @memberof Matrix4
     */
    set (m00: number = 1, m01: number = 0, m02: number = 0, m03: number = 0, m10: number = 0, m11: number = 1, m12: number = 0, m13: number = 0, m20: number = 0, m21: number = 0, m22: number = 1, m23: number = 0, m30: number = 0, m31: number = 0, m32: number = 0, m33: number = 1): Matrix4
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

    /**
     * Sets all components of this Matrix4 to zero.
     *
     * @returns {Matrix4}
     * @memberof Matrix4
     */
    zero (): Matrix4
    {
        return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }

    /**
     * Resets this Matrix4 to an identity matrix.
     *
     * @returns {Matrix4}
     * @memberof Matrix4
     */
    identity (): Matrix4
    {
        return this.set();
    }

    /**
     * Returns a new array containg the Matrix4 component values in column-major format.
     *
     * @returns {number[]}
     * @memberof Matrix4
     */
    getArray (): number[]
    {
        return [ this.m00, this.m01, this.m02, this.m03, this.m10, this.m11, this.m12, this.m13, this.m20, this.m21, this.m22, this.m23, this.m30, this.m31, this.m32, this.m33 ];
    }

    [Symbol.iterator] ()
    {
        const data = this.getArray();

        return data[Symbol.iterator]();
    }
}
