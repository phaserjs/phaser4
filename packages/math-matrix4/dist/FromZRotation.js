import { Matrix4 } from './Matrix4';
export function FromZRotation(angle) {
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    return new Matrix4(c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
}
//# sourceMappingURL=FromZRotation.js.map