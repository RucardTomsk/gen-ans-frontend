import {Point} from "./Point.ts";

export interface EnrichedPhotoDto {
    photo: {
        bucket: string,
        created_at: string,
        description: string,
        id: string,
        key: string,
        name: string,
        segments: SegmentDto[],
        update_at: string,
        url: string
    },
}

export interface SegmentDto {
    cords: Point[],
    id: string,
    mineral: {
        color: string,
        created_at: string,
        description: string,
        id: string,
        name: string,
        updated_at: string
    }
}