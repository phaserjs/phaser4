import { Matrix4 } from '@phaserjs/math-matrix4';
import { IVec3 } from '@phaserjs/math-vec3';

// Generates a matrix that makes something look at something else

export function TargetTo (eye: IVec3, target: IVec3, up: IVec3, epsilon: number = 0.000001): Matrix4
{
    const { x: eyex, y: eyey, z: eyez } = eye;
    const { x: upx, y: upy, z: upz } = up;
    const { x: targetx, y: targety, z: targetz } = target;

    let z0: number = eyex - targetx;
    let z1: number = eyey - targety;
    let z2: number = eyez - targetz;
  
    let len = z0 * z0 + z1 * z1 + z2 * z2;

    if (len > 0)
    {
        len = 1 / Math.sqrt(len);

        z0 *= len;
        z1 *= len;
        z2 *= len;
    }
  
    let x0 = upy * z2 - upz * z1;
    let x1 = upz * z0 - upx * z2;
    let x2 = upx * z1 - upy * z0;
  
    len = x0 * x0 + x1 * x1 + x2 * x2;

    if (len > 0)
    {
        len = 1 / Math.sqrt(len);

        x0 *= len;
        x1 *= len;
        x2 *= len;
    }
  
    return new Matrix4(
        x0,
        x1,
        x2,
        0,
        z1 * x2 - z2 * x1,
        z2 * x0 - z0 * x2,
        z0 * x1 - z1 * x0,
        0,
        z0,
        z1,
        z2,
        0,
        eyex,
        eyey,
        eyez,
        1
    );
}
