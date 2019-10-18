import { Matrix2D } from './Matrix2D';
export function FromScaling(scaleX, scaleY = scaleX) {
    const out = new Matrix2D();
    return out.scale(scaleX, scaleY);
}
//# sourceMappingURL=FromScaling.js.map