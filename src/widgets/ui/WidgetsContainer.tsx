import React, {useState} from "react";
import InteractiveMap from "../widgets/map";
import DocumentsWidget from "../widgets/documents";
import TimerWidget from "../widgets/timer";
import {FloatButton} from "antd";
import {Widget, WidgetType} from "../models/WidgetType.enum.ts";
import ChatWidget from "../widgets/chat";
import WidgetButton from "./WidgetButton.tsx";
import {widgetsButtons} from "../constants/widgetsButtons.tsx";
const WidgetsContainer: React.FC = () => {

    const [openWidget, setOpenWidget] = useState<Widget>(Widget.Null)
    const onCloseWidget = () => setOpenWidget(Widget.Null);
    const onWidgetButton = (widget: Widget) => {
        setOpenWidget(openWidget === widget ? Widget.Null : widget)
    }

    const widgets: Record<WidgetType, React.ReactNode | undefined> = {
        [Widget.Map]: <InteractiveMap onClose={onCloseWidget}/>,
        [Widget.Chat]: <ChatWidget onClose={onCloseWidget}/>,
        [Widget.Documents]: <DocumentsWidget onClose={onCloseWidget}/>,
        [Widget.Timer]: <TimerWidget onClose={onCloseWidget}/>,
        [Widget.Null]: undefined
    }

    return (
        <div className={"relative"}>
            { widgets[openWidget] }
            <FloatButton.Group className={"bottom-6 right-6"} icon={null}>
                {
                    widgetsButtons.map(it =>
                        <WidgetButton
                            key={it.type}
                            name={it.name}
                            type={it.type}
                            icon={it.icon}
                            currentWidget={openWidget}
                            onClick={onWidgetButton}
                        />
                    )
                }
            </FloatButton.Group>
        </div>
    )
}

export default WidgetsContainer;