import { Matrix2D } from './Matrix2D';

export function FromScaling (scaleX: number, scaleY: number = scaleX): Matrix2D
{
    return new Matrix2D(scaleX, 0, 0, scaleY);
}
