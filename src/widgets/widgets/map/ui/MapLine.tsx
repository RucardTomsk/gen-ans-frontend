import React from "react";
import {getMapPathByPoints} from "../helpers/getMapPathByPoints.ts";
import {BaseMapFeatureDto} from "../../../../services/mapStudent/models/BaseMapFeatureDto.ts";
import {useInteractiveMap} from "../hooks/useInteractiveMap.ts";
import {LineType} from "../../../../services/featureType/models/LineType.ts";
import SelectedMapFeature from "../models/SelectedMapFeature.interface.ts";

interface Props {
    line: BaseMapFeatureDto;
    isSelected: boolean,
    selectFeature?(feature: SelectedMapFeature): void
}
const MapLine: React.FC<Props> = ({
      line,
      selectFeature,
      isSelected
    }) => {

    const {features} = useInteractiveMap()

    const feature = features?.lineStrings.find(it => it.id === line.featureTypeId)

    if (!feature) return;

    return (
        <path
            d={getMapPathByPoints(line.coordinates)}
            stroke={isSelected ? "#d20d0d" : feature.color}
            fill={"none"}
            strokeWidth={0.5}
            strokeLinecap={feature?.lineType !== LineType.Dashed ? "round" : "square"}
            strokeLinejoin={"round"}
            strokeDashoffset={"3"}
            strokeDasharray={StrokeDasharray.get(feature.lineType || LineType.Solid)}
            onClick={selectFeature ? () => selectFeature({
                name: line.name,
                id: line.id,
                featureType: feature.name
            }) : () => {}}
            className={"cursor-pointer"}
        />
    )
}

const StrokeDasharray = new Map<LineType, string>([
    [LineType.Solid, ""],
    [LineType.Dashed, "2 1"],
    [LineType.Dotted, "0.2 1"],
]);

export default MapLine;