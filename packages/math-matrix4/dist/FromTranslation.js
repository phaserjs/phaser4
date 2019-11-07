import { Matrix4 } from './Matrix4';
export function FromTranslation(x, y = 0, z = 0) {
    return new Matrix4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1);
}
//# sourceMappingURL=FromTranslation.js.map