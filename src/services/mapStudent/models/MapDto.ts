import {StudentMapFeatureDto} from "./StudentMapFeatureDto.ts";
import {BaseMapFeatureDto} from "./BaseMapFeatureDto.ts";

export interface MapDto {
    id: string,
    name?: string,
    mapFileId?: string,
    baseFeatures: {
        points: BaseMapFeatureDto[],
        polygons: BaseMapFeatureDto[],
        lineStrings: BaseMapFeatureDto[],
    },
    studentFeatures: {
        points: StudentMapFeatureDto[],
        polygons: StudentMapFeatureDto[],
        lineStrings: StudentMapFeatureDto[],
    }
}