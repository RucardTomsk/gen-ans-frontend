import {Button, Modal, Typography} from "antd";
import InputControl from "../../../../components/input/InputControl.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {validators} from "../../../../helpers/validators.ts";
import TextAreaControl from "../../../../components/input/TextAreaControl.tsx";
import {useEffect} from "react";
import {EditMineral} from "../../../../services/material/models/EditMineral.ts";
import {useSlice} from "../hooks/useSlice.ts";
import ColorPickerControl from "../../../../components/input/ColorPickerControl.tsx";

interface EditPhotoModalProps {
    isOpen?: boolean,
    onClose?(): void,
    defaultValues: EditMineral,
    mineralId: string
}

type EditPhotoForm = {
    name: string,
    description: string,
    color: string
}

const EditMineralModal = (props: EditPhotoModalProps) => {

    const {
        isOpen,
        onClose,
        defaultValues,
        mineralId
    } = props;

    const {editMineral} = useSlice();

    const {
        control,
        handleSubmit,
        setValue
    } = useForm<EditPhotoForm>({defaultValues});

    const onSubmit: SubmitHandler<EditPhotoForm> = (data) => {
        editMineral.mutateAsync({mineralId, data}).then(() => {
            onClose && onClose();
        })
    }

    useEffect(() => {
        setValue("name", defaultValues.name);
        setValue("description", defaultValues.description);
        setValue("color", defaultValues.color);
    }, [defaultValues])

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            title={<Typography.Text className={"text-xl text-cyan-700"}>{"Редактировать минерал"}</Typography.Text>}
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
                <div className={"flex flex-col gap-1 w-max"}>
                    <Typography.Text strong>Цвет</Typography.Text>
                    <ColorPickerControl
                        name={"color"} control={control}
                        rules={{required: validators.required}}
                        showText
                    />
                </div>
                <div className={"flex flex-col gap-2 mt-3"}>
                    <Button type={"primary"} htmlType={"submit"} loading={editMineral.isPending}>Сохранить</Button>
                    <Button disabled={editMineral.isPending} onClick={onClose}>Отмена</Button>
                </div>
            </form>
        </Modal>
    )
}

export default EditMineralModal;