export class Query {
    constructor(gl, target) {
        this.gl = gl;
        this.query = null;
        this.target = target;
        this.active = false;
        this.result = null;
        this.restore();
    }
    restore() {
        this.query = this.gl.createQuery();
        this.active = false;
        this.result = null;
        return this;
    }
    begin() {
        if (!this.active) {
            this.gl.beginQuery(this.target, this.query);
            this.result = null;
        }
        return this;
    }
    end() {
        if (!this.active) {
            this.gl.endQuery(this.target);
            this.active = true;
        }
        return this;
    }
    ready() {
        const gl = this.gl;
        if (this.active && gl.getQueryParameter(this.query, gl.QUERY_RESULT_AVAILABLE)) {
            this.active = false;
            this.result = gl.getQueryParameter(this.query, gl.QUERY_RESULT);
            return true;
        }
        return false;
    }
    delete() {
        if (this.query) {
            this.gl.deleteQuery(this.query);
            this.query = null;
        }
        return this;
    }
}
//# sourceMappingURL=Query.js.map