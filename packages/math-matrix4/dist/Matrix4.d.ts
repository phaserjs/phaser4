export declare class Matrix4 {
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
    constructor(m00?: number, m01?: number, m02?: number, m03?: number, m10?: number, m11?: number, m12?: number, m13?: number, m20?: number, m21?: number, m22?: number, m23?: number, m30?: number, m31?: number, m32?: number, m33?: number);
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
    set(m00?: number, m01?: number, m02?: number, m03?: number, m10?: number, m11?: number, m12?: number, m13?: number, m20?: number, m21?: number, m22?: number, m23?: number, m30?: number, m31?: number, m32?: number, m33?: number): Matrix4;
    /**
     * Sets all components of this Matrix4 to zero.
     *
     * @returns {Matrix4}
     * @memberof Matrix4
     */
    zero(): Matrix4;
    /**
     * Resets this Matrix4 to an identity matrix.
     *
     * @returns {Matrix4}
     * @memberof Matrix4
     */
    identity(): Matrix4;
    /**
     * Returns a new array containg the Matrix4 component values in column-major format.
     *
     * @returns {number[]}
     * @memberof Matrix4
     */
    getArray(): number[];
    [Symbol.iterator](): IterableIterator<number>;
}
//# sourceMappingURL=Matrix4.d.ts.map