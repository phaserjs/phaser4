import { Matrix4 } from '@phaserjs/math-matrix4';

export function FromScaling (x: number, y: number = 0, z: number = 0): Matrix4
{
    return new Matrix4(x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1);
}
