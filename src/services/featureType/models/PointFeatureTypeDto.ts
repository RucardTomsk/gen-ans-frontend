import {VisibilityInCase} from "./VisibilityInCase.ts";
import {GeometryType} from "./GeometryType.ts";

export interface PointFeatureTypeDto {
    id: string,
    name?: string,
    geometryType: GeometryType,
    visibilityInCase: VisibilityInCase,
    canStudentUse: boolean,
    color?: string,
    iconUrl?: string
}