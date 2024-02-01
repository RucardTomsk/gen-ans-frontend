import {Typography} from "antd";
import React from "react";
import bgLink from "./image.jpg";

interface CardProps {
    image?: string,
    date?: string,
    description?: string
}
const Card = (props: CardProps) =>  {

    const {
        image,
        date,
        description
    } = props;

    return (
        <div className={"bg-white shadow-md rounded-md cursor-pointer hover:brightness-95 transition"}>
            <div
                className={"h-32 rounded-t-md w-full bg-cover bg-center"}
                style={{backgroundImage: `url(${bgLink})`}}
            />
            <div className={"flex flex-col text-center p-2"}>
                <Typography.Text strong type={"secondary"} className={""}>{date}</Typography.Text>
                <Typography.Text strong className={""}>{description}</Typography.Text>
            </div>
        </div>
    )
}

export default Card;