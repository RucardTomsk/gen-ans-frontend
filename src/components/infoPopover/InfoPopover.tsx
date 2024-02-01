import React from "react";
import {useTranslation} from "react-i18next";
import {Button, Popconfirm} from "antd";
import {InfoCircleOutlined} from "@ant-design/icons";

interface Props {
    title?: string,
    description?: React.ReactNode
}
const InfoPopover: React.FC<Props> = ({title, description}) => {

    const {t} = useTranslation("translation", {keyPrefix: "components.infoPopover"});

    return (
        <Popconfirm
            title={title}
            description={description}
            okButtonProps={{className: "hidden"}}
            cancelText={t("clear")}
            rootClassName={"whitespace-pre-line"}
            icon={null}
        >
            <Button type={"text"} icon={<InfoCircleOutlined/>}/>
        </Popconfirm>
    )
}

export default InfoPopover;