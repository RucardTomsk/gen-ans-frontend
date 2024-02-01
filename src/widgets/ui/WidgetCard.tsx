import React from "react";
import {Button} from "antd";
import {CloseOutlined} from "@ant-design/icons";

interface Props {
    children?: React.ReactNode,
    className?: string,
    title?: React.ReactNode,
    onClose?(): void
}
const WidgetCard: React.FC<Props> = ({
         children,
         className,
         title,
         onClose
     }) => {

    return (
        <div
            className={`fixed shadow bg-white rounded-2xl border border-solid border-stone-100 bottom-[20px] right-[80px] ${className}`}
        >
            <div className={"p-1 pb-0 flex justify-between gap-3 items-center"}>
                <span className={"ml-2"}>
                    {title}
                </span>
                <Button type={"text"} icon={<CloseOutlined/>} onClick={onClose}/>
            </div>
            <div className={""}>
                {children}
            </div>
        </div>
    )
}

export default WidgetCard