import {CartType} from "./CartType.ts";
import {BusinessOpportunityInCart} from "./BusinessOpportunityInCart.ts";

export interface CartDto {
    id: string,
    businessOpportunities: BusinessOpportunityInCart[],
    lowerLimitOfYears: number,
    upperLimitOfYears: number,
    cartType: CartType,
    summaryNpv?: number,
    targetNpv?: number,
}