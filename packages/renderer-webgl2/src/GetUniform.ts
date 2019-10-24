import { IUniformData } from './IUniformData';

const FV: string = 'fv';

const SAMPLER_TYPE = [ '1i', 1, Int32Array, false ];

const glConstMap = {

    0x8B5E: SAMPLER_TYPE,                                // SAMPLER_2D
    0x8DC1: SAMPLER_TYPE,                                // SAMPLER_2D_ARRAY
    0x8B62: SAMPLER_TYPE,                                // SAMPLER_2D_SHADOW
    0x8DC4: SAMPLER_TYPE,                                // SAMPLER_2D_ARRAY_SHADOW
    0x8DCA: SAMPLER_TYPE,                                // INT_SAMPLER_2D
    0x8DCF: SAMPLER_TYPE,                                // INT_SAMPLER_2D_ARRAY
    0x8DD2: SAMPLER_TYPE,                                // UNSIGNED_INT_SAMPLER_2D
    0x8DD7: SAMPLER_TYPE,                                // UNSIGNED_INT_SAMPLER_2D_ARRAY
    0x8B60: SAMPLER_TYPE,                                // SAMPLER_CUBE
    0x8DCC: SAMPLER_TYPE,                                // INT_SAMPLER_CUBE
    0x8DD4: SAMPLER_TYPE,                                // UNSIGNED_INT_SAMPLER_CUBE
    0x8DC5: SAMPLER_TYPE,                                // SAMPLER_CUBE_SHADOW
    0x8B5F: SAMPLER_TYPE,                                // SAMPLER_3D
    0x8DCB: SAMPLER_TYPE,                                // INT_SAMPLER_3D
    0x8DD3: SAMPLER_TYPE,                                // UNSIGNED_INT_SAMPLER_3D

    0x1406: [ '1f', 1, Float32Array, false ],            // FLOAT
    0x8B50: [ '2f', 2, Float32Array, false ],            // FLOAT_VEC2
    0x8B51: [ '3f', 3, Float32Array, false ],            // FLOAT_VEC3
    0x8B52: [ '4f', 4, Float32Array, false ],            // FLOAT_VEC4
    0x1404: [ '1i', 1, Int32Array, false ],              // INT
    0x8B53: [ '2i', 2, Int32Array, false ],              // INT_VEC2
    0x8B54: [ '3i', 3, Int32Array, false ],              // INT_VEC3
    0x8B55: [ '4i', 4, Int32Array, false ],              // INT_VEC4
    0x1405: [ '1ui', 1, Uint32Array, false ],            // UNSIGNED_INT
    0x8DC6: [ '2ui', 2, Uint32Array, false ],            // UNSIGNED_INT_VEC2
    0x8DC7: [ '3ui', 3, Uint32Array, false ],            // UNSIGNED_INT_VEC3
    0x8DC8: [ '4ui', 4, Uint32Array, false ],            // UNSIGNED_INT_VEC4

    0x8B5A: [ '2' + FV, 4, Float32Array, true ],         // FLOAT_MAT2
    0x8B5B: [ '3' + FV, 9, Float32Array, true ],         // FLOAT_MAT3
    0x8B5C: [ '4' + FV, 16, Float32Array, true ],        // FLOAT_MAT4
    0x8B65: [ '2x3' + FV, 6, Float32Array, true],        // FLOAT_MAT2x3
    0x8B66: [ '2x4' + FV, 8, Float32Array, true],        // FLOAT_MAT2x4
    0x8B67: [ '3x2' + FV, 6, Float32Array, true],        // FLOAT_MAT3x2
    0x8B68: [ '3x4' + FV, 12, Float32Array, true],       // FLOAT_MAT3x4
    0x8B69: [ '4x2' + FV, 8, Float32Array, true],        // FLOAT_MAT4x2
    0x8B6A: [ '4x3' + FV, 12, Float32Array, true],       // FLOAT_MAT4x3

    0x8B56: [ '1iv', 1, Array, false ],                  // BOOL
    0x8B57: [ '2iv', 2, Array, false ],                  // BOOL_VEC2
    0x8B58: [ '3iv', 3, Array, false ],                  // BOOL_VEC3
    0x8B59: [ '4iv', 4, Array, false ]                   // BOOL_VEC4

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
