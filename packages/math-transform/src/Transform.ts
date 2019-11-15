import { Matrix2D } from '@phaserjs/math-matrix2d';
import { Vec2 } from '@phaserjs/math-vec2';

export class Transform
{
    readonly local: Matrix2D;
    readonly world: Matrix2D;

    protected _position: Vec2;
    protected _scale: Vec2;
    protected _skew: Vec2;
    protected _origin: Vec2;
    protected _rotation: number;

    protected dirty: boolean;

    private _a: number;
    private _b: number;
    private _c: number;
    private _d: number;

    constructor (x: number = 0, y: number = 0, rotation: number = 0, scaleX: number = 1, scaleY = 1)
    {
        this.local = new Matrix2D();
        this.world = new Matrix2D();

        this._position = new Vec2(x, y);
        this._scale = new Vec2(scaleX, scaleY);
        this._skew = new Vec2(0, 0);
        this._origin = new Vec2(0, 0);
        this._rotation = rotation;

        this.dirty = true;
    }

    update (): boolean
    {
        if (!this.dirty)
        {
            return false;
        }

        const { _a, _b, _c, _d, _position } = this;

        // tx = this._position.x - ((this._origin.x * a) + (this._origin.y * c));
        // ty = this._position.y - ((this._origin.x * b) + (this._origin.y * d));

        this.local.set(_a, _b, _c, _d, _position.x, _position.y);

        this.dirty = false;

        return true;
    }

    setPosition (x: number, y: number): Transform
    {
        this._position.set(x, y);

        this.dirty = true;

        return this;
    }

    setScale (scaleX: number, scaleY: number = scaleX): Transform
    {
        this._scale.set(scaleX, scaleY);

        this.dirty = true;

        this.updateCache();

        return this;
    }

    setSkew (skewX: number, skewY: number): Transform
    {
        this._skew.set(skewX, skewY);

        this.dirty = true;

        this.updateCache();

        return this;
    }

    setOrigin (originX: number, originY: number = originX): Transform
    {
        this._origin.set(originX, originY);

        this.dirty = true;

        return this;
    }

    setRotation (rotation: number): Transform
    {
        this.rotation = rotation;

        return this;
    }

    private updateCache ()
    {
        const { _rotation, _skew, _scale } = this;

        this._a = Math.cos(_rotation + _skew.y) * _scale.x;
        this._b = Math.sin(_rotation + _skew.y) * _scale.x;
        this._c = -Math.sin(_rotation - _skew.x) * _scale.y;
        this._d = Math.cos(_rotation - _skew.x) * _scale.y;
    }

    set x (value: number)
    {
        this._position.x = value;
        this.dirty = true;
    }

    get x (): number
    {
        return this._position.x;
    }

    set y (value: number)
    {
        this._position.y = value;
        this.dirty = true;
    }

    get y (): number
    {
        return this._position.y;
    }

    set rotation (value: number)
    {
        this._rotation = value;

        this.dirty = true;

        this.updateCache();
    }

    get rotation (): number
    {
        return this._rotation;
    }

    set scaleX (value: number)
    {
        this._scale.x = value;

        this.dirty = true;

        this.updateCache();
    }

    get scaleX (): number
    {
        return this._scale.x;
    }

    set scaleY (value: number)
    {
        this._scale.y = value;

        this.dirty = true;

        this.updateCache();
    }

    get scaleY (): number
    {
        return this._scale.y;
    }

    set originX (value: number)
    {
        this._origin.x = value;

        this.dirty = true;
    }

    get originX (): number
    {
        return this._origin.x;
    }

    set originY (value: number)
    {
        this._origin.y = value;

        this.dirty = true;
    }

    get originY (): number
    {
        return this._origin.y;
    }

    set skewX (value: number)
    {
        this._skew.x = value;

        this.dirty = true;

        this.updateCache();
    }

    get skewX (): number
    {
        return this._skew.x;
    }

    set skewY (value: number)
    {
        this._skew.y = value;

        this.dirty = true;

        this.updateCache();
    }

    get skewY (): number
    {
        return this._skew.y;
    }
}
