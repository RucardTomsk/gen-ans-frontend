import {Button, Modal, Typography} from "antd";
import InputControl from "../../../../components/input/InputControl.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {validators} from "../../../../helpers/validators.ts";
import TextAreaControl from "../../../../components/input/TextAreaControl.tsx";
import {useEnrichedPhoto} from "../hooks/useEnrichedPhoto.ts";
import {EditEnrichedPhotoDto} from "../../../../services/segmentation/models/EditEnrichedPhotoDto.ts";
import {useEffect} from "react";

interface EditPhotoModalProps {
    isOpen?: boolean,
    onClose?(): void,
    defaultValues: EditEnrichedPhotoDto,
    photoId: string
}

type EditPhotoForm = {
    name: string,
    description: string,
}

const EditPhotoModal = (props: EditPhotoModalProps) => {

    const {
        isOpen,
        onClose,
        defaultValues,
        photoId
    } = props;

    const {edit} = useEnrichedPhoto();


    const {
        control,
        handleSubmit,
        setValue
    } = useForm<EditPhotoForm>({defaultValues});

    const onSubmit: SubmitHandler<EditPhotoForm> = (data) => {
        edit.mutateAsync({id: photoId, data}).then(() => {
            onClose && onClose();
        })
    }

    useEffect(() => {
        setValue("name", defaultValues.name);
        setValue("description", defaultValues.description);
    }, [defaultValues])


    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            title={<Typography.Text className={"text-xl text-cyan-700"}>{"Редактировать срез"}</Typography.Text>}
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
                <div className={"flex flex-col gap-2 mt-3"}>
                    <Button type={"primary"} htmlType={"submit"} loading={edit.isPending}>Сохранить</Button>
                    <Button disabled={edit.isPending} onClick={onClose}>Отмена</Button>
                </div>
            </form>
        </Modal>
    )
}

export default EditPhotoModal;