import {useSlice} from "../hooks/useSlice.ts";
import {Button, Radio, Typography} from "antd";
import React, {useCallback, useEffect, useRef, useState} from "react";
import * as d3 from "d3";
import Segments from "./Segments.tsx";
import SegmentTarget from "./SegmentTarget.tsx";
import {Point} from "../../../../services/segmentation/models/Point.ts";
import {MineralDto} from "../../../../services/material/models/MineralsDto.ts";
import {PlusOutlined} from "@ant-design/icons";
import Minerals from "./Minerals.tsx";

const EnrichedPhotoPage = () => {

    const {
        getData,
        createSegment,
        getMinerals,
        deleteSegment
    } = useSlice();
    const mapImageRef = useRef<SVGImageElement | null>(null);
    const [zoomK, setZoomK] = useState(1);
    const [target, setTarget] = useState<Point[]>([]);
    const [selectedSegment, setSelectedSegment] = useState<{id: string, mineral: MineralDto} | undefined>();
    const [selectedMineral, setSelectedMineral] = useState("");

    console.log(getMinerals?.data?.minerals)

    // @ts-ignore
    const updateTargetCoordinates = useCallback((event) => {
        const svgRect = mapImageRef.current?.getBoundingClientRect()

        if (!svgRect) return;
        if (event.target.id !== "SVG_MAP") return;

        const newPoint = {
            cord_x: (event.clientX - svgRect.left) * (1 / zoomK),
            cord_y: (event.clientY - svgRect.top) * (1 / zoomK)
        };

        setTarget([...target, {...newPoint}])
    }, [zoomK, target])

    const onSegment = (id:string, mineral: MineralDto) => {
      setSelectedSegment({id, mineral});
    }

    const onRemoveSegment = () => {
        deleteSegment.mutate(selectedSegment?.id || "");
    }
    const addSegment = () => {
      createSegment.mutateAsync(
          {mineralId: selectedMineral, data: {cords: [...target, {...target[0]}]}})
          .then(() => {setTarget([])})
    }
    useEffect(() => {
        if (!selectedMineral && getMinerals?.data?.minerals[0])
            setSelectedMineral(getMinerals.data.minerals[0].id)
    }, [getMinerals.data])

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

    // if (getData.isError) return <div>ОШИБКА</div>
    //
    // if (getData.isLoading) return <Skeleton className={"p-10"}/>

    return (
        <div className={"flex flex-col p-10"}>
            <div className={"flex flex-col gap-3 w-full"}>
                <Typography.Text strong className={"text-3xl text-cyan-700"}>{getData.data?.photo.name.toUpperCase()}</Typography.Text>
                <Typography.Paragraph>{getData.data?.photo.description}</Typography.Paragraph>
            </div>
            <div className={"flex gap-5 flex-wrap"}>
                <svg
                    id={"map"}
                    className={"shadow-md"}
                    width={"600px"}
                    height={"600px"}
                >
                    <g id="image">
                        <image
                            id={"SVG_MAP"}
                            href={getData?.data?.photo.url}
                            width={"600px"}
                            ref={mapImageRef}
                        />
                        <Segments
                            segments={getData?.data?.photo.segments}
                            onSegment={onSegment}
                            selectedSegment={selectedSegment}
                        />
                        <SegmentTarget target={target} zoomK={zoomK}/>
                    </g>
                </svg>
                <div className={"flex flex-col gap-5"}>
                    <Minerals
                        minerals={getMinerals?.data?.minerals || []}
                        setSelectedMineral={(id: string) => setSelectedMineral(id)}
                        selectedMineral={selectedMineral}
                    />
                    {
                        target.length > 1 &&
                        <Button onClick={addSegment}>Создать</Button>
                    }
                    {
                        selectedSegment &&
                        <div className={"flex flex-col"}>
                            <Typography.Text strong={true} type={"secondary"} className={"text-lg"}>МИНЕРАЛ ВЫБРАННОЙ ОБЛАСТИ</Typography.Text>
                            <Typography.Text strong={true}>Название: {selectedSegment.mineral.name}</Typography.Text>
                            <Typography.Text>Описание: {selectedSegment.mineral.description}</Typography.Text>
                            <Button danger onClick={onRemoveSegment}>Удалить область</Button>
                        </div>
                    }
                </div>


            </div>

        </div>
    )
}
export default EnrichedPhotoPage;