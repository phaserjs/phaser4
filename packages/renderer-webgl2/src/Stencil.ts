export function enableStencilTest (gl: WebGL2RenderingContext): void
{
    gl.enable(gl.STENCIL_TEST);
}

export function disableStencilTest (gl: WebGL2RenderingContext): void
{
    gl.disable(gl.STENCIL_TEST);
}

export function setStencilMask (gl: WebGL2RenderingContext, mask: number): void
{
    gl.stencilMask(mask);
}

export function setStencilMaskSeparate (gl: WebGL2RenderingContext, face: GLenum, mask: number): void
{
    gl.stencilMaskSeparate(face, mask);
}

export function setStencilFunc (gl: WebGL2RenderingContext, func: GLenum, ref: number, mask: GLenum): void
{
    gl.stencilFunc(func, ref, mask);
}

export function setStencilFuncSeparate (gl: WebGL2RenderingContext, face: GLenum, func: GLenum, ref: number, mask: GLenum): void
{
    gl.stencilFuncSeparate(face, func, ref, mask);
}

export function setStencilOp (gl: WebGL2RenderingContext, fail: GLenum, zfail: GLenum, zpass: GLenum): void
{
    gl.stencilOp(fail, zfail, zpass);
}

export function setStencilOpSeparate (gl: WebGL2RenderingContext, face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void
{
    gl.stencilOpSeparate(face, fail, zfail, zpass);
}
