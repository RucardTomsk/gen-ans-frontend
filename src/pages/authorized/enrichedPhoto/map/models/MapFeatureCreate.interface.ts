import {MapFeatureCreateDto} from "../../../../services/mapStudent/models/MapFeatureCreateDto.ts";

export type MapFeatureCreate = Omit<MapFeatureCreateDto, "featureTypeId">;