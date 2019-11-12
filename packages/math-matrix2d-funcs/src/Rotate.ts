import { IMatrix2D, Matrix2D } from '@phaserjs/math-matrix2d';

export function Rotate (src: IMatrix2D, angle: number): Matrix2D
{
    const { a, b, c, d } = src;

    const sin = Math.sin(angle);
    const cos = Math.cos(angle);

    return new Matrix2D(
        a * cos + c * sin,
        b * cos + d * sin,
        a * -sin + c * cos,
        b * -sin + d * cos
    );
}
