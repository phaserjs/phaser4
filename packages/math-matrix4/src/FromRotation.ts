import { IMatrix4 } from './IMatrix4';
import { Matrix4 } from './Matrix4';

export function FromRotation (angle: number, axis: { x: number, y: number, z: number }, epsilon: number = 0.000001): Matrix4 | null
{
    let { x, y, z } = axis;

    let len: number = Math.hypot(x, y, z);

    if (len < epsilon)
    {
        return null;
    }

    len = 1 / len;

    x *= len;
    y *= len;
    z *= len;

    const s: number = Math.sin(angle);
    const c: number = Math.cos(angle);
    const t: number = 1 - c;

    const a00: number = x * x * t + c;
    const a01: number = y * x * t + z * s;
    const a02: number = z * x * t - y * s;

    const a10: number = x * y * t - z * s;
    const a11: number = y * y * t + c;
    const a12: number = z * y * t + x * s;

    const a20: number = x * z * t + y * s;
    const a21: number = y * z * t - x * s;
    const a22: number = z * z * t + c;

    return new Matrix4(a00, a01, a02, 0, a10, a11, a12, 0, a20, a21, a22, 0, 0, 0, 0, 1);
}
