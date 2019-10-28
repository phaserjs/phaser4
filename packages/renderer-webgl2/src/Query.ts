export class Query
{
    gl: WebGL2RenderingContext;
    query: WebGLQuery;
    target: GLenum;
    active: boolean;
    result: any;

    constructor (gl: WebGL2RenderingContext, target: GLenum)
    {
        this.gl = gl;
        this.query = null;
        this.target = target;
        this.active = false;
        this.result = null;

        this.restore();
    }

    restore (): Query
    {
        this.query = this.gl.createQuery();

        this.active = false;
        this.result = null;

        return this;
    }

    begin (): Query
    {
        if (!this.active)
        {
            this.gl.beginQuery(this.target, this.query);
            this.result = null;
        }

        return this;
    }

    end (): Query
    {
        if (!this.active)
        {
            this.gl.endQuery(this.target);
            this.active = true;
        }

        return this;
    }

    ready (): boolean
    {
        const gl = this.gl;

        if (this.active && gl.getQueryParameter(this.query, gl.QUERY_RESULT_AVAILABLE))
        {
            this.active = false;

            this.result = gl.getQueryParameter(this.query, gl.QUERY_RESULT);

            return true;
        }

        return false;
    }

    delete (): Query
    {
        if (this.query)
        {
            this.gl.deleteQuery(this.query);

            this.query = null;
        }

        return this;
    }
}
