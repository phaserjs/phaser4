//  Adds the src Matrix to the target Matrix and returns the target
export function Add(target, src) {
    target.a += src.a;
    target.b += src.b;
    target.c += src.c;
    target.d += src.d;
    target.tx += src.tx;
    target.ty += src.ty;
    return target;
}
//# sourceMappingURL=Add.js.map