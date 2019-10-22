
export function GetUniformFuncName (gl: WebGL2RenderingContext, type: number): string
{
    let result: string = '';
    let resultMatrix: string = '';

    switch (type)
    {
        case gl.BOOL:
        case gl.INT:
        case gl.SAMPLER_2D:
        case gl.INT_SAMPLER_2D:
        case gl.UNSIGNED_INT_SAMPLER_2D:
        case gl.SAMPLER_2D_SHADOW:
        case gl.SAMPLER_2D_ARRAY:
        case gl.INT_SAMPLER_2D_ARRAY:
        case gl.UNSIGNED_INT_SAMPLER_2D_ARRAY:
        case gl.SAMPLER_2D_ARRAY_SHADOW:
        case gl.SAMPLER_CUBE:
        case gl.INT_SAMPLER_CUBE:
        case gl.UNSIGNED_INT_SAMPLER_CUBE:
        case gl.SAMPLER_CUBE_SHADOW:
        case gl.SAMPLER_3D:
        case gl.INT_SAMPLER_3D:
        case gl.UNSIGNED_INT_SAMPLER_3D:
            result = '1i';
            break;

        case gl.FLOAT:
            result = '1f';
            break;

        case gl.FLOAT_VEC2:
            result = '2f';
            break;

        case gl.FLOAT_VEC3:
            result = '3f';
            break;

        case gl.FLOAT_VEC4:
            result = '4f';
            break;

        case gl.INT_VEC2:
        case gl.BOOL_VEC2:
            result = '2i';
            break;

        case gl.INT_VEC3:
        case gl.BOOL_VEC3:
            result = '3i';
            break;

        case gl.INT_VEC4:
        case gl.BOOL_VEC4:
            result = '4i';
            break;

        case gl.UNSIGNED_INT:
            result = '1ui';
            break;

        case gl.UNSIGNED_INT_VEC2:
            result = '2ui';
            break;

        case gl.UNSIGNED_INT_VEC3:
            result = '3ui';
            break;

        case gl.UNSIGNED_INT_VEC4:
            result = '4ui';
            break;

        case gl.FLOAT_MAT2:
            resultMatrix = '2fv';
            break;

        case gl.FLOAT_MAT3:
            resultMatrix = '3fv';
            break;

        case gl.FLOAT_MAT4:
            resultMatrix = '4fv';
            break;

        case gl.FLOAT_MAT2x3:
            resultMatrix = '2x3fv';
            break;

        case gl.FLOAT_MAT2x4:
            resultMatrix = '2x4fv';
            break;

        case gl.FLOAT_MAT3x2:
            resultMatrix = '3x2fv';
            break;

        case gl.FLOAT_MAT3x4:
            resultMatrix = '3x4fv';
            break;

        case gl.FLOAT_MAT4x2:
            resultMatrix = '4x2fv';
            break;

        case gl.FLOAT_MAT4x3:
            resultMatrix = '4x3fv';
            break;
    }

    if (resultMatrix !== '')
    {
        return 'uniformMatrix' + resultMatrix;
    }
    else
    {
        return 'uniform' + result;
    }
}
