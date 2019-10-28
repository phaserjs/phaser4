import { IState } from './IState';
import { ITexture } from './ITexture';

export class Texture
{
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

    constructor (gl: WebGL2RenderingContext, appState: IState, binding: GLenum, image?: TexImageSource, width: number = 0, height: number = 0, depth: number = 0, is3D: boolean = false, options: ITexture = {})
    {
        this.gl = gl;
        this.appState = appState;

        this.binding = binding;
        this.texture = null;

        if (image && image.width)
        {
            width = image.width;
        }

        if (image && image.height)
        {
            height = image.height;
        }

        this.width = width;
        this.height = height;
        this.depth = depth;
        this.is3D = is3D;

        this.compressed = (options.compressed) ? true : false;

        if (this.compressed)
        {
            this.internalFormat = options.internalFormat;
            this.format = this.internalFormat;
            this.type = gl.UNSIGNED_BYTE;
        }
        else
        {
            if (options.internalFormat)
            {
                this.internalFormat = options.internalFormat;
                this.format = options.format;
                this.type = options.type;
            }
            else
            {
                //  Defaults
                this.internalFormat = gl.RGBA8;
                this.format = gl.RGBA;
                this.type = gl.UNSIGNED_BYTE;
            }
        }

        // -1 indicates unbound
        this.currentUnit = -1;

        const {
            minFilter = image ? gl.LINEAR_MIPMAP_NEAREST : gl.NEAREST,
            magFilter = image ? gl.LINEAR : gl.NEAREST,
            wrapS = gl.REPEAT,
            wrapT = gl.REPEAT,
            wrapR = gl.REPEAT,
            compareMode = gl.NONE,
            compareFunc = gl.LEQUAL,
            minLOD = null,
            maxLOD = null,
            baseLevel = null,
            maxLevel = null,
            maxAnisotropy = 1,
            flipY = true,
            premultiplyAlpha = true
        } = options;

        this.minFilter = minFilter;
        this.magFilter = magFilter;

        this.wrapS = wrapS;
        this.wrapT = wrapT;
        this.wrapR = wrapR;

        this.compareMode = compareMode;
        this.compareFunc = compareFunc;

        this.minLOD = minLOD;
        this.maxLOD = maxLOD;

        this.baseLevel = baseLevel;
        this.maxLevel = maxLevel;

        this.maxAnisotropy = Math.min(maxAnisotropy, appState.maxTextureUnits);
        this.flipY = flipY;
        this.premultiplyAlpha = premultiplyAlpha;

        this.mipmaps = (minFilter === gl.LINEAR_MIPMAP_NEAREST || minFilter === gl.LINEAR_MIPMAP_LINEAR);

        this.restore(image);
    }

    restore (image: TexImageSource | TexImageSource[]): Texture
    {
        this.texture = null;

        this.resize(this.width, this.height, this.depth);

        if (image)
        {
            this.data(image);
        }

        return this;
    }

    resize (width: number, height: number, depth: number = 0): Texture
    {
        const gl = this.gl;
        const binding = this.binding;
        let texture = this.texture;

        if (texture && width === this.width && height === this.height && depth === this.depth)
        {
            return this;
        }

        if (texture)
        {
            gl.deleteTexture(texture);
        }

        if (this.currentUnit !== -1)
        {
            this.appState.textures[this.currentUnit] = null;
        }

        texture = gl.createTexture();

        this.texture = texture;

        this.bind(Math.max(this.currentUnit, 0));

        this.width = width;
        this.height = height;
        this.depth = depth;

        gl.texParameteri(binding, gl.TEXTURE_MIN_FILTER, this.minFilter);
        gl.texParameteri(binding, gl.TEXTURE_MAG_FILTER, this.magFilter);
        gl.texParameteri(binding, gl.TEXTURE_WRAP_S, this.wrapS);
        gl.texParameteri(binding, gl.TEXTURE_WRAP_T, this.wrapT);
        gl.texParameteri(binding, gl.TEXTURE_WRAP_R, this.wrapR);
        gl.texParameteri(binding, gl.TEXTURE_COMPARE_FUNC, this.compareFunc);
        gl.texParameteri(binding, gl.TEXTURE_COMPARE_MODE, this.compareMode);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, this.flipY);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
        
        if (this.minLOD !== null)
        {
            gl.texParameterf(binding, gl.TEXTURE_MIN_LOD, this.minLOD);
        }
        
        if (this.maxLOD !== null)
        {
            gl.texParameterf(binding, gl.TEXTURE_MAX_LOD, this.maxLOD);
        }
        
