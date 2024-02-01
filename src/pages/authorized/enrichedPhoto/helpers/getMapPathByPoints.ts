import {Point} from "../../../../services/segmentation/models/Point.ts";


export function getMapPathByPoints(points: Point[]): string {
    if (!points.length) return "";

    let string = `M${points[0].cord_x} ${points[0].cord_y}`;

    if (points.length === 1) return string

    points.forEach((it, index) => {
        if (index === 0) return
        string += ` L${it.cord_x} ${it.cord_y}`
    })

    string += " Z" ;

    return string;
}