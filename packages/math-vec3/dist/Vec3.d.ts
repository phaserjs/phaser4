export declare class Vec3 {
    /**
     * X component
     *
     * @type {number}
     * @memberof Vec3
     */
    x: number;
    /**
     * Y component
     *
     * @type {number}
     * @memberof Vec3
     */
    y: number;
    /**
     * Z component
     *
     * @type {number}
     * @memberof Vec3
     */
    z: number;
    /**
     * Creates an instance of a Vector3.
     *
     * @param {number} [x=0] - X component
     * @param {number} [y=0] - Y component
     * @param {number} [z=0] - Z component
     * @memberof Vec3
     */
    constructor(x?: number, y?: number, z?: number);
    /**
     * Sets the components of this Vector3.
     *
     * @param {number} [x=0] - X component
     * @param {number} [y=0] - Y component
     * @param {number} [z=0] - Z component
     * @returns {Vec3}
     * @memberof Vec3
     */
    set(x?: number, y?: number, z?: number): Vec3;
    /**
     * Sets all components of this Vector3 to zero.
     *
     * @returns {Vec3}
     * @memberof Vec3
     */
    zero(): Vec3;
    /**
     * Returns a new array containg the Vector3 component values.
     *
     * @returns {number[]}
     * @memberof Vec3
     */
    getArray(): number[];
    /**
     * Sets the values of this Vector3 based on the given array, or array-like object, such as a Float32.
     *
     * The source must have 3 elements, starting from index 0 through to index 2.
     *
     * @param {number[]} src - The source array to copy the values from.
     * @returns {Vec3}
     * @memberof Vec3
     */
    fromArray(src: number[]): Vec3;
    [Symbol.iterator](): IterableIterator<number>;
}
//# sourceMappingURL=Vec3.d.ts.map