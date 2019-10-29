export function enableScissorTest (gl: WebGL2RenderingContext): void
{
    gl.enable(gl.SCISSOR_TEST);
}

export function disableScissorTest (gl: WebGL2RenderingContext): void
{
    gl.disable(gl.SCISSOR_TEST);
}

export function setScissor (gl: WebGL2RenderingContext, x: number, y: number, width: number, height: number, drawingBufferHeight?: number): void
{
    if (!drawingBufferHeight)
    {
        drawingBufferHeight = gl.drawingBufferHeight;
    }

    gl.scissor(x, (drawingBufferHeight - y - height), width, height);
}
