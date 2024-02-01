import FeatureTypeDto from "./FeatureTypeDto.interface.ts";
import PositionDto from "./PositionDto.interface.ts";

export default interface BaseMapFeatureDto {
    id: string,
    name: string,
    featureType: FeatureTypeDto,
    coordinates: PositionDto
}