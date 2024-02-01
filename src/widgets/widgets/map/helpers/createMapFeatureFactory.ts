import {EditMode} from "../models/EditMode.enum.ts";
import MapTargets from "../models/MapTargets.interface.ts";
import React from "react";
import MapFeatures from "../models/MapFeatures.interface.ts";
import SelectedAvailableFeatures from "../models/SelectedFeatures.interface.ts";
import SelectedFeatures from "../models/SelectedFeatures.interface.ts";
import {MapFeatureCreateDto} from "../../../../services/mapStudent/models/MapFeatureCreateDto.ts";

type setFeaturesDispatch = React.Dispatch<React.SetStateAction<MapFeatures>>;
interface ICreateFeature {
    create(targets: MapTargets, selectedFeatures: SelectedFeatures, requestFn: (data: MapFeatureCreateDto) => void): void
}

export function createMapFeatureFactory(editMode: EditMode) {
    switch (editMode) {
        case EditMode.Point:
            return new CreatePoint()
        case EditMode.Line:
            return new CreateLine()
        case EditMode.Polygon:
            return new CreatePolygon()
        default:
            return;
    }
}

class CreatePoint implements ICreateFeature {
    create(targets: MapTargets, selectedFeatures: SelectedFeatures, requestFn: (data: MapFeatureCreateDto) => void ) {
        targets.coordinates &&
        requestFn({...targets, featureTypeId: selectedFeatures.pointId});
    }
}

class CreateLine implements ICreateFeature {
    create(targets: MapTargets, selectedFeatures: SelectedFeatures, requestFn: (data: MapFeatureCreateDto) => void ) {
        targets.coordinates &&
        requestFn({...targets, featureTypeId: selectedFeatures.lineStringId});
    }
}

class CreatePolygon implements ICreateFeature {
    create(targets: MapTargets, selectedFeatures: SelectedFeatures, requestFn: (data: MapFeatureCreateDto) => void ) {
        targets.coordinates &&
        requestFn({
            ...targets,
            coordinates: [...targets.coordinates, {...targets.coordinates[0]}],
            featureTypeId: selectedFeatures.polygonId
        });
    }
}