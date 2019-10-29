const FV = 'fv';
const SAMPLER_TYPE = ['1i', 1, Int32Array, false];
const glConstMap = {
    0x8B5E: SAMPLER_TYPE,
    0x8DC1: SAMPLER_TYPE,
    0x8B62: SAMPLER_TYPE,
    0x8DC4: SAMPLER_TYPE,
    0x8DCA: SAMPLER_TYPE,
    0x8DCF: SAMPLER_TYPE,
    0x8DD2: SAMPLER_TYPE,
    0x8DD7: SAMPLER_TYPE,
    0x8B60: SAMPLER_TYPE,
    0x8DCC: SAMPLER_TYPE,
    0x8DD4: SAMPLER_TYPE,
    0x8DC5: SAMPLER_TYPE,
    0x8B5F: SAMPLER_TYPE,
    0x8DCB: SAMPLER_TYPE,
    0x8DD3: SAMPLER_TYPE,
    0x1406: ['1f', 1, Float32Array, false, 1, 0x1406, 1],
    0x8B50: ['2f', 2, Float32Array, false, 2, 0x1406, 2],
    0x8B51: ['3f', 3, Float32Array, false, 4, 0x1406, 4],
    0x8B52: ['4f', 4, Float32Array, false, 4, 0x1406, 4],
    0x1404: ['1i', 1, Int32Array, false, 1, 0x1404, 1],
    0x8B53: ['2i', 2, Int32Array, false, 2, 0x1404, 2],
    0x8B54: ['3i', 3, Int32Array, false, 4, 0x1404, 4],
    0x8B55: ['4i', 4, Int32Array, false, 4, 0x1404, 4],
    0x1405: ['1ui', 1, Uint32Array, false, 1, 0x1405, 1],
    0x8DC6: ['2ui', 2, Uint32Array, false, 2, 0x1405, 2],
    0x8DC7: ['3ui', 3, Uint32Array, false, 4, 0x1405, 4],
    0x8DC8: ['4ui', 4, Uint32Array, false, 4, 0x1405, 4],
    0x8B5A: ['2' + FV, 4, Float32Array, true, 4, 0x1406, 8],
    0x8B5B: ['3' + FV, 9, Float32Array, true, 4, 0x1406, 12],
    0x8B5C: ['4' + FV, 16, Float32Array, true, 4, 0x1406, 16],
    0x8B65: ['2x3' + FV, 6, Float32Array, true, 4, 0x1406, 8],
    0x8B66: ['2x4' + FV, 8, Float32Array, true, 4, 0x1406, 8],
    0x8B67: ['3x2' + FV, 6, Float32Array, true, 4, 0x1406, 12],
    0x8B68: ['3x4' + FV, 12, Float32Array, true, 4, 0x1406, 12],
    0x8B69: ['4x2' + FV, 8, Float32Array, true, 4, 0x1406, 16],
    0x8B6A: ['4x3' + FV, 12, Float32Array, true, 4, 0x1406, 16],
    0x8B56: ['1iv', 1, Array, false, 1, 0x1406, 1],
    0x8B57: ['2iv', 2, Array, false, 2, 0x1406, 2],
    0x8B58: ['3iv', 3, Array, false, 4, 0x1406, 4],
    0x8B59: ['4iv', 4, Array, false, 4, 0x1406, 4] // BOOL_VEC4
};
export function GetUniformSize(type) {
    const uniformData = glConstMap[type];
    if (uniformData) {
        return {
            size: uniformData[4],
            uboType: uniformData[5],
            stride: uniformData[6]
        };
    }
    return null;
}
export function GetUniform(gl, type) {
    const uniformData = glConstMap[type];
    if (uniformData) {
        let name = 'uniform';
        if (uniformData[3]) {
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
//# sourceMappingURL=GetUniform.js.map