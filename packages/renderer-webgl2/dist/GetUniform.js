const TYPE_1I = '1i';
const TYPE_2I = '2i';
const TYPE_3I = '3i';
const TYPE_4I = '4i';
const TYPE_1F = '1f';
const TYPE_2F = '2f';
const TYPE_3F = '3f';
const TYPE_4F = '4f';
const TYPE_1UI = '1ui';
const TYPE_2UI = '2ui';
const TYPE_3UI = '3ui';
const TYPE_4UI = '4ui';
const TYPE_1IV = '1iv';
const TYPE_2IV = '2iv';
const TYPE_3IV = '3iv';
const TYPE_4IV = '4iv';
const TYPE_FV = 'fv';
const SAMPLER_TYPE = [TYPE_1I, 1, Int32Array, false];
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
    0x1406: [TYPE_1F, 1, Float32Array, false],
    0x8B50: [TYPE_2F, 2, Float32Array, false],
    0x8B51: [TYPE_3F, 3, Float32Array, false],
    0x8B52: [TYPE_4F, 4, Float32Array, false],
    0x1404: [TYPE_1I, 1, Int32Array, false],
    0x8B53: [TYPE_2I, 2, Int32Array, false],
    0x8B54: [TYPE_3I, 3, Int32Array, false],
    0x8B55: [TYPE_4I, 4, Int32Array, false],
    0x1405: [TYPE_1UI, 1, Uint32Array, false],
    0x8DC6: [TYPE_2UI, 2, Uint32Array, false],
    0x8DC7: [TYPE_3UI, 3, Uint32Array, false],
    0x8DC8: [TYPE_4UI, 4, Uint32Array, false],
    0x8B5A: ['2' + TYPE_FV, 4, Float32Array, true],
    0x8B5B: ['3' + TYPE_FV, 9, Float32Array, true],
    0x8B5C: ['4' + TYPE_FV, 16, Float32Array, true],
    0x8B65: ['2x3' + TYPE_FV, 6, Float32Array, true],
    0x8B66: ['2x4' + TYPE_FV, 8, Float32Array, true],
    0x8B67: ['3x2' + TYPE_FV, 6, Float32Array, true],
    0x8B68: ['3x4' + TYPE_FV, 12, Float32Array, true],
    0x8B69: ['4x2' + TYPE_FV, 8, Float32Array, true],
    0x8B6A: ['4x3' + TYPE_FV, 12, Float32Array, true],
    0x8B56: [TYPE_1IV, 1, Array, false],
    0x8B57: [TYPE_2IV, 2, Array, false],
    0x8B58: [TYPE_3IV, 3, Array, false],
    0x8B59: [TYPE_4IV, 4, Array, false] // BOOL_VEC4
};
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