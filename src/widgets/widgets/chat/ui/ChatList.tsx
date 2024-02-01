import React from "react";
import ChatItem from "./ChatItem.tsx";

const chats = [
    {
        id: "3252343743743735",
        name: "Куратор",
        avatar: "https://www.svgrepo.com/show/449500/hat.svg",
        lastMessageSenderId: "1",
        lastMessage: "Здравствуйте! Подскажите, в документе сказано, что всё будет хорошо",
        countUnreadMessages: 0,
        dateLastMessage: "2023-01-01T00:00:00.000Z"
    },
    {
        id: "7",
        name: "Чат команды",
        avatar: "https://www.svgrepo.com/show/449088/group.svg",
        lastMessageSenderId: "1",
        lastMessage: "Ребята, молодцы! Успеваем в срок",
        countUnreadMessages: 0,
        dateLastMessage: "2023-01-01T00:12:55.000Z"
    },
    {
        id: "32537437743235",
        name: "Миронов Александр",
        avatar: "https://sneg.top/uploads/posts/2023-06/1687465256_sneg-top-p-medved-na-avatarku-v-vatsap-dlya-muzhchin-10.jpg",
        lastMessageSenderId: "1",
        lastMessage: "Нужно завтра обсудить бизнес-возможности, у м",
        countUnreadMessages: 0,
        dateLastMessage: "2023-01-01T11:43:00.000Z"
    },
    {
        id: "3333",
        name: "Сидоров Иван Валерьевич",
        avatar: "https://pixelbox.ru/wp-content/uploads/2021/09/avatar-boys-vk-60-scaled.jpg",
        lastMessageSenderId: "",
        lastMessage: "Посмотри мои правки ",
        countUnreadMessages: 1,
        dateLastMessage: "2023-01-01T22:06:00.000Z"
    },
    {
        id: "325235",
        name: "Иванов Захар Олегович",
        avatar: "https://pristor.ru/wp-content/uploads/2019/02/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8-%D0%B8-%D0%BA%D0%BE%D1%88%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%83-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-3-1024x769.jpg",
        lastMessageSenderId: "",
        lastMessage: undefined,
        countUnreadMessages: 0,
        dateLastMessage: undefined
    },
    {
        id: "4757574547",
        name: "Никитин Максим",
        avatar: "https://pristor.ru/wp-content/uploads/2019/02/%D0%9A%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D0%B8-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D1%80%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%B4%D0%BB%D1%8F-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-11.jpg",
        lastMessageSenderId: "",
        lastMessage: "Хорошо, завтра доделаю",
        countUnreadMessages: 3,
        dateLastMessage: "2023-01-01T07:00:00.000Z"
    },
]

interface Props {
    selectChat(id: string): void
}
const ChatList: React.FC<Props> = ({
        selectChat
    }) => {

    return (
        <div className={"flex flex-col"}>
            {
                chats.map(it =>
                    <ChatItem
                        id={it.id}
                        name={it.name}
                        avatar={it.avatar}
                        countUnreadMessages={it.countUnreadMessages}
                        lastMessage={it.lastMessage}
                        lastMessageSenderId={it.lastMessageSenderId}
                        dateLastMessage={it.dateLastMessage}
                        key={it.id}
                        onClick={() => selectChat(it.id)}
                    />
                )
            }
        </div>
    )
}

export default ChatList;