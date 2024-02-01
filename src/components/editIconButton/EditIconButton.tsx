import React from "react";
import {EditOutlined} from "@ant-design/icons";
import {Tooltip} from "antd";
import {useTranslation} from "react-i18next";

interface Props {
    onClick?(): void
}
const EditIconButton: React.FC<Props> = ({onClick}) => {

    const {t} = useTranslation("translation", {keyPrefix: "components.editIconButton"});

    return (
        <Tooltip title={t("toChange")}>
            <EditOutlined
                className={"ml-1 transition cursor-pointer text-black hover:text-sky-400"}
                onClick={onClick}
            />
        </Tooltip>
    )
}

export default EditIconButton;