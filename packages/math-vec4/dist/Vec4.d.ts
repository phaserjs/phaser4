export declare class Vec4 {
    /**
     * X component
     *
     * @type {number}
     * @memberof Vec4
     */
    x: number;
    /**
     * Y component
     *
     * @type {number}
     * @memberof Vec4
     */
    y: number;
    /**
     * Z component
     *
     * @type {number}
     * @memberof Vec4
     */
    z: number;
    /**
     * W component
     *
     * @type {number}
     * @memberof Vec4
     */
    w: number;
    /**
     * Creates an instance of a Vector4.
     *
     * @param {number} [x=0] - X component
     * @param {number} [y=0] - Y component
     * @param {number} [z=0] - Z component
     * @param {number} [w=0] - w component
     * @memberof Vec4
     */
    constructor(x?: number, y?: number, z?: number, w?: number);
    /**
     * Sets the components of this Vector4.
     *
     * @param {number} [x=0] - X component
     * @param {number} [y=0] - Y component
     * @param {number} [z=0] - Z component
     * @param {number} [w=0] - w component
     * @returns {Vec4}
     * @memberof Vec4
     */
    set(x?: number, y?: number, z?: number, w?: number): Vec4;
    /**
     * Sets all components of this Vector4 to zero.
     *
     * @returns {Vec4}
     * @memberof Vec4
     */
    zero(): Vec4;
    /**
     * Returns a new array containg the Vector4 component values.
     *
     * @returns {number[]}
     * @memberof Vec4
     */
    getArray(): number[];
    /**
     * Sets the values of this Vector4 based on the given array, or array-like object, such as a Float32.
     *
     * The source must have 4 elements, starting from index 0 through to index 3.
     *
     * @param {number[]} src - The source array to copy the values from.
     * @returns {Vec4}
     * @memberof Vec4
     */
    fromArray(src: number[]): Vec4;
    [Symbol.iterator](): IterableIterator<number>;
}
//# sourceMappingURL=Vec4.d.ts.map