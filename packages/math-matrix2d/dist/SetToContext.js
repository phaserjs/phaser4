// Copy the values from this Matrix to the given Canvas Rendering Context.
// This will use the Context.setTransform method.
export function SetToContext(src, context) {
    context.setTransform(src.a, src.b, src.c, src.d, src.tx, src.ty);
    return context;
}
//# sourceMappingURL=SetToContext.js.map