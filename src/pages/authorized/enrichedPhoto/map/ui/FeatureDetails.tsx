import React from "react";
import {Button, Typography} from "antd";
import {CloseOutlined, DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {useInteractiveMap} from "../hooks/useInteractiveMap.ts";
const FeatureDetails: React.FC = () => {

    const {selectedMapFeature, selectMapFeature, deleteFeature} = useInteractiveMap();

    return (
        selectedMapFeature ?
        <div className={"max-w-[300px] absolute bg-white rounded-xl p-1 left-1 bottom-2 border-stone-200 border border-solid"}>
            <div className={"flex gap-2"}>
                <div className={"flex flex-col pl-2 py-1"}>
                    <Typography.Text type={"secondary"} className={"text-xs"} strong>{selectedMapFeature.featureType}</Typography.Text>
                    <Typography.Text strong>{selectedMapFeature.name}</Typography.Text>
                </div>
                <Button type={"text"} icon={<CloseOutlined/>} onClick={() => selectMapFeature(undefined)}/>
            </div>
            <div className={"flex gap-1 justify-end"}>
                <Button icon={<EditOutlined />}/>
                <Button danger icon={<DeleteOutlined />} onClick={() => deleteFeature()}/>
            </div>
        </div> : undefined
    )
}

export default FeatureDetails;