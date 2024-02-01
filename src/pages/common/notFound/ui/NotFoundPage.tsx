import React from "react";
import {Typography} from "antd";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const NotFoundPage: React.FC = () => {

    const { t } = useTranslation("translation", { keyPrefix: "pages.notFound" });

    return (
        <div className={"flex justify-center items-center h-screen w-screen bg-sky-600"}>
            <div className={"flex flex-col -mt-32 p-5"}>
                <Typography.Text className={"text-white mb-5 pb-5 text-8xl border-b-2 border-b-white border-solid"}>{"404"}</Typography.Text>
                <Typography.Text className={"text-white text-lg"}>{t("addressNotFound")}</Typography.Text>
                <Link to={"/"} className={"text-white text-lg"}>{t("toMain")}</Link>
            </div>

        </div>
    )
}

export default NotFoundPage;