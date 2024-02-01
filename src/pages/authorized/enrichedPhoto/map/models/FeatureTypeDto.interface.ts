import {GeometryType} from "./GeometryType.enum.ts";
import {VisibilityInCase} from "./VisibilityInCase.enum.ts";

export default interface FeatureTypeDto {
    id: string,
    name: string,
    geometryType: GeometryType,
    visibilityInCase: VisibilityInCase,
    color: string,
    iconUrl: string,
}