        if (this.baseLevel !== null)
        {
            gl.texParameteri(binding, gl.TEXTURE_BASE_LEVEL, this.baseLevel);
        }
        
        if (this.maxLevel !== null)
        {
            gl.texParameteri(binding, gl.TEXTURE_MAX_LEVEL, this.maxLevel);
        }
        
        if (this.maxAnisotropy > 1)
        {
            gl.texParameteri(binding, gl[0x84FE], this.maxAnisotropy);
        }

        let levels: number = 1;

        if (this.is3D)
        {
            if (this.mipmaps)
            {
                levels = Math.floor(Math.log2(Math.max(Math.max(width, height), depth))) + 1;
            }

            gl.texStorage3D(binding, levels, this.internalFormat, width, height, depth);
        }
        else
        {
            if (this.mipmaps)
            {
                levels = Math.floor(Math.log2(Math.max(width, height))) + 1;
            }

            gl.texStorage2D(binding, levels, this.internalFormat, width, height);
        }

        return this;
    }

    data (data: TexImageSource | TexImageSource[] | ArrayBufferView | ArrayBufferView[]): Texture
    {
        const gl = this.gl;
        const binding = this.binding;
        const source = (Array.isArray(data)) ? data : [ data ];

        let width: number = this.width;
        let height: number = this.height;
        let depth: number = this.depth;
        const format = this.format;
        const type = this.type;
        const is3D: boolean = this.is3D;
        const numLevels: number = (this.mipmaps) ? source.length : 1;
        const generateMipmaps: boolean = (this.mipmaps && source.length === 1);

        let i: number;

        this.bind(Math.max(this.currentUnit, 0));

        if (this.compressed)
        {
            if (is3D)
            {
                for (i = 0; i < numLevels; i++)
                {
                    gl.compressedTexSubImage3D(binding, i, 0, 0, 0, width, height, depth, format, source[i] as ArrayBufferView);

                    // tslint:disable-next-line: no-bitwise
                    width = Math.max(width >> 1, 1);

                    // tslint:disable-next-line: no-bitwise
                    height = Math.max(height >> 1, 1);

                    // tslint:disable-next-line: no-bitwise
                    depth = Math.max(depth >> 1, 1);
                }
            }
            else
            {
                for (i = 0; i < numLevels; i++)
                {
                    gl.compressedTexSubImage2D(binding, i, 0, 0, width, height, format, source[i] as ArrayBufferView);

                    // tslint:disable-next-line: no-bitwise
                    width = Math.max(width >> 1, 1);

                    // tslint:disable-next-line: no-bitwise
                    height = Math.max(height >> 1, 1);
                }
            }
        }
        else if (is3D)
        {
            for (i = 0; i < numLevels; i++)
            {
                gl.texSubImage3D(binding, i, 0, 0, 0, width, height, depth, format, type, source[i] as TexImageSource);

                // tslint:disable-next-line: no-bitwise
                width = Math.max(width >> 1, 1);

                // tslint:disable-next-line: no-bitwise
                height = Math.max(height >> 1, 1);

                // tslint:disable-next-line: no-bitwise
                depth = Math.max(depth >> 1, 1);
            }
        }
        else
        {
            for (i = 0; i < numLevels; i++)
            {
                gl.texSubImage2D(binding, i, 0, 0, width, height, format, type, source[i] as TexImageSource);

                // tslint:disable-next-line: no-bitwise
                width = Math.max(width >> 1, 1);

                // tslint:disable-next-line: no-bitwise
                height = Math.max(height >> 1, 1);
            }
        }

        if (generateMipmaps)
        {
            gl.generateMipmap(binding);
        }

        return this;
    }

    delete (): Texture
    {
        const gl = this.gl;
        const appState = this.appState;

        if (this.texture)
        {
            gl.deleteTexture(this.texture);

            this.texture = null;

            if (this.currentUnit !== -1 && appState.textures[this.currentUnit] === this)
            {
                appState.textures[this.currentUnit] = null;

                this.currentUnit = -1;
            }
        }

        return this;
    }

    bind (unit: number): Texture
    {
        const gl = this.gl;
        const appState = this.appState;

        const currentTexture = appState.textures[unit];
        
        if (currentTexture !== this)
        {
            if (currentTexture)
            {
                currentTexture.currentUnit = -1;
            }

            if (this.currentUnit !== -1)
            {
                appState.textures[this.currentUnit] = null;
            }

            gl.activeTexture(gl.TEXTURE0 + unit);
            gl.bindTexture(this.binding, this.texture);

            appState.textures[unit] = this;

            this.currentUnit = unit;
        }

        return this;
    }
}
