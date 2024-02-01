import {BaseMapFeatureDto} from "./BaseMapFeatureDto.ts";

export interface StudentMapFeatureDto extends BaseMapFeatureDto {
    studentId: string,
    lastModifiedAt: string
}