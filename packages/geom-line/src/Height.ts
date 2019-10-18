import { ILine } from './ILine';

export function Height <T extends ILine> (line: T): number
{
    return Math.abs(line.y1 - line.y2);
}
