export function enableBlend (gl: WebGL2RenderingContext): void
{
    gl.enable(gl.BLEND);
}

export function disableBlend (gl: WebGL2RenderingContext): void
{
    gl.disable(gl.BLEND);
}

export function setBlendFunc (gl: WebGL2RenderingContext, sfactor: GLenum, dfactor: GLenum, equation?: GLenum): void
{
    gl.blendFunc(sfactor, dfactor);

    if (equation)
    {
        gl.blendEquation(equation);
    }
}

export function setBlendFuncSeparate (gl: WebGL2RenderingContext, srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void
{
    gl.blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
}

export function setBlendEquation (gl: WebGL2RenderingContext, mode: GLenum): void
{
    gl.blendEquation(mode);
}

export function setBlendModeNormal (gl: WebGL2RenderingContext): void
{
    setBlendFunc(gl, gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.FUNC_ADD);
}

export function setBlendModeAdd (gl: WebGL2RenderingContext): void
{
    setBlendFunc(gl, gl.ONE, gl.DST_ALPHA, gl.FUNC_ADD);
}

export function setBlendModeMultiply (gl: WebGL2RenderingContext): void
{
    setBlendFunc(gl, gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA, gl.FUNC_ADD);
}

export function setBlendModeScreen (gl: WebGL2RenderingContext): void
{
    setBlendFunc(gl, gl.ONE, gl.ONE_MINUS_SRC_COLOR, gl.FUNC_ADD);
}

export function setBlendModeErase (gl: WebGL2RenderingContext): void
{
    setBlendFunc(gl, gl.ZERO, gl.ONE_MINUS_SRC_ALPHA, gl.FUNC_REVERSE_SUBTRACT);
}
