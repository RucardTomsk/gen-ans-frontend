import {useProject} from "../hooks/useProject.ts";
import {useNavigate} from "react-router-dom";
import {Links} from "../../../../constants/links.ts";
import {Modal, Typography} from "antd";
import React from "react";

interface RemoveModalProps {
    isOpen?: boolean,
    onClose?(): void
}
const RemoveModal = (props: RemoveModalProps) => {

    const {
        isOpen,
        onClose
    } = props;

    const {remove} = useProject();
    const navigate = useNavigate();

    const onRemove = () => {
        remove.mutateAsync().then(() => {
            navigate(Links.Authorized.Projects);
        })
    }

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            title={"Вы уверены, что хотите удалить проект?"}
            centered={true}
            confirmLoading={remove.isPending}
            onOk={onRemove}
            okButtonProps={{
                danger: true
            }}
        >
            <Typography.Text>Это действие будет невозможно отменить</Typography.Text>
        </Modal>
    )
}

export default RemoveModal;