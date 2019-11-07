import { Matrix4 } from './Matrix4';

export function FromYRotation (angle: number): Matrix4
{
    const s: number = Math.sin(angle);
    const c: number = Math.cos(angle);

    return new Matrix4(c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1);
}
