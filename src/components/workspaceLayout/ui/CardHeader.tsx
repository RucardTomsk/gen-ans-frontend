import React from "react";
import Breadcrumb from "../../breadcrumb/Breadcrumb.tsx";
import {Typography} from "antd";

interface Props {
    title?: string,
    link?: string,
    children?: React.ReactNode,
    extraClassName?: string,
    className?: string
}
const CardHeader: React.FC<Props> = ({
         title,
         link,
         children,
         className,
         extraClassName
    }) => {

    return (
        <div className={`bg-white rounded-2xl sm:rounded-lg shadow-md p-5 ${className}`}>
            <div className={"flex flex-col gap-5"}>
                <div className={"flex flex-col"}>
                    <Breadcrumb link={link || ""}/>
                    <Typography.Text strong className={"text-2xl"}>{title}</Typography.Text>
                </div>
                {
                    children &&
                    <div className={`pt-3 border-t border-t-stone-200 border-solid ${extraClassName}`}>
                        {children}
                    </div>
                }
            </div>
        </div>
    )
}

export default CardHeader;