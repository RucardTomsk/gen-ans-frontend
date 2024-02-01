import {GeometryType} from "./GeometryType.ts";
import {VisibilityInCase} from "./VisibilityInCase.ts";

export interface PolygonFeatureTypeDto {
    id: string,
    name?: string,
    geometryType: GeometryType,
    visibilityInCase: VisibilityInCase,
    canStudentUse: boolean,
    color?: string
}