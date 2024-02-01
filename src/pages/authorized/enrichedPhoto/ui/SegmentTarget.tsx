import React from "react";
import TargetPoint from "./TargetPoint.tsx";
import {Point} from "../../../../services/segmentation/models/Point.ts";
import {getMapPathByPoints} from "../helpers/getMapPathByPoints.ts";

interface Props {
    target: Point[],
    zoomK: number
}
const SegmentTarget = (props: Props) => {

    const {target, zoomK} = props;

    return (
        <>
            <path
                d={getMapPathByPoints(target)}
                stroke={"rgba(255, 0, 0, 0.6)"}
                fill={"rgba(255, 0, 0, 0.4)"}
                strokeWidth={0.25}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
            />
            <TargetPoint
                x={target[target.length - 1]?.cord_x}
                y={target[target.length - 1]?.cord_y}
                zoomK={zoomK}
            />
        </>
    )
}

export default SegmentTarget