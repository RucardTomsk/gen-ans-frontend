import React, {createContext} from "react";
import {EditMode} from "../models/EditMode.enum.ts";
import SelectedFeature from "../models/SelectedMapFeature.interface.ts";
import MapTargets from "../models/MapTargets.interface.ts";
import AvailableFeatures from "../models/AvailableFeatures.interface.ts";
import SelectedAvailableFeatures from "../models/SelectedFeatures.interface.ts";
import {FeatureTypeCollection} from "../../../../services/featureType/models/FeatureTypeCollection.ts";
import {BaseMapFeatureDto} from "../../../../services/mapStudent/models/BaseMapFeatureDto.ts";
import {StudentMapFeatureDto} from "../../../../services/mapStudent/models/StudentMapFeatureDto.ts";
import SelectedMapFeature from "../models/SelectedMapFeature.interface.ts";

export interface InteractiveMapContext {
    mapImageRef: React.LegacyRef<SVGImageElement> | null;
    zoomK: number;
    name?: string,
    mapLink: string;
    editMode: EditMode;
    openConfirm: boolean;
    selectedFeature?: SelectedFeature;
    features?: FeatureTypeCollection;
    baseFeatures: {
        points: BaseMapFeatureDto[],
        polygons: BaseMapFeatureDto[],
        lineStrings: BaseMapFeatureDto[],
    },
    studentFeatures: {
        points: StudentMapFeatureDto[],
        polygons: StudentMapFeatureDto[],
        lineStrings: StudentMapFeatureDto[],
    },
    targets: MapTargets;
    availableFeatures: AvailableFeatures,
    selectedFeatures?: SelectedAvailableFeatures,
    selectedMapFeature?: SelectedMapFeature

    selectMapFeature(feature?: SelectedFeature): void;
    createFeature(): void,
    editTargetDetails(name: string): void,
    handleMapLoadError(): void,
    setEditMode(editMode: EditMode): void,
    selectFeature(id: string, editMode: EditMode): void,
    resetTargets(): void,
    deleteFeature(): void
}

const defaultValue: InteractiveMapContext = {
    features: {
        points: [],
        lineStrings: [],
        polygons: []
    },
    targets: {
        coordinates: [],
        name: ""
    },
    availableFeatures: {
        points: [],
        lines: [],
        polygons: []
    },
    mapLink: "",
    selectedFeatures: {
        pointId: "",
        lineStringId: "",
        polygonId: ""
    },
    studentFeatures: {
        points: [],
        polygons: [],
        lineStrings: [],
    },
    baseFeatures: {
        points: [],
        polygons: [],
        lineStrings: [],
    },
    zoomK: 1,
    editMode: EditMode.None,
    openConfirm: false,
    selectedFeature: undefined,
    mapImageRef: null,
    selectedMapFeature: undefined,

    createFeature() {},
    editTargetDetails(name: string) {},
    handleMapLoadError() {},
    selectMapFeature(feature?: SelectedFeature) {},
    setEditMode(editMode: EditMode){},
    selectFeature(id: string, editMode: EditMode) {},
    resetTargets() {},
    deleteFeature() {}
}

export const InteractiveMapContext = createContext<InteractiveMapContext>(defaultValue);