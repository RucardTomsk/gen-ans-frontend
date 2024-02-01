import {Typography} from "antd";
import React from "react";
import bgLink from "./image.jpg";
import {convertDateStringToNormalString} from "../../../../helpers/stringHelpers.ts";
import {generatePath, Link} from "react-router-dom";
import {Links} from "../../../../constants/links.ts";

interface CardProps {
    image?: string,
    id: string,
    date?: string,
    name?: string,
    description?: string
}
const ProjectCard = (props: CardProps) =>  {

    const {
        image,
        id,
        date,
        name,
        description
    } = props;

    return (
        <Link
            to={generatePath(Links.Authorized.Project, {id})}
            className={"flex flex-col no-underline bg-white shadow-md rounded-md cursor-pointer hover:brightness-95 transition"}
        >
            <div
                className={"flex h-32 rounded-t-md w-full bg-cover bg-center"}
                style={{backgroundImage: `url(${image || bgLink})`}}
            />
            <div className={"flex flex-1 flex-col p-2"}>
                <div className={"flex flex-col text-center "}>
                    <Typography.Text strong>{name}</Typography.Text>
                    <Typography.Text type={"secondary"}>{description}</Typography.Text>
                </div>
                <div className={"flex flex-1 justify-end items-end text-end"}>
                    <Typography.Text italic type={"secondary"} className={""}>{convertDateStringToNormalString(date, "DAY_MONTH_YEAR", "short")}</Typography.Text>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard;