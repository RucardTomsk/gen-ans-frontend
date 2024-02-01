import React from "react";
import MapPolygon from "./MapPolygon.tsx";
import {useInteractiveMap} from "../hooks/useInteractiveMap.ts";

const Segments: React.FC = () => {

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
        </>
    )
}

export default Segments
