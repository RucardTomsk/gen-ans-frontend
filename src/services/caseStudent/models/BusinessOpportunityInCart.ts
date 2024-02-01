import {BoType} from "./BoType.ts";

export interface BusinessOpportunityInCart {
    id: string,
    name?: string,
    npv?: number,
    boType: BoType
}