export class Line
{
    x1: number;
    y1: number;

    x2: number;
    y2: number;

    constructor (x1: number = 0, y1: number = 0, x2: number = 0, y2: number = 0)
    {
        this.setTo(x1, y1, x2, y2);
    }

    setTo (x1: number = 0, y1: number = 0, x2: number = 0, y2: number = 0): Line
    {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;

        return this;
    }

    get left (): number
    {
        return Math.min(this.x1, this.x2);
    }

    set left (value: number)
    {
        if (this.x1 <= this.x2)
        {
            this.x1 = value;
        }
        else
        {
            this.x2 = value;
        }
    }

    get right (): number
    {
        return Math.max(this.x1, this.x2);
    }

    set right (value: number)
    {
        if (this.x1 > this.x2)
        {
            this.x1 = value;
        }
        else
        {
            this.x2 = value;
        }
    }

    get top (): number
    {
        return Math.min(this.y1, this.y2);
    }

    set top (value: number)
    {
        if (this.y1 <= this.y2)
        {
            this.y1 = value;
        }
        else
        {
            this.y2 = value;
        }
    }

    get bottom (): number
    {
        return Math.max(this.y1, this.y2);
    }

    set bottom (value: number)
    {
        if (this.y1 > this.y2)
        {
            this.y1 = value;
        }
        else
        {
            this.y2 = value;
        }
    }

}
