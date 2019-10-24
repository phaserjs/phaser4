import { IUniformData } from './IUniformData';

const TYPE_1I: string = '1i';
const TYPE_2I: string = '2i';
const TYPE_3I: string = '3i';
const TYPE_4I: string = '4i';

const TYPE_1F: string = '1f';
const TYPE_2F: string = '2f';
const TYPE_3F: string = '3f';
const TYPE_4F: string = '4f';

const TYPE_1UI: string = '1ui';
const TYPE_2UI: string = '2ui';
const TYPE_3UI: string = '3ui';
const TYPE_4UI: string = '4ui';

const TYPE_1IV: string = '1iv';
const TYPE_2IV: string = '2iv';
const TYPE_3IV: string = '3iv';
const TYPE_4IV: string = '4iv';

const TYPE_FV: string = 'fv';

const SAMPLER_TYPE = [ TYPE_1I, 1, Int32Array, false ];

const glConstMap = {

    0x8B5E: SAMPLER_TYPE,                                   // SAMPLER_2D
    0x8DC1: SAMPLER_TYPE,                                   // SAMPLER_2D_ARRAY
    0x8B62: SAMPLER_TYPE,                                   // SAMPLER_2D_SHADOW
    0x8DC4: SAMPLER_TYPE,                                   // SAMPLER_2D_ARRAY_SHADOW
    0x8DCA: SAMPLER_TYPE,                                   // INT_SAMPLER_2D
    0x8DCF: SAMPLER_TYPE,                                   // INT_SAMPLER_2D_ARRAY
    0x8DD2: SAMPLER_TYPE,                                   // UNSIGNED_INT_SAMPLER_2D
    0x8DD7: SAMPLER_TYPE,                                   // UNSIGNED_INT_SAMPLER_2D_ARRAY
    0x8B60: SAMPLER_TYPE,                                   // SAMPLER_CUBE
    0x8DCC: SAMPLER_TYPE,                                   // INT_SAMPLER_CUBE
    0x8DD4: SAMPLER_TYPE,                                   // UNSIGNED_INT_SAMPLER_CUBE
    0x8DC5: SAMPLER_TYPE,                                   // SAMPLER_CUBE_SHADOW
    0x8B5F: SAMPLER_TYPE,                                   // SAMPLER_3D
    0x8DCB: SAMPLER_TYPE,                                   // INT_SAMPLER_3D
    0x8DD3: SAMPLER_TYPE,                                   // UNSIGNED_INT_SAMPLER_3D

    0x1406: [ TYPE_1F, 1, Float32Array, false ],            // FLOAT
    0x8B50: [ TYPE_2F, 2, Float32Array, false ],            // FLOAT_VEC2
    0x8B51: [ TYPE_3F, 3, Float32Array, false ],            // FLOAT_VEC3
    0x8B52: [ TYPE_4F, 4, Float32Array, false ],            // FLOAT_VEC4
    0x1404: [ TYPE_1I, 1, Int32Array, false ],              // INT
    0x8B53: [ TYPE_2I, 2, Int32Array, false ],              // INT_VEC2
    0x8B54: [ TYPE_3I, 3, Int32Array, false ],              // INT_VEC3
    0x8B55: [ TYPE_4I, 4, Int32Array, false ],              // INT_VEC4
    0x1405: [ TYPE_1UI, 1, Uint32Array, false ],            // UNSIGNED_INT
    0x8DC6: [ TYPE_2UI, 2, Uint32Array, false ],            // UNSIGNED_INT_VEC2
    0x8DC7: [ TYPE_3UI, 3, Uint32Array, false ],            // UNSIGNED_INT_VEC3
    0x8DC8: [ TYPE_4UI, 4, Uint32Array, false ],            // UNSIGNED_INT_VEC4

    0x8B5A: [ '2' + TYPE_FV, 4, Float32Array, true ],       // FLOAT_MAT2
    0x8B5B: [ '3' + TYPE_FV, 9, Float32Array, true ],       // FLOAT_MAT3
    0x8B5C: [ '4' + TYPE_FV, 16, Float32Array, true ],      // FLOAT_MAT4
    0x8B65: [ '2x3' + TYPE_FV, 6, Float32Array, true],      // FLOAT_MAT2x3
    0x8B66: [ '2x4' + TYPE_FV, 8, Float32Array, true],      // FLOAT_MAT2x4
    0x8B67: [ '3x2' + TYPE_FV, 6, Float32Array, true],      // FLOAT_MAT3x2
    0x8B68: [ '3x4' + TYPE_FV, 12, Float32Array, true],     // FLOAT_MAT3x4
    0x8B69: [ '4x2' + TYPE_FV, 8, Float32Array, true],      // FLOAT_MAT4x2
    0x8B6A: [ '4x3' + TYPE_FV, 12, Float32Array, true],     // FLOAT_MAT4x3

    0x8B56: [ TYPE_1IV, 1, Array, false ],                  // BOOL
    0x8B57: [ TYPE_2IV, 2, Array, false ],                  // BOOL_VEC2
    0x8B58: [ TYPE_3IV, 3, Array, false ],                  // BOOL_VEC3
    0x8B59: [ TYPE_4IV, 4, Array, false ]                   // BOOL_VEC4

};

export function GetUniform (gl: WebGL2RenderingContext, type: number): IUniformData | null
{
    const uniformData = glConstMap[type];

    if (uniformData)
    {
        let name = 'uniform';

        if (uniformData[3])
        {
            name = name.concat('Matrix');
        }

        return {
            glFunc: gl[name + uniformData[0]],
            size: uniformData[1],
            cacheClass: (size) => new uniformData[2](size)
        };
    }

    return null;
}
