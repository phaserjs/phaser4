import { Matrix4 } from './Matrix4';

export function FromTranslation (x: number, y: number = 0, z: number = 0): Matrix4
{
    return new Matrix4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1);
}
