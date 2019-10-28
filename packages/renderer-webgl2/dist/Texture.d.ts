import { IState } from './IState';
import { ITexture } from './ITexture';
export declare class Texture {
    gl: WebGL2RenderingContext;
    appState: IState;
    binding: GLenum;
    texture: WebGLTexture;
    width: number;
    height: number;
    depth: number;
    is3D: boolean;
    compressed: boolean;
    internalFormat: GLenum;
    format: GLenum;
    type: GLenum;
    currentUnit: number;
    minFilter: GLenum;
    magFilter: GLenum;
    wrapS: GLenum;
    wrapT: GLenum;
    wrapR: GLenum;
    compareMode: GLenum;
    compareFunc: GLenum;
    minLOD: GLenum;
    maxLOD: GLenum;
    baseLevel: number;
    maxLevel: number;
    maxAnisotropy: number;
    flipY: boolean;
    premultiplyAlpha: boolean;
    mipmaps: boolean;
    constructor(gl: WebGL2RenderingContext, appState: IState, binding: GLenum, image?: TexImageSource, width?: number, height?: number, depth?: number, is3D?: boolean, options?: ITexture);
    restore(image: TexImageSource | TexImageSource[]): Texture;
    resize(width: number, height: number, depth?: number): Texture;
    data(data: TexImageSource | TexImageSource[] | ArrayBufferView | ArrayBufferView[]): Texture;
    delete(): Texture;
    bind(unit: number): Texture;
}
//# sourceMappingURL=Texture.d.ts.map