import React, {ReactNode} from "react";
import {Typography} from "antd";
import {useTranslation} from "react-i18next";

import bgLink from "./../../pages/authorized/case/ui/image.jpg";

interface Props {
    children?: ReactNode
}
const LoginLayout: React.FC<Props> = ({children}) => {

    return (
        <div className={"flex flex-col lg:flex-row w-screen h-screen"}>
            <div className={"flex w-screen md:w-full bg-cover bg-center"} style={{backgroundImage: `url(${bgLink})`}}>
                <div className={"flex flex-col text-start w-full h-full bg-white/70 px-6 md:px-14 xl:px-28"}>
                    <Typography.Text strong className={"whitespace-pre-line text-cyan-700 text-xl md:text-4xl mt-6 md:mt-24"}>
                        {"GEN`ANS"}
                    </Typography.Text>
                    <Typography.Text className={"text-cyan-700 md:text-xl mb-12 mt-4"}>
                        {"Платформа для исследования"}
                    </Typography.Text>
                </div>
            </div>
            <div className={"flex flex-col mx-auto justify-between items-center md:w-max px-4 md:px-12 xl:px-32 bg-white"}>
                { children }
                <div className={"text-center my-3"}>
                    <Typography.Text className={"text-sm text-gray-400"}>
                        {"Центр Хериот-Ватт"} | {"Все права защищены"}
                    </Typography.Text>
                </div>
            </div>
        </div>
    )
}

export default LoginLayout;