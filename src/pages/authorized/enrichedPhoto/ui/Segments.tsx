import React from "react";
import {SegmentDto} from "../../../../services/segmentation/models/EnrichedPhotoDto.ts";
import Segment from "./Segment.tsx";
import {MineralDto} from "../../../../services/material/models/MineralsDto.ts";

interface SegmentsProps {
    segments?: SegmentDto[],
    onSegment(id: string, mineral: MineralDto): void,
    selectedSegment?: {
        id: string,
        mineral: MineralDto
    }
}
const Segments = (props: SegmentsProps) => {

    const {
        segments,
        onSegment,
        selectedSegment
    } = props

    if (!segments) return null;

    return (
        <>
            {
                segments.map(it =>
                    <Segment
                        key={it.id}
                        isSelected={it.id === selectedSegment?.id}
                        onClick={() => onSegment(it.id, it.mineral)}
                        {...it}
                    />
                )
            }
        </>
    )
}

export default Segments;