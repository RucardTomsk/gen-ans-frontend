import {PositionDto} from "./PositionDto.ts";

export interface BaseMapFeatureDto {
    id: string,
    name?: string,
    featureTypeId: string,
    coordinates: PositionDto[]
}