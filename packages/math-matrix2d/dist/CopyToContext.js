// Copy the values from this Matrix to the given Canvas Rendering Context.
// This will use the Context.transform method.
export function CopyToContext(src, context) {
    context.transform(src.a, src.b, src.c, src.d, src.tx, src.ty);
    return context;
}
//# sourceMappingURL=CopyToContext.js.map