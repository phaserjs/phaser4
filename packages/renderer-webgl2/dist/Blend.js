export function enableBlend(gl) {
    gl.enable(gl.BLEND);
}
export function disableBlend(gl) {
    gl.disable(gl.BLEND);
}
export function setBlendFunc(gl, sfactor, dfactor, equation) {
    gl.blendFunc(sfactor, dfactor);
    if (equation) {
        gl.blendEquation(equation);
    }
}
export function setBlendFuncSeparate(gl, srcRGB, dstRGB, srcAlpha, dstAlpha) {
    gl.blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
}
export function setBlendEquation(gl, mode) {
    gl.blendEquation(mode);
}
export function setBlendModeNormal(gl) {
    setBlendFunc(gl, gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.FUNC_ADD);
}
export function setBlendModeAdd(gl) {
    setBlendFunc(gl, gl.ONE, gl.DST_ALPHA, gl.FUNC_ADD);
}
export function setBlendModeMultiply(gl) {
    setBlendFunc(gl, gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA, gl.FUNC_ADD);
}
export function setBlendModeScreen(gl) {
    setBlendFunc(gl, gl.ONE, gl.ONE_MINUS_SRC_COLOR, gl.FUNC_ADD);
}
export function setBlendModeErase(gl) {
    setBlendFunc(gl, gl.ZERO, gl.ONE_MINUS_SRC_ALPHA, gl.FUNC_REVERSE_SUBTRACT);
}
//# sourceMappingURL=Blend.js.map