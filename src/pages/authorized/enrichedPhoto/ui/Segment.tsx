import React from "react";
import {SegmentDto} from "../../../../services/segmentation/models/EnrichedPhotoDto.ts";
import {getMapPathByPoints} from "../helpers/getMapPathByPoints.ts";

interface Props extends SegmentDto {
    onClick(): void,
    isSelected: boolean
}
const Segment = (props: Props) => {

    const {
        cords,
        mineral,
        onClick,
        isSelected
    } = props

    return (
        <path
            d={getMapPathByPoints(cords)}
            stroke={isSelected ? "rgba(0,183,235)" : mineral.color}
            fill={isSelected ? "rgba(0,183,235, 0.4)" : mineral.color}
            strokeWidth={0.25}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            onClick={onClick}
            className={"cursor-pointer"}
        />
    )
}

export default Segment;