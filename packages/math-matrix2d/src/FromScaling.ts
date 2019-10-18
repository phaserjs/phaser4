import { Matrix2D } from './Matrix2D';

export function FromScaling (scaleX: number, scaleY: number = scaleX): Matrix2D
{
    const out: Matrix2D = new Matrix2D();

    return out.scale(scaleX, scaleY);
}
