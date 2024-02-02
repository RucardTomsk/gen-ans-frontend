import {Button, Modal, Typography} from "antd";
import InputControl from "../../../../components/input/InputControl.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {validators} from "../../../../helpers/validators.ts";
import TextAreaControl from "../../../../components/input/TextAreaControl.tsx";
import {useEnrichedPhoto} from "../hooks/useEnrichedPhoto.ts";
import React from "react";

interface AddPhotoModalProps {
    isOpen?: boolean,
    onClose?(): void
}

type AddPhotoForm = {
    name: string,
    description: string,
    file: File
}

const AddPhotoModal = (props: AddPhotoModalProps) => {

    const {isOpen, onClose} = props;
    const {add} = useEnrichedPhoto();

    const {
        control,
        handleSubmit,
        setValue
    } = useForm<AddPhotoForm>();

    const onChangePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.files &&
        setValue("file", event?.target.files[0])
    }

    const onSubmit: SubmitHandler<AddPhotoForm> = (data) => {
        add.mutateAsync(data).then(() => {
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
                    <Typography.Text strong>Изображение</Typography.Text>
                    <div className={"edit-profile-avatar"}>
                        <input type={"file"} id="avatar-input" onChange={onChangePhoto}
                               accept="image/png, image/gif, image/jpeg"/>
                        <label htmlFor="avatar-input">
                            {/*<img src={getFileLinkToView(userData.photoId)} alt=""/>*/}
                        </label>
                    </div>
                </div>
                <div className={"flex flex-col gap-2 mt-3"}>
                    <Button type={"primary"} htmlType={"submit"} loading={add.isPending}>Добавить</Button>
                    <Button disabled={add.isPending} onClick={onClose}>Отмена</Button>
                </div>
            </form>
        </Modal>
    )
}

export default AddPhotoModal;