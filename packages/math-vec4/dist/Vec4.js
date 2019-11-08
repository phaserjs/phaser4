export class Vec4 {
    /**
     * Creates an instance of a Vector4.
     *
     * @param {number} [x=0] - X component
     * @param {number} [y=0] - Y component
     * @param {number} [z=0] - Z component
     * @param {number} [w=0] - w component
     * @memberof Vec4
     */
    constructor(x = 0, y = 0, z = 0, w = 0) {
        this.set(x, y, z, w);
    }
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
    set(x = 0, y = 0, z = 0, w = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
    }
    /**
     * Sets all components of this Vector4 to zero.
     *
     * @returns {Vec4}
     * @memberof Vec4
     */
    zero() {
        return this.set();
    }
    /**
     * Returns a new array containg the Vector4 component values.
     *
     * @returns {number[]}
     * @memberof Vec4
     */
    getArray() {
        return [this.x, this.y, this.z, this.w];
    }
    /**
     * Sets the values of this Vector4 based on the given array, or array-like object, such as a Float32.
     *
     * The source must have 4 elements, starting from index 0 through to index 3.
     *
     * @param {number[]} src - The source array to copy the values from.
     * @returns {Vec4}
     * @memberof Vec4
     */
    fromArray(src) {
        return this.set(src[0], src[1], src[2], src[3]);
    }
    [Symbol.iterator]() {
        const data = this.getArray();
        return data[Symbol.iterator]();
    }
}
//# sourceMappingURL=Vec4.js.map