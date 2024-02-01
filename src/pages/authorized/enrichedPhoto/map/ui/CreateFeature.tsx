import React from "react";
import {Button, Input, Tooltip, Typography} from "antd";
import {useInteractiveMap} from "../hooks/useInteractiveMap.ts";
import {EditMode} from "../models/EditMode.enum.ts";
import {CloseOutlined, SaveOutlined} from "@ant-design/icons";

const CreateFeature = () => {

    const {
        openConfirm,

        targets,
        createFeature,
        editTargetDetails,
        selectedFeatures,
        features,
        editMode,
        resetTargets
    } = useInteractiveMap();

    if (!features || !selectedFeatures) return;

    const featureName =
        features[editMode === EditMode.Point ? "points" : editMode === EditMode.Line ? "lineStrings" : "polygons"]
            .find(it => it.id === selectedFeatures[editMode === EditMode.Point ? "pointId" : editMode === EditMode.Line ? "lineStringId" : "polygonId"])
            ?.name

    return (
        (openConfirm && (targets.coordinates.length)) ?
            <div className={"max-w-[260px] bg-white rounded-xl pb-2 px-2 pt-1 absolute bottom-2 right-1 flex flex-col gap-1"}>
                <div className={"flex justify-between items-center"}>
                    <div className={"flex flex-wrap gap-x-1"}>
                        <Typography.Text className={"text-xs"} strong>{"Создание метки:"}</Typography.Text>
                        <Typography.Text type={"secondary"} className={"text-xs"} strong>{featureName}</Typography.Text>
                    </div>
                    <Tooltip title={"Отменить"}>
                        <Button type={"text"} icon={<CloseOutlined/>} onClick={() => resetTargets()}/>
                    </Tooltip>
                </div>
                <div className={"flex gap-2"}>
                    <Input
                        placeholder={"Название метки"}
                        value={targets.name}
                        onChange={(e) => editTargetDetails(e.currentTarget.value)}
                    />
                    <Tooltip title={"Сохранить"}>
                        <div className={"flex flex-1"}>
                            <Button type={"primary"} onClick={createFeature} icon={<SaveOutlined />} />
                        </div>
                    </Tooltip>
                </div>
            </div> : undefined
    )
}

export default CreateFeature