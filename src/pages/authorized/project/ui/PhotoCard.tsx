import {Dropdown, MenuProps, Typography} from "antd";
import React from "react";
import {convertDateStringToNormalString} from "../../../../helpers/stringHelpers.ts";
import {generatePath, Link, useParams} from "react-router-dom";
import {Links} from "../../../../constants/links.ts";
import {DeleteOutlined, EditOutlined, EllipsisOutlined} from "@ant-design/icons";

interface CardProps {
    image?: string,
    id: string,
    date?: string,
    name?: string,
    description?: string,
    onAction(id: string, action: "remove" | "edit"): void
}

const items: MenuProps['items'] = [
    {
        key: 'edit',
        label: "Редакировать",
        icon: <EditOutlined/>
    },
    {
        key: 'remove',
        label: "Удалить",
        icon: <DeleteOutlined/>,
        danger: true,
    }
];
const PhotoCard = (props: CardProps) =>  {

    const {
        image,
        id,
        date,
        name,
        description,
        onAction
    } = props;

    const {id: projectId} = useParams();

    const onClick: MenuProps['onClick'] = ({ key }) => {
        if (key === "edit") onAction(id, "edit");
        else if (key === "remove") onAction(id, "remove");
    };

    return (
        <div
            className={"flex flex-col no-underline bg-white shadow-md cursor-pointer hover:brightness-95 transition"}
        >
            <div
                className={"flex relative items-end h-32 w-full bg-cover bg-center pt-16"}
                style={{backgroundImage: `url(${image})`}}
            >
                <Dropdown menu={{items, onClick}} className={"absolute top-1 right-1 bg-black/60 rounded-full p-1"}>
                    <EllipsisOutlined rotate={90} className={"text-white text-2xl"} />
                </Dropdown>
                <Link
                    to={generatePath(Links.Authorized.EnrichedPhoto, {projectId: projectId || "", id})}
                    className={"flex h-max flex-1 no-underline flex-col p-2 bg-black/60"}>
                    <div className={"flex flex-col text-center "}>
                        <Typography.Text strong className={"text-white"}>{name}</Typography.Text>
                        <Typography.Text className={"text-gray-200"}>{description}</Typography.Text>
                    </div>
                    <div className={"flex flex-1 justify-end items-end text-end"}>
                        <Typography.Text italic className={"text-gray-200"}>
                            {convertDateStringToNormalString(date, "DAY_MONTH_YEAR", "short")}
                        </Typography.Text>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default PhotoCard;