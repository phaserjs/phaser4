export class Vec4
{
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
    constructor (x: number = 0, y: number = 0, z: number = 0, w: number = 0)
    {
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
    set (x: number = 0, y: number = 0, z: number = 0, w: number = 0): Vec4
    {
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
    zero (): Vec4
    {
        return this.set();
    }

    /**
     * Returns a new array containg the Vector4 component values.
     *
     * @returns {number[]}
     * @memberof Vec4
     */
    getArray (): number[]
    {
        return [ this.x, this.y, this.z, this.w ];
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
    fromArray (src: number[]): Vec4
    {
        return this.set(src[0], src[1], src[2], src[3]);
    }

    [Symbol.iterator] ()
    {
        const data = this.getArray();

        return data[Symbol.iterator]();
    }
}
