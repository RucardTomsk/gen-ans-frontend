import React from "react";
import {Button, Input} from "antd";
import {SendOutlined} from "@ant-design/icons";
import MessageItem from "./MessageItem.tsx";

const messages = [
    {
        id: "243",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        time: "2023-01-01T11:43:00.000Z",
        isView: true,
        isUserMessage: true
    },
    {
        id: "6346",
        text: "Amet nisl purus in mollis nunc sed id semper. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan.",
        time: "2023-01-01T11:43:00.000Z",
        isView: true,
        isUserMessage: false
    },
    {
        id: "333",
        text: "Amet nisl purus in mollis nunc sed id semper. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan.",
        time: "2023-01-01T11:43:00.000Z",
        isView: true,
        isUserMessage: true
    },
    {
        id: "3536",
        text: "Amet nisl purus in mollis nunc sed id semper. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan.",
        time: "2023-01-01T11:43:00.000Z",
        isView: true,
        isUserMessage: true
    },
    {
        id: "66666",
        text: "Amet nisl purus in mollis nunc sed id semper. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan.",
        time: "2023-01-01T11:43:00.000Z",
        isView: true,
        isUserMessage: true
    },
    {
        id: "7457",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        time: "2023-01-01T11:43:00.000Z",
        isView: true,
        isUserMessage: false
    },
    {
        id: "4",
        text: "a",
        time: "2023-01-01T11:43:00.000Z",
        isView: false,
        isUserMessage: false
    },
    {
        id: "3",
        text: "Нужно завтра обсудить бизнес-возможности, у меня есть пару идей.",
        time: "2023-01-01T11:43:00.000Z",
        isView: false,
        isUserMessage: true
    },
]
const MessageArea: React.FC = ({

      }) => {

    return (
        <div className={"h-[500px] px-2 flex flex-col justify-between"}>
            <div className={"flex flex-col gap-2 overflow-y-auto"}>
                {
                    messages.map(it =>
                        <MessageItem
                            id={it.id}
                            text={it.text}
                            time={it.time}
                            isView={it.isView}
                            isUserMessage={it.isUserMessage}
                            key={it.id}
                        />)
                }
            </div>
            <div className={"flex items-end gap-2 py-2"}>
                <Input.TextArea autoSize={{minRows: 1, maxRows: 5}} placeholder={"Сообщение..."}/>
                <Button icon={<SendOutlined className={"ml-0.5"}/>} shape={"circle"} type={"primary"}/>
            </div>
        </div>
    )
}

export default MessageArea;