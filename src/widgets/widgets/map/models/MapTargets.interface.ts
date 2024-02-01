import {Point} from "./Point.interface.ts";
import {PositionDto} from "../../../../services/mapStudent/models/PositionDto.ts";

export default interface MapTargets {
    coordinates: PositionDto[],
    name: string
}