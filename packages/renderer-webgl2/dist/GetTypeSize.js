const TYPE_SIZE = {
    0x1400: 1,
    0x1401: 1,
    0x1402: 2,
    0x1403: 2,
    0x1404: 4,
    0x1405: 4,
    0x1406: 4 // FLOAT
};
export function GetTypeSize(type) {
    return TYPE_SIZE[type];
}
//# sourceMappingURL=GetTypeSize.js.map