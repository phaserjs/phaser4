import { Matrix4 } from '@phaserjs/math-matrix4';

export function Identity (src: Matrix4): Matrix4
{
    return src.identity();
}
