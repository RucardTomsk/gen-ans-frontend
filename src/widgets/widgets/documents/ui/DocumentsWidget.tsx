import React from "react";
import {Typography} from "antd";
import DocumentsList from "./DocumentsList.tsx";
import WidgetCard from "../../../ui/WidgetCard.tsx";

interface Props {
    onClose?(): void
}
const DocumentsWidget: React.FC<Props> = ({onClose}) => {
    return (
        <WidgetCard
            onClose={onClose}
            title={<Typography.Text strong>{"Документы"}</Typography.Text>}
        >
            <div>
                <DocumentsList/>
            </div>
        </WidgetCard>
    )
}

export default DocumentsWidget