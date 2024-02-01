import {Modal, Typography} from "antd";
import React from "react";
import {useSlice} from "../hooks/useSlice.ts";

interface RemoveModalProps {
    isOpen?: boolean,
    onClose?(): void,
    id: string
}
const RemoveMineralModal = (props: RemoveModalProps) => {

    const {
        isOpen,
        onClose,
        id
    } = props;

    const {deleteMineral} = useSlice();

    const onRemove = () => {
        deleteMineral.mutateAsync(id).then(() => {

        })
    }

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            title={"Вы уверены, что хотите удалить минерал?"}
            centered={true}
            confirmLoading={deleteMineral.isPending}
            onOk={onRemove}
            okButtonProps={{
                danger: true
            }}
        >
            <Typography.Text>Это действие будет невозможно отменить</Typography.Text>
        </Modal>
    )
}

export default RemoveMineralModal;