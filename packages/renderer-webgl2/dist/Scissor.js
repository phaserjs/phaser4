export function enableScissorTest(gl) {
    gl.enable(gl.SCISSOR_TEST);
}
export function disableScissorTest(gl) {
    gl.disable(gl.SCISSOR_TEST);
}
export function setScissor(gl, x, y, width, height, drawingBufferHeight) {
    if (!drawingBufferHeight) {
        drawingBufferHeight = gl.drawingBufferHeight;
    }
    gl.scissor(x, (drawingBufferHeight - y - height), width, height);
}
//# sourceMappingURL=Scissor.js.map