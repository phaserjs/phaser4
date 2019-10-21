import { Matrix2D } from './Matrix2D';
import { Rotate } from './Rotate';
export function FromRotation(angle) {
    const out = new Matrix2D();
    return Rotate(out, angle, out);
}
//# sourceMappingURL=FromRotation.js.map