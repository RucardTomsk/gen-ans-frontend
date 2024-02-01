import {useNavigate} from "react-router-dom";
import {Links} from "../../../../constants/links.ts";
import {Modal, Typography} from "antd";
import React from "react";
import {useEnrichedPhoto} from "../hooks/useEnrichedPhoto.ts";

interface RemoveModalProps {
    isOpen?: boolean,
    photoId: string,
    onClose?(): void
}
const RemoveModal = (props: RemoveModalProps) => {

    const {
        isOpen,
        onClose,
        photoId
    } = props;

    const {remove} = useEnrichedPhoto();
    const navigate = useNavigate();

    const onRemove = () => {
        remove.mutateAsync(photoId).then(() => {
            navigate(Links.Authorized.Projects);
        })
    }

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            title={"Вы уверены, что хотите удалить срез?"}
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