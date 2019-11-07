import { Matrix4 } from './Matrix4';

export function Identity (src: Matrix4): Matrix4
{
    return src.fromValues();
}
