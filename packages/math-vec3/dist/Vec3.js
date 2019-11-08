export class Vec3 {
    /**
     * Creates an instance of a Vector3.
     *
     * @param {number} [x=0] - X component
     * @param {number} [y=0] - Y component
     * @param {number} [z=0] - Z component
     * @memberof Vec3
     */
    constructor(x = 0, y = 0, z = 0) {
        this.set(x, y, z);
    }
    /**
     * Sets the components of this Vector3.
     *
     * @param {number} [x=0] - X component
     * @param {number} [y=0] - Y component
     * @param {number} [z=0] - Z component
     * @returns {Vec3}
     * @memberof Vec3
     */
    set(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }
    /**
     * Sets all components of this Vector3 to zero.
     *
     * @returns {Vec3}
     * @memberof Vec3
     */
    zero() {
        return this.set();
    }
    /**
     * Returns a new array containg the Vector3 component values.
     *
     * @returns {number[]}
     * @memberof Vec3
     */
    getArray() {
        return [this.x, this.y, this.z];
    }
    /**
     * Sets the values of this Vector3 based on the given array, or array-like object, such as a Float32.
     *
     * The source must have 3 elements, starting from index 0 through to index 2.
     *
     * @param {number[]} src - The source array to copy the values from.
     * @returns {Vec3}
     * @memberof Vec3
     */
    fromArray(src) {
        return this.set(src[0], src[1], src[2]);
    }
    [Symbol.iterator]() {
        const data = this.getArray();
        return data[Symbol.iterator]();
    }
}
//# sourceMappingURL=Vec3.js.map