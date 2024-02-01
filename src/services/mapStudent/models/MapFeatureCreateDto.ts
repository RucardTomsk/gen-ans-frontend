import {PositionDto} from "./PositionDto.ts";

export interface MapFeatureCreateDto {
    name: string,
    featureTypeId: string,
    coordinates: PositionDto[]
}