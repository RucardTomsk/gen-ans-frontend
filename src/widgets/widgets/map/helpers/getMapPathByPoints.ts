import {Point} from "../models/Point.interface.ts";

export function getMapPathByPoints(points: Point[], type: "line" | "polygon" = "line"): string {
    if (!points.length) return "";

    let string = `M${points[0].x} ${points[0].y}`;

    if (points.length === 1) return string

    points.forEach((it, index) => {
        if (index === 0) return
        string += ` L${it.x} ${it.y}`
    })

    if (type === "polygon") string += " Z" ;

    return string;
}