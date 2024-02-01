import React from "react";
import {Dropdown, MenuProps, Skeleton} from "antd";
import {DownOutlined,} from "@ant-design/icons";
import {EditMode} from "../models/EditMode.enum.ts";
import {useInteractiveMap} from "../hooks/useInteractiveMap.ts";
import IconURL from "./IconURL.tsx";
import {PointFeatureTypeDto} from "../../../../services/featureType/models/PointFeatureTypeDto.ts";
import {LineStringFeatureTypeDto} from "../../../../services/featureType/models/LineStringFeatureTypeDto.ts";
import {PolygonFeatureTypeDto} from "../../../../services/featureType/models/PolygonFeatureTypeDto.ts";
import {LineType} from "../../../../services/featureType/models/LineType.ts";

const ToolsMenu: React.FC = () => {

    const {
        features,
        selectedFeatures,
    } = useInteractiveMap();

    if (!features || !selectedFeatures?.pointId)
        return (
            <Skeleton title={false} paragraph={{rows: 3, width: 90}}/>
        )

    return (
        <div className={"flex flex-col gap-2"}>
            <EditModeButton
                editMode={EditMode.Point}
                menuItems={getPointsMenuItems(features.points, selectedFeatures.pointId)}
                icon={features.points.find(it => it.id === selectedFeatures.pointId)?.iconUrl}
            />
            <EditModeButton
                editMode={EditMode.Line}
                menuItems={getLineStringsMenuItems(features.lineStrings, selectedFeatures.lineStringId)}
                icon={LineStringIconUrls[features.lineStrings.find(it => it.id === selectedFeatures.lineStringId)?.lineType || LineType.Solid]}
            />
            <EditModeButton
                editMode={EditMode.Polygon}
                menuItems={getPolygonsMenuItems(features.polygons, selectedFeatures.polygonId)}
                icon={PolygonIconUrl}
            />
        </div>
    )
}

interface EditModeButtonProps {
    editMode: EditMode,
    icon?: string,
    menuItems: MenuProps['items']
}

const EditModeButton: React.FC<EditModeButtonProps> = ({
       editMode,
       icon,
       menuItems
    }) => {

    const {editMode: currentEditMode, selectFeature, setEditMode} = useInteractiveMap();

    return (
        <Dropdown.Button
            menu={{
                items: menuItems,
                onClick: (event) => {
                    selectFeature(event.key, editMode)
                }
            }}
            icon={<DownOutlined />}
            type={currentEditMode === editMode ? "primary" : "default"}
            onClick={() => setEditMode(currentEditMode === editMode ? EditMode.None : editMode)}
        >
            <IconURL src={icon} size={20}/>
        </Dropdown.Button>
    )
}

function getPointsMenuItems(availableFeatures: PointFeatureTypeDto[], selectedId: string): MenuProps['items'] {
    return availableFeatures?.map(it => {
        return {
            label: it.name,
            key: it.id,
            icon: <IconURL src={it?.iconUrl} size={20} color={it.color} className={"mr-1"}/>,
            disabled: it.id === selectedId
        }
    })
}
function getLineStringsMenuItems(availableFeatures: LineStringFeatureTypeDto[], selectedId: string): MenuProps['items'] {
    return availableFeatures?.map(it => {
        return {
            label: it.name,
            key: it.id,
            icon: <IconURL src={LineStringIconUrls[it.lineType || LineType.Solid]} size={20} color={it.color} className={"mr-1"}/>,
            disabled: it.id === selectedId
        }
    })
}

function getPolygonsMenuItems(availableFeatures: PolygonFeatureTypeDto[], selectedId: string): MenuProps['items'] {
    return availableFeatures?.map(it => {
        return {
            label: it.name,
            key: it.id,
            icon: <IconURL src={PolygonIconUrl} size={20} color={it.color} className={"mr-1"}/>,
            disabled: it.id === selectedId
        }
    })
}

const LineStringIconUrls: Record<LineType, string> = {
    [LineType.Solid]: "https://www.svgrepo.com/show/361697/border-solid.svg",
    [LineType.Dashed]: "https://www.svgrepo.com/show/361694/border-dashed.svg",
    [LineType.Dotted]: "https://www.svgrepo.com/show/361691/border-dotted.svg",
}

const PolygonIconUrl =  "https://www.svgrepo.com/show/399227/polygon-pt.svg";

export default ToolsMenu;