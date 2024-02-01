import React, {useState} from "react";
import ChatList from "./ChatList.tsx";
import {Button, Typography} from "antd";
import MessageArea from "./MessageArea.tsx";
import {LeftOutlined} from "@ant-design/icons";
import WidgetCard from "../../../ui/WidgetCard.tsx";
import Avatar from "../../../../components/avatar/Avatar.tsx";

interface Props {
    onClose?(): void
}
const ChatWidget: React.FC<Props> = ({onClose}) => {

    const [selectedChat, setSelectedChat] = useState<string | undefined>(undefined)

    return (
        <WidgetCard
            onClose={onClose}
            title={
                !selectedChat
                    ? <Typography.Text strong>{"Чаты"}</Typography.Text>
                    : <MessageAreaTitle
                        onReturnChat={() => setSelectedChat(undefined)}
                        avatar={"https://sneg.top/uploads/posts/2023-06/1687465256_sneg-top-p-medved-na-avatarku-v-vatsap-dlya-muzhchin-10.jpg"}
                        name={"Миронов Александр"}
                    />
            }
        >
            <div className={"w-[500px]"}>
                {
                    selectedChat
                        ? <MessageArea/>
                        : <ChatList selectChat={(id: string) => setSelectedChat(id)}/>
                }
            </div>
        </WidgetCard>
    )
}

interface MessageAreaTitleProps {
    onReturnChat(): void,
    avatar?: string,
    name: string
}
const MessageAreaTitle: React.FC<MessageAreaTitleProps> = ({
        onReturnChat,
        avatar,
        name
    }) => {

    return (
        <div className={"flex items-center gap-1 py-1"}>
            <Button type={"text"} icon={<LeftOutlined />} onClick={onReturnChat}/>
            <div className={"flex gap-1 items-center"}>
                <Avatar avatar={avatar} label={name} rounded={false} size={"2rem"}/>
                <Typography.Text strong>{name}</Typography.Text>
            </div>
        </div>

    )
}

export default ChatWidget;