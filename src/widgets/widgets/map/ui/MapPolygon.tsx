import React from "react";
import {getMapPathByPoints} from "../helpers/getMapPathByPoints.ts";
import SelectedFeature from "../models/SelectedMapFeature.interface.ts";
import {BaseMapFeatureDto} from "../../../../services/mapStudent/models/BaseMapFeatureDto.ts";
import {useInteractiveMap} from "../hooks/useInteractiveMap.ts";

interface Props {
    polygon: BaseMapFeatureDto;
    borderColor?: string;
    fillColor?: string,
    isSelected: boolean,
    selectFeature?(feature: SelectedFeature): void
}
const MapPolygon: React.FC<Props> = ({
         polygon,
         selectFeature,
         isSelected
    }) => {

    const {features} = useInteractiveMap()

    const feature = features?.polygons.find(it => it.id === polygon.featureTypeId)

    if (!feature) return;

    return (
        <path
            d={getMapPathByPoints(polygon.coordinates, "polygon")}
            stroke={isSelected ? "rgba(210,13,13,0.3)" : feature.color}
            fill={isSelected ? "rgba(210,13,13,0.3)" : "rgba(252,246,2,0.85)"}
            strokeWidth={0.25}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            onClick={selectFeature ? () => selectFeature({
                name: polygon.name,
                id: polygon.id,
                featureType: feature.name
            }) : () => {}}
            className={"cursor-pointer"}
        />
    )
}

export default MapPolygon;