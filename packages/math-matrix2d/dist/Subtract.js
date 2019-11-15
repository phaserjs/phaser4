//  Subtracts the src Matrix from the target Matrix and returns the target.
export function Subtract(target, src) {
    target.a -= src.a;
    target.b -= src.b;
    target.c -= src.c;
    target.d -= src.d;
    target.tx -= src.tx;
    target.ty -= src.ty;
    return target;
}
//# sourceMappingURL=Subtract.js.map