import { Matrix4 } from './Matrix4';

export function Perspective (fovy: number, aspect: number, near: number, far: number): Matrix4
{
    const f = 1 / Math.tan(fovy / 2);

    let m22: number = -1;
    let m32: number = -2 * near;

    if (far !== null && far !== Infinity)
    {
        const nf: number = 1 / (near - far);
        m22 = (far + near) * nf;
        m32 = (2 * far * near) * nf;
    }

    return new Matrix4(f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, m22, -1, 0, 0, m32, 0);
}
