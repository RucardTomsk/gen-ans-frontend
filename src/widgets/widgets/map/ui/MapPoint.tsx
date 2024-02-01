import React from "react";
import SelectedFeature from "../models/SelectedMapFeature.interface.ts";
import {BaseMapFeatureDto} from "../../../../services/mapStudent/models/BaseMapFeatureDto.ts";
import {useInteractiveMap} from "../hooks/useInteractiveMap.ts";

interface Props {
    point: BaseMapFeatureDto,
    zoomK: number,
    isSelected: boolean,
    selectFeature(feature: SelectedFeature): void
}
const MapPoint: React.FC<Props> = ({
       point,
       zoomK,
       selectFeature,
       isSelected
    }) => {

    const {features} = useInteractiveMap()
    const svgSize = 25;

    const feature = features?.points.find(it => it.id === point.featureTypeId)

    if (!feature) return <></>

    return (
        <svg
            width={svgSize*(1/zoomK)}
            height={svgSize*(1/zoomK)}
            x={point.coordinates[0].x - svgSize*(1/zoomK)/2}
            y={point.coordinates[0].y - svgSize*(1/zoomK)/2}
            onClick={() => selectFeature({
                name: point.name,
                id: point.id,
                featureType: feature.name
            })}
            viewBox="0 0 24 24"
            fill="none"
            className={"cursor-pointer"}
            xmlns="http://www.w3.org/2000/svg"
        >

            {
                isSelected && <g fill="rgba(255, 0, 0, 0.6)" width={svgSize} height={svgSize}>
                    <circle  r="12" cx={12} cy={12}/>
                </g>
            }
            <image
                xlinkHref={feature?.iconUrl}
                width="75%"
                height="75%"
                x={2.7}
                y={2.5}
                className={isSelected ? "invert" : ""}
            />
        </svg>
    )
}

export default MapPoint;