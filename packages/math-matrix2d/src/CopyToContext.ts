import { IMatrix2D } from './IMatrix2D';

// Copy the values from this Matrix to the given Canvas Rendering Context.
// This will use the Context.transform method.

export function CopyToContext (src: IMatrix2D, context: CanvasRenderingContext2D): CanvasRenderingContext2D
{
    context.transform(src.a, src.b, src.c, src.d, src.tx, src.ty);

    return context;
}
