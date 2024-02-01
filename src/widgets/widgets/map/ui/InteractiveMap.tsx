import React from "react";
import {Typography} from "antd";
import ToolsMenu from "./ToolsMenu.tsx";
import Map from "./Map.tsx";
import CreateFeature from "./CreateFeature.tsx";
import FeatureDetails from "./FeatureDetails.tsx";
import {InteractiveMapProvider} from "../provider/InteractiveMapProvider.tsx";
import WidgetCard from "../../../ui/WidgetCard.tsx";
import {useInteractiveMap} from "../hooks/useInteractiveMap.ts";

interface Props {
    onClose?(): void
}
const InteractiveMap: React.FC<Props> = ({onClose}) => {

    return (
        <InteractiveMapProvider>
            <WidgetCard
                onClose={onClose}
                title={<InteractiveMapTitle/>}
            >
                <div className={"flex gap-2 p-2 pl-3"}>
                    <div className={"relative"}>
                        <Map/>
                        <CreateFeature/>
                        <FeatureDetails/>
                    </div>
                    <ToolsMenu/>
                </div>
            </WidgetCard>
        </InteractiveMapProvider>
    );
}

const InteractiveMapTitle: React.FC = () => {

    const {name} = useInteractiveMap();

    return (
        <div>
            <Typography.Text strong className={"text-lg"}>Карта:</Typography.Text>
            <Typography.Text className={"ms-1 text-lg"}>{name}</Typography.Text>
        </div>
    )
}
export default InteractiveMap