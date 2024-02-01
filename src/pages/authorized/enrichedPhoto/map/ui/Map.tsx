import React from "react";
import Segments from "./Segments.tsx";
import MapTargets from "./MapTargets.tsx";
import {useInteractiveMap} from "../hooks/useInteractiveMap.ts";
import {useParams} from "react-router-dom";

const Map: React.FC = () => {

    const {mapImageRef, mapLink, handleMapLoadError} = useInteractiveMap();

    return (
        <svg
            id={"map"}
            className={"border border-stone-200 border-solid"}
            width={"600"}
            height={"600"}
        >
            <g id="image">
                <image
                    id={"SVG_MAP"}
                    href={mapLink}
                    width={"600"}
                    ref={mapImageRef}
                    onError={handleMapLoadError}
                />
                {/*<Segments/>*/}
                {/*<MapTargets/>*/}
            </g>
        </svg>
    )
}

export default Map