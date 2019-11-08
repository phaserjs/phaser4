export class Vec2
{
    /**
     * X component
     *
     * @type {number}
     * @memberof Vec2
     */
    x: number;

    /**
     * Y component
     *
     * @type {number}
     * @memberof Vec2
     */
    y: number;

    /**
     * Creates an instance of a Vector2.
     * 
     * @param {number} [x=0] - X component
     * @param {number} [y=0] - Y component
     * @memberof Vec2
     */
    constructor (x: number = 0, y: number = 0)
    {
        this.set(x, y);
    }

    /**
     * Sets the components of this Vector2.
     * 
     * @param {number} [x=0] - X component
     * @param {number} [y=0] - Y component
     * @returns {Vec2}
     * @memberof Vec2
     */
    set (x: number = 0, y: number = 0): Vec2
    {
        this.x = x;
        this.y = y;

        return this;
    }

    /**
     * Sets all components of this Vector2 to zero.
     *
     * @returns {Vec2}
     * @memberof Vec2
     */
    zero (): Vec2
    {
        return this.set();
    }

    /**
     * Returns a new array containg the Vector2 component values.
     *
     * @returns {number[]}
     * @memberof Vec2
     */
    getArray (): number[]
    {
        return [ this.x, this.y ];
    }

    /**
     * Sets the values of this Vector2 based on the given array, or array-like object, such as a Float32.
     * 
     * The source must have 2 elements, starting from index 0 through to index 1.
     *
     * @param {number[]} src - The source array to copy the values from.
     * @returns {Vec2}
     * @memberof Vec2
     */
    fromArray (src: number[]): Vec2
    {
        return this.set(src[0], src[1]);
    }

    [Symbol.iterator] ()
    {
        const data = this.getArray();

        return data[Symbol.iterator]();
    }
}
