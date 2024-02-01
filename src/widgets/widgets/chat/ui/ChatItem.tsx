import React from "react";
import {Typography} from "antd";
import Avatar from "../../../../components/avatar/Avatar.tsx";

interface Props {
    id: string,
    name: string,
    avatar: string,
    lastMessage?: string,
    lastMessageSenderId?: string,
    countUnreadMessages: number,
    dateLastMessage?: string,
    onClick(): void
}
const ChatItem: React.FC<Props> = ({
        id,
        name,
        avatar,
        lastMessage,
        lastMessageSenderId,
        countUnreadMessages,
        dateLastMessage,
        onClick
    }) => {

    const userId = "1";

    return (
        <div className={"flex items-center gap-2 hover:bg-stone-50 duration-200 py-2 px-3 transition rounded-md cursor-pointer"}
             onClick={onClick}
        >
            <div className={"flex"}>
                <Avatar avatar={avatar} label={name} rounded={false}/>
            </div>
            <div className={"flex flex-col flex-1"}>
                <div className={"flex justify-between"}>
                    <Typography.Text strong>{name}</Typography.Text>
                    {
                        dateLastMessage &&
                        <Typography.Text type={"secondary"}>{getFormattedDate(dateLastMessage)}</Typography.Text>
                    }
                </div>
                <div className={"flex justify-between flex-1"}>
                    <Typography.Text type={"secondary"} ellipsis={true} className={"w-96"}>
                        {lastMessage ? userId === lastMessageSenderId ? `Вы: ${lastMessage}` : lastMessage : "Новый чат"}
                    </Typography.Text>
                    { countUnreadMessages
                        ? <span className={"flex justify-center items-center text-white h-5 px-1.5 rounded-full bg-sky-500 text-xs mr-1"}>{countUnreadMessages}</span>
                        : undefined
                    }
                </div>
            </div>
        </div>
    )
}

function getFormattedDate(data: string) {
    return data.slice(11, 16)
}

export default ChatItem;