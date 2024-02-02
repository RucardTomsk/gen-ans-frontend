import {Button, Modal, Typography} from "antd";
import InputControl from "../../../../components/input/InputControl.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {validators} from "../../../../helpers/validators.ts";
import TextAreaControl from "../../../../components/input/TextAreaControl.tsx";
import React from "react";
import {useSlice} from "../hooks/useSlice.ts";
import ColorPickerControl from "../../../../components/input/ColorPickerControl.tsx";

interface AddPhotoModalProps {
    isOpen?: boolean,
    onClose?(): void
}

type AddPhotoForm = {
    name: string,
    description: string,
    color: string
}

const AddMineralModal = (props: AddPhotoModalProps) => {

    const {isOpen, onClose} = props;
    const {createMineral} = useSlice();

    const {
        control,
        handleSubmit
    } = useForm<AddPhotoForm>();
    const onSubmit: SubmitHandler<AddPhotoForm> = (data) => {
        createMineral.mutateAsync(data).then(() => {
            onClose && onClose();
        })
    }

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            title={<Typography.Text className={"text-xl text-cyan-700"}>{"Добавить срез"}</Typography.Text>}
            footer={null}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={"pt-3 flex flex-col gap-3"}
            >
                <div className={"flex flex-col gap-1"}>
                    <Typography.Text strong>Название</Typography.Text>
                    <InputControl
                        name={"name"} control={control}
                        rules={{required: validators.required}}
                    />
                </div>
                <div className={"flex flex-col gap-1"}>
                    <Typography.Text strong>Описание</Typography.Text>
                    <TextAreaControl
                        name={"description"} control={control}
                        autoSize={{minRows: 3, maxRows: 15}}
                        rules={{required: validators.required}}
                    />
                </div>
                <div className={"flex flex-col gap-1"}>
                    <Typography.Text strong>Цвет</Typography.Text>
                    <ColorPickerControl
                        name={"color"} control={control}
                        rules={{required: validators.required}}
                        showText
                    />
                </div>
                <div className={"flex flex-col gap-2 mt-3"}>
                    <Button type={"primary"} htmlType={"submit"} loading={createMineral.isPending}>Добавить</Button>
                    <Button disabled={createMineral.isPending} onClick={onClose}>Отмена</Button>
                </div>
            </form>
        </Modal>
    )
}

export default AddMineralModal;