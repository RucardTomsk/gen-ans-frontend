import React from "react";
import MapPoint from "./MapPoint.tsx";
import MapLine from "./MapLine.tsx";
import MapPolygon from "./MapPolygon.tsx";
import {useInteractiveMap} from "../hooks/useInteractiveMap.ts";

const MapFeatures: React.FC = () => {

    const {
        features,
        baseFeatures,
        studentFeatures,
        selectMapFeature,
        zoomK,
        selectedMapFeature
    } = useInteractiveMap();

    if (!features) return <div></div>

    return (
        <>
            {
                [...studentFeatures.polygons, ...baseFeatures.polygons].map(it =>
                    <MapPolygon
                        polygon={it}
                        key={it.id}
                        isSelected={it.id === selectedMapFeature?.id}
                        selectFeature={selectMapFeature}
                    />
                )
            }
            {
                [...studentFeatures.lineStrings, ...baseFeatures.lineStrings].map(it =>
                    <MapLine
                        line={it}
                        key={it.id}
                        isSelected={it.id === selectedMapFeature?.id}
                        selectFeature={selectMapFeature}
                    />
                )
            }
            {
                [...studentFeatures.points, ...baseFeatures.points].map(it =>
                    <MapPoint
                        key={it.id}
                        point={it}
                        zoomK={zoomK}
                        selectFeature={selectMapFeature}
                        isSelected={it.id === selectedMapFeature?.id}
                    />
                )
            }
        </>
    )
}

export default MapFeatures
