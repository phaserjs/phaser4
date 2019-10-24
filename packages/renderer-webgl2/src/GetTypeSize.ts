const TYPE_SIZE = {
    0x1400: 1, // BYTE
    0x1401: 1, // UNSIGNED_BYTED
    0x1402: 2, // SHORT
    0x1403: 2, // UNSIGNED_SHORT
    0x1404: 4, // INT
    0x1405: 4, // UNSIGNED_INT
    0x1406: 4  // FLOAT
};

export function GetTypeSize (type: number): number
{
    return TYPE_SIZE[type];
}
