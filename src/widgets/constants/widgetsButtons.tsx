import {ClockCircleOutlined, CommentOutlined, FileTextOutlined, GroupOutlined} from "@ant-design/icons";
import {Widget} from "../models/WidgetType.enum.ts";
import React from "react";

export const widgetsButtons = [
    {
        name: "Карта",
        icon: <GroupOutlined/>,
        type: Widget.Map
    },
    {
        name: "Документы",
        icon: <FileTextOutlined/>,
        type: Widget.Documents
    },
    {
        name: "Таймер",
        icon: <ClockCircleOutlined/>,
        type: Widget.Timer
    },
    {
        name: "Чат",
        icon: <CommentOutlined/>,
        type: Widget.Chat
    }
]