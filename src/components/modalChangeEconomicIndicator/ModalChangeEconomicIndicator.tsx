import React from "react";
import {Input, Modal, Typography} from "antd";
import {useTranslation} from "react-i18next";

interface Props {
    open: boolean,
    onClose(): void,
    indicatorName?: string
}
const ModalChangeEconomicIndicator: React.FC<Props> = ({
        open,
        onClose,
        indicatorName
   }) => {

    const { t } = useTranslation("translation", { keyPrefix: "components.modalChangeEconomicIndicator" });

    return (
        <Modal
            title={t("changeEconomicIndicator")}
            open={open}
            onOk={onClose}
            onCancel={onClose}
            maskClosable={false}
            okText={t("toSend")}
        >
            <div className={"flex flex-col gap-2"}>
                <Typography.Text strong>{indicatorName}</Typography.Text>
                <Typography.Text>{t("explanationInstructions")}</Typography.Text>
                <Input.TextArea autoSize={{minRows: 5, maxRows: 5}} placeholder={t("enterExplanation")}/>
            </div>
        </Modal>
    )
}

export default ModalChangeEconomicIndicator