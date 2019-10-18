import { Matrix2D } from './Matrix2D';

export function FromRotation (angle: number): Matrix2D
{
    const out: Matrix2D = new Matrix2D();

    return out.rotate(angle);
}
