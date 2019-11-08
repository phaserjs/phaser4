import { IMatrix4 } from '@phaserjs/math-matrix4';

export function GetTranslation (src: IMatrix4): { x: number, y: number, z: number }
{
    return { x: src.m30, y: src.m31, z: src.m32 };
}
