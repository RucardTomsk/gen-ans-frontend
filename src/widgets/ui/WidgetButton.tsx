import React from "react";
import {Widget} from "../models/WidgetType.enum.ts";
import {FloatButton, Tooltip} from "antd";

interface WidgetButtonProps {
    name: string,
    icon: React.ReactNode,
    type: Widget,
    currentWidget: Widget,
    onClick(widget: Widget): void
}

const WidgetButton: React.FC<WidgetButtonProps> = ({
       name,
       icon,
       type,
       currentWidget,
       onClick
    }) => {

    return (
        <Tooltip title={name} placement={"left"}>
            <FloatButton
                icon={icon}
                onClick={() => onClick(type)}
                type={currentWidget === type ? "primary" : "default"}
            />
        </Tooltip>
    )
}

export default WidgetButton