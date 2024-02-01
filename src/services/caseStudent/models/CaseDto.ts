import {CartDto} from "./CartDto.ts";
import {ClassicBusinessOpportunity} from "./ClassicBusinessOpportunity.ts";
import {NonClassicBusinessOpportunities} from "./NonClassicBusinessOpportunities.ts";

export interface CaseDto {
    id: string,
    description?: string,
    name?: string,
    summaryNpv?: number,
    carts: CartDto[],
    classicBusinessOpportunities: ClassicBusinessOpportunity[],
    nonClassicBusinessOpportunities: NonClassicBusinessOpportunities[],
    map: string,
    startRegistrationAt?: string,
    stopRegistrationAt?: string,
    startAt: string,
    stopAt: string,
    attachedFileIds: []
}