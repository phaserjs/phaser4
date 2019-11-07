import { Matrix4 } from './Matrix4';
export function FromXRotation(angle) {
    const s = Math.sin(angle);
    const c = Math.cos(angle);
    return new Matrix4(1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1);
}
//# sourceMappingURL=FromXRotation.js.map