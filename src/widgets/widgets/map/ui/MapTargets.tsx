import React from "react";
import TargetPoint from "./TargetPoint.tsx";
import {useInteractiveMap} from "../hooks/useInteractiveMap.ts";
import {getMapPathByPoints} from "../helpers/getMapPathByPoints.ts";
import {EditMode} from "../models/EditMode.enum.ts";

const MapTargets: React.FC = () => {

    const {targets, zoomK, editMode} = useInteractiveMap();

    return (
        <>
            {
                (editMode === EditMode.Line || editMode === EditMode.Polygon) &&
                <>
                    <path
                        d={getMapPathByPoints(targets.coordinates)}
                        stroke={"rgba(255, 0, 0, 0.6)"}
                        fill={editMode === EditMode.Polygon ? "rgba(255, 0, 0, 0.4)" : "none"}
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

            }
            {
                editMode === EditMode.Point &&
                <TargetPoint
                    x={targets.coordinates[0]?.x}
                    y={targets.coordinates[0]?.y}
                    size={20}
                    withIcon={true}
                    zoomK={zoomK}
                />
            }
        </>
    )
}

export default MapTargets