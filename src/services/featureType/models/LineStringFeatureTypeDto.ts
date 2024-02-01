import {GeometryType} from "./GeometryType.ts";
import {VisibilityInCase} from "./VisibilityInCase.ts";
import {LineType} from "./LineType.ts";

export interface LineStringFeatureTypeDto {
    id: string,
    name?: string,
    geometryType: GeometryType,
    visibilityInCase: VisibilityInCase,
    canStudentUse: boolean,
    color?: string,
    lineType?: LineType
}