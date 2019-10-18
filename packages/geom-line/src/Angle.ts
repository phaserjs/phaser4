import { ILine } from './ILine';

export function Angle <T extends ILine> (line: T): number
{
    return Math.atan2(line.y2 - line.y1, line.x2 - line.x1);
}
