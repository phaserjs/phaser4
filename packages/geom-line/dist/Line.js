export class Line {
    constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 0) {
        this.setTo(x1, y1, x2, y2);
    }
    setTo(x1 = 0, y1 = 0, x2 = 0, y2 = 0) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        return this;
    }
    get left() {
        return Math.min(this.x1, this.x2);
    }
    set left(value) {
        if (this.x1 <= this.x2) {
            this.x1 = value;
        }
        else {
            this.x2 = value;
        }
    }
    get right() {
        return Math.max(this.x1, this.x2);
    }
    set right(value) {
        if (this.x1 > this.x2) {
            this.x1 = value;
        }
        else {
            this.x2 = value;
        }
    }
    get top() {
        return Math.min(this.y1, this.y2);
    }
    set top(value) {
        if (this.y1 <= this.y2) {
            this.y1 = value;
        }
        else {
            this.y2 = value;
        }
    }
    get bottom() {
        return Math.max(this.y1, this.y2);
    }
    set bottom(value) {
        if (this.y1 > this.y2) {
            this.y1 = value;
        }
        else {
            this.y2 = value;
        }
    }
}
//# sourceMappingURL=Line.js.map