export interface ITexture
{
    internalFormat?: GLenum;
    format?: GLenum;
    type?: GLenum;
    minFilter?: GLenum;
    magFilter?: GLenum;
    wrapS?: GLenum;
    wrapT?: GLenum;
    wrapR?: GLenum;
    compareMode?: GLenum;
    compareFunc?: GLenum;
    minLOD?: number;
    maxLOD?: number;
    baseLevel?: number;
    maxLevel?: number;
    maxAnisotropy?: number;
    flipY?: boolean;
    premultiplyAlpha?: boolean;
    compressed?: boolean;
}
