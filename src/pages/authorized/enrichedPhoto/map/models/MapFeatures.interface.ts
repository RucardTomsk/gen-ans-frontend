import FeatureTypeBase from "./FeatureTypeBase.interface.ts";
import PositionDto from "./PositionDto.interface.ts";

export default interface MapFeatures {
    points: PointMapFeature[],
    lines: LineMapFeature[],
    polygons: PolygonMapFeature[]
}

export interface PointMapFeature {
    id: string,
    name: string,
    featureType: FeatureTypeBase,
    coordinates: PositionDto
}
export interface LineMapFeature {
    id: string,
    name: string,
    featureType: FeatureTypeLine,
    coordinates: PositionDto[]
}
export interface PolygonMapFeature {
    id: string,
    name: string,
    featureType: FeatureTypeBase,
    coordinates: PositionDto[]
}

interface FeatureTypeLine extends FeatureTypeBase {
    lineType: string
}