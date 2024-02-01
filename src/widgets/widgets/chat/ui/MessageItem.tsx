import React from "react";
import {Typography} from "antd";

interface Props {
    id: string,
    text: string,
    time: string,
    isView: boolean,
    isUserMessage: boolean
}
const MessageItem: React.FC<Props> = ({
        id,
        time,
        text,
        isUserMessage,
        isView
    }) => {

    return (
        <div className={`pr-2 flex ${isUserMessage ? "justify-end" : ""}`}>
            <div className={`relative flex justify-between max-w-[75%] gap-1 ${isUserMessage ? "bg-blue-100" : "bg-stone-100"} rounded-md px-2.5 py-0.5`}>
                <Typography.Text>{text}</Typography.Text>
                <div className={"flex items-end"}>
                    <Typography.Text type={"secondary"} className={"w-max text-xs"}>{getFormattedDate(time)}</Typography.Text>
                </div>
                { !isView
                    ? <span className={"absolute right-0 bottom-0 -m-1 h-2 w-2 border-2 border-white border-solid rounded-full bg-sky-500"}/>
                    : undefined
                }
            </div>
        </div>
    )
}

function getFormattedDate(data: string) {
    return data.slice(11, 16)
}

export default MessageItem