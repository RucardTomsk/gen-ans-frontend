import React from "react";
import TargetPoint from "./TargetPoint.tsx";
import {useInteractiveMap} from "../hooks/useInteractiveMap.ts";
import {getMapPathByPoints} from "../../helpers/getMapPathByPoints.ts";

const MapTargets: React.FC = () => {

    const {targets, zoomK, editMode} = useInteractiveMap();

    return (
        <>
            <path
                d={getMapPathByPoints(targets.coordinates)}
                stroke={"rgba(255, 0, 0, 0.6)"}
                fill={"rgba(255, 0, 0, 0.4)"}
                strokeWidth={0.25}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
            />
            <TargetPoint
                x={targets.coordinates[targets.coordinates.length - 1]?.x}
                y={targets.coordinates[targets.coordinates.length - 1]?.y}
                zoomK={zoomK}
            />
        </>
    )
}

export default MapTargets