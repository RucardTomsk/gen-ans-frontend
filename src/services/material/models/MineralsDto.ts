export interface MineralsDto {
    minerals: MineralDto[]
}

export interface MineralDto {
    color: string,
    created_at: string,
    description: string,
    id: string,
    name: string,
    updated_at: string
}