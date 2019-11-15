import { Matrix2D } from '@phaserjs/math-matrix2d';
import { Vec2 } from '@phaserjs/math-vec2';
export class Transform {
    constructor(x = 0, y = 0, rotation = 0, scaleX = 1, scaleY = 1) {
        this.local = new Matrix2D();
        this.world = new Matrix2D();
        this._position = new Vec2(x, y);
        this._scale = new Vec2(scaleX, scaleY);
        this._skew = new Vec2(0, 0);
        this._origin = new Vec2(0, 0);
        this._rotation = rotation;
        this.dirty = true;
    }
    update() {
        if (!this.dirty) {
            return false;
        }
        const { _a, _b, _c, _d, _position } = this;
        // tx = this._position.x - ((this._origin.x * a) + (this._origin.y * c));
        // ty = this._position.y - ((this._origin.x * b) + (this._origin.y * d));
        this.local.set(_a, _b, _c, _d, _position.x, _position.y);
        this.dirty = false;
        return true;
    }
    setPosition(x, y) {
        this._position.set(x, y);
        this.dirty = true;
        return this;
    }
    setScale(scaleX, scaleY) {
        this._scale.set(scaleX, scaleY);
        this.dirty = true;
        this.updateCache();
        return this;
    }
    setSkew(skewX, skewY) {
        this._skew.set(skewX, skewY);
        this.dirty = true;
        this.updateCache();
        return this;
    }
    setOrigin(originX, originY) {
        this._origin.set(originX, originY);
        this.dirty = true;
        return this;
    }
    setRotation(rotation) {
        this.rotation = rotation;
        return this;
    }
    updateCache() {
        const { _rotation, _skew, _scale } = this;
        this._a = Math.cos(_rotation + _skew.y) * _scale.x;
        this._b = Math.sin(_rotation + _skew.y) * _scale.x;
        this._c = -Math.sin(_rotation - _skew.x) * _scale.y;
        this._d = Math.cos(_rotation - _skew.x) * _scale.y;
    }
    set x(value) {
        this._position.x = value;
        this.dirty = true;
    }
    get x() {
        return this._position.x;
    }
    set y(value) {
        this._position.y = value;
        this.dirty = true;
    }
    get y() {
        return this._position.y;
    }
    set rotation(value) {
        this._rotation = value;
        this.dirty = true;
        this.updateCache();
    }
    get rotation() {
        return this._rotation;
    }
    set scaleX(value) {
        this._scale.x = value;
        this.dirty = true;
        this.updateCache();
    }
    get scaleX() {
        return this._scale.x;
    }
    set scaleY(value) {
        this._scale.y = value;
        this.dirty = true;
        this.updateCache();
    }
    get scaleY() {
        return this._scale.y;
    }
    set originX(value) {
        this._origin.x = value;
        this.dirty = true;
    }
    get originX() {
        return this._origin.x;
    }
    set originY(value) {
        this._origin.y = value;
        this.dirty = true;
    }
    get originY() {
        return this._origin.y;
    }
    set skewX(value) {
        this._skew.x = value;
        this.dirty = true;
        this.updateCache();
    }
    get skewX() {
        return this._skew.x;
    }
    set skewY(value) {
        this._skew.y = value;
        this.dirty = true;
        this.updateCache();
    }
    get skewY() {
        return this._skew.y;
    }
}
//# sourceMappingURL=Transform.js.map