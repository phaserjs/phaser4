export class Vec2
{
    x: number;
    y: number;

    constructor (x: number = 0, y: number = 0)
    {
        this.x = x;
        this.y = y;
    }

    fromValues (x: number, y: number): Vec2
    {
        this.x = x;
        this.y = y;

        return this;
    }
    
}
