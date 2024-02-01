export interface ClassicBusinessOpportunity {
    id: string,
    name?: string,
    geologicalOil?: number,
    geologicalGas?: number,
    geologicalCondensate?: number,
    recoverableOil?: number,
    recoverableGas?: number,
    recoverableCondensate?: number,
    npv?: number,
    mapFeatureId?: string,
    cartId?: string
}