import { IMatrix4 } from './IMatrix4';
import { Matrix4 } from './Matrix4';

export function Rotate (src: IMatrix4, angle: number, out: Matrix4 = new Matrix4()): Matrix4
{
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);

    return out;
}
