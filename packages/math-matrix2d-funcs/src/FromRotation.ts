import { Matrix2D } from './Matrix2D';
import { Rotate } from './Rotate';

export function FromRotation (angle: number): Matrix2D
{
    const out: Matrix2D = new Matrix2D();

    return Rotate(out, angle, out);
}
