import React, {useCallback, useEffect, useRef, useState} from "react";
import {InteractiveMapContext} from "./InteractiveMapContext.tsx";
import {EditMode} from "../models/EditMode.enum.ts";
import SelectedMapFeature from "../models/SelectedMapFeature.interface.ts";
import MapTargets from "../models/MapTargets.interface.ts";
import {setTargetsFactory} from "../helpers/setTargetsFactory.ts";
import {createMapFeatureFactory} from "../helpers/createMapFeatureFactory.ts";
import * as d3 from "d3";
import SelectedFeatures from "../models/SelectedFeatures.interface.ts";
import {useParams} from "react-router-dom";
import {useMutation, useQuery} from "@tanstack/react-query";
import {mapStudentQueryKeys} from "../../../../services/mapStudent/mapStudentQueryKeys.ts";
import mapStudentService from "../../../../services/mapStudent/MapStudentService.ts";
import featureTypeService from "../../../../services/featureType/FeatureTypeService.ts";
import {featureTypeQueryKeys} from "../../../../services/featureType/featureTypeQueryKeys.ts";
import {MapFeatureCreateDto} from "../../../../services/mapStudent/models/MapFeatureCreateDto.ts";
import queryClient from "../../../../api/queryClient.ts";
import {MapFeatureEdtDto} from "../../../../services/mapStudent/models/MapFeatureEditDto.ts";

