import {PointFeatureTypeDto} from "./PointFeatureTypeDto.ts";
import {PolygonFeatureTypeDto} from "./PolygonFeatureTypeDto.ts";
import {LineStringFeatureTypeDto} from "./LineStringFeatureTypeDto.ts";

export interface FeatureTypeCollection {
    points: PointFeatureTypeDto[],
    polygons: PolygonFeatureTypeDto[],
    lineStrings: LineStringFeatureTypeDto[]
}