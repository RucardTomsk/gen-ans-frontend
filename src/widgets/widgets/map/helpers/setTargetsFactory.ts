import {EditMode} from "../models/EditMode.enum.ts";
import MapTargets from "../models/MapTargets.interface.ts";
import {Point} from "../models/Point.interface.ts";
import React from "react";
import {PositionDto} from "../../../../services/mapStudent/models/PositionDto.ts";

type setTargetsDispatch = React.Dispatch<React.SetStateAction<MapTargets>>;
interface ISetTarget {
    setTargets(targets: MapTargets, newPoint: Point, setTargets: setTargetsDispatch): void
}

export function setTargetsFactory(editMode: EditMode) {
    switch (editMode) {
        case EditMode.Point:
            return new SetPointTarget()
        case EditMode.Line:
            return new SetLineTarget()
        case EditMode.Polygon:
            return new SetPolygonTarget()
        default:
            return;
    }
}

class SetPointTarget implements ISetTarget {
    public setTargets(targets: MapTargets, newPoint: Point, setTargets: setTargetsDispatch) {
        setTargets({...targets, coordinates: [{...newPoint}]})
    }
}

class SetLineTarget implements ISetTarget {

    public setTargets(targets: MapTargets, newPoint: Point, setTargets: setTargetsDispatch) {
        setTargets({
            ...targets,
            coordinates: [...targets.coordinates, {...newPoint}]
        })
    }

    private compareDistances(point1: PositionDto, point2: PositionDto, commonPoint: PositionDto) {
        if (!point1 || !point2) return true;
        return this.findDistanceBetweenPoints(point1, commonPoint) > this.findDistanceBetweenPoints(point2, commonPoint)
    }
    private findDistanceBetweenPoints(point1: PositionDto, point2: PositionDto) {
        return Math.sqrt(point1.x * point2.x + point1.y * point2.y);
    }
}

class SetPolygonTarget implements ISetTarget {
    public setTargets(targets: MapTargets, newPoint: Point, setTargets: setTargetsDispatch) {
        setTargets({...targets, coordinates: [...targets.coordinates, {...newPoint}]})
    }
}