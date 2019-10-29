export function enableStencilTest(gl) {
    gl.enable(gl.STENCIL_TEST);
}
export function disableStencilTest(gl) {
    gl.disable(gl.STENCIL_TEST);
}
export function setStencilMask(gl, mask) {
    gl.stencilMask(mask);
}
export function setStencilMaskSeparate(gl, face, mask) {
    gl.stencilMaskSeparate(face, mask);
}
export function setStencilFunc(gl, func, ref, mask) {
    gl.stencilFunc(func, ref, mask);
}
export function setStencilFuncSeparate(gl, face, func, ref, mask) {
    gl.stencilFuncSeparate(face, func, ref, mask);
}
export function setStencilOp(gl, fail, zfail, zpass) {
    gl.stencilOp(fail, zfail, zpass);
}
export function setStencilOpSeparate(gl, face, fail, zfail, zpass) {
    gl.stencilOpSeparate(face, fail, zfail, zpass);
}
//# sourceMappingURL=Stencil.js.map