export const InteractiveMapProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const {caseId} = useParams();

    const mapImageRef = useRef<SVGImageElement | null>(null);
    const [zoomK, setZoomK] = useState(1);
    const [editMode, setEditMode] = useState<EditMode>(EditMode.None);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [mapLink, setMapLink] = useState<string>(localStorage.getItem(`mapLink-${caseId}`) || "");

    const {data: mapData} = useQuery({
        queryKey: mapStudentQueryKeys.map(caseId),
        queryFn: () => mapStudentService.getMap(caseId || ""),
        select: ({data}) => data,
        enabled: !!caseId
    })

    useEffect(() => {
        setMapLink(localStorage.getItem(`mapLink-${caseId}`) || "")
    }, [caseId]);

    useEffect(() => {
        if (!mapLink && mapData) {
            localStorage.setItem(`mapLink-${caseId}`, mapData.mapFileId || "")
            setMapLink(mapData.mapFileId || "")
        }
    }, [mapData, mapLink, caseId]);

    useEffect(() => {
        window.addEventListener('storage', () => {
            if (!localStorage.getItem(`mapLink-${caseId}`)) {
                localStorage.setItem(`mapLink-${caseId}`, mapData?.mapFileId || "")
            }
        })
    }, [caseId, mapData]);

    const {data: featuresData} = useQuery({
        queryKey: featureTypeQueryKeys.studentFeatures(mapData?.id),
        queryFn: () => featureTypeService.getStudentFeatureTypes(mapData?.id || ""),
        select: ({data}) => data,
        enabled: !!mapData?.id
    })

    const {mutate: createFeatureServer} = useMutation({
        mutationFn: (data: MapFeatureCreateDto) => mapStudentService.addMapFeature(mapData?.id || "", data),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: mapStudentQueryKeys.map(caseId)})
        }
    })

    const {mutate: editFeatureServer} = useMutation({
        mutationFn: (data: {id: string, data: MapFeatureEdtDto}) => mapStudentService.editMapFeature(data.id, data.data),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: mapStudentQueryKeys.map(caseId)})
        }
    })

    const {mutate: deleteFeatureServer} = useMutation({
        mutationFn: (id: string) => mapStudentService.deleteMapFeature(id),
        onSuccess: () => {
            setSelectedMapFeature(undefined);
            queryClient.invalidateQueries({queryKey: mapStudentQueryKeys.map(caseId)})
        }
    })

    const handleMapLoadError = useCallback(() => {
        if (mapLink) localStorage.removeItem(`mapLink-${caseId}`);
    }, [caseId])

    const [selectedMapFeature, setSelectedMapFeature] = useState<SelectedMapFeature | undefined>(undefined);

    const [selectedFeatures, setSelectedFeatures] = useState<SelectedFeatures>({
        pointId: "",
        lineStringId: "",
        polygonId: ""
    })

    useEffect(() => {
        if (featuresData && selectedFeatures.pointId === "") {
            setSelectedFeatures({
                pointId: featuresData.points[0].id,
                lineStringId: featuresData.lineStrings[0].id,
                polygonId: featuresData.polygons[0].id
            })
        }
    }, [featuresData]);

    const [targets, setTargets] = useState<MapTargets>({
        name: "",
        coordinates: []
    })

    const resetTargets = () => {
        setTargets({
            name: "",
            coordinates: []
        })
    }

    const selectFeature = useCallback((id: string, editMode: EditMode) => {

        if (!id) return;

        if (editMode === EditMode.Point) {
            setSelectedFeatures({
                ...selectedFeatures,
                pointId: id
            })
        }
        else if (editMode === EditMode.Line) {
            setSelectedFeatures({
                ...selectedFeatures,
                lineStringId: id
            })
        }
        else if (editMode === EditMode.Polygon) {
            setSelectedFeatures({
                ...selectedFeatures,
                polygonId: id
            })
        }
    }, [featuresData])

    const selectMapFeature = useCallback((feature?: SelectedMapFeature) => {
        if (editMode === EditMode.None) {
            setSelectedMapFeature(feature);
        }
    }, [])

    // @ts-ignore
    const updateTargetCoordinates = useCallback((event) => {
        const svgRect = mapImageRef.current?.getBoundingClientRect()

        if (!svgRect) return;
        if (event.target.id !== "SVG_MAP" && editMode === EditMode.None) return;

        const newPoint = {
            x: (event.clientX - svgRect.left) * (1 / zoomK),
            y: (event.clientY - svgRect.top) * (1 / zoomK)
        };

        setTargetsFactory(editMode)?.setTargets(targets, newPoint, setTargets);
    }, [editMode, targets, zoomK])

    const editTargetDetails = (name: string) => {
        setTargets({
            ...targets, name
        })
    }

    const createFeature = useCallback(() => {
        if (targets.name) {
            createMapFeatureFactory(editMode)?.create(
                targets, selectedFeatures, (data: MapFeatureCreateDto) => createFeatureServer(data))
            resetTargets();
        }
    }, [editMode, targets, selectedFeatures])

    const editFeature = useCallback(() => {
        if (selectedMapFeature?.id && targets) editFeatureServer({
            id: selectedMapFeature?.id,
            data: {
                name: targets.name,
                coordinates: targets.coordinates
            }
        })
    }, [selectedMapFeature])

    const deleteFeature = useCallback(() => {
        if (selectedMapFeature?.id) deleteFeatureServer(selectedMapFeature?.id)
    }, [selectedMapFeature])

    const getZoom = useCallback(() => {
        return d3.zoom()
            .scaleExtent([1, 10])
            .translateExtent([[0, 0], [600, 600]])
            .on("zoom", (event) => {
                setZoomK(event.transform.k)
                d3.select("#map")
                    .selectChild("#image")
                    .attr("transform", event.transform.toString());
            })
    }, [])

    useEffect(() => {
        // @ts-ignore
        d3.select("#map").call(getZoom());
        d3.select("#map").on("click",  (event) => updateTargetCoordinates(event));
    }, [getZoom, updateTargetCoordinates]);

    useEffect(() => {
        resetTargets();
        setOpenConfirm(!!editMode);
    }, [editMode]);

    const value: InteractiveMapContext = {
        features: featuresData,
        targets,
        mapLink,
        name: mapData?.name,
        baseFeatures: mapData?.baseFeatures || {
            polygons: [],
            lineStrings: [],
            points: []
        },
        studentFeatures: mapData?.studentFeatures || {
            polygons: [],
            lineStrings: [],
            points: []
        },
        mapImageRef,
        selectMapFeature,
        selectedMapFeature,
        availableFeatures: {points: [], lines: [], polygons: []},
        selectedFeatures,
        selectFeature,
        createFeature,
        zoomK,
        editMode,
        openConfirm,
        setEditMode,
        editTargetDetails,
        resetTargets,
        deleteFeature,
        handleMapLoadError
    }

    return (
        <InteractiveMapContext.Provider value={value}>
            {children}
        </InteractiveMapContext.Provider>
    );
}