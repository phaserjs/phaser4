import { Matrix4 } from './Matrix4';
export function FromYRotation(angle) {
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    return new Matrix4(c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1);
}
//# sourceMappingURL=FromYRotation.js.map