import {Button, Modal, Typography} from "antd";
import InputControl from "../../../../components/input/InputControl.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {validators} from "../../../../helpers/validators.ts";
import TextAreaControl from "../../../../components/input/TextAreaControl.tsx";
import {useProject} from "../hooks/useProject.ts";

interface EditProjectModalProps {
    isOpen?: boolean,
    onClose?(): void,
    defaultValues: EditProjectForm
}

type EditProjectForm = {
    name: string,
    description: string,
}

const EditProjectModal = (props: EditProjectModalProps) => {

    const {
        isOpen,
        onClose,
        defaultValues
    } = props;

    const {edit} = useProject();

    const {
        control,
        handleSubmit,
    } = useForm<EditProjectForm>({defaultValues});

    const onSubmit: SubmitHandler<EditProjectForm> = (data) => {
        edit.mutateAsync(data).then(() => {
            onClose && onClose();
        })
    }

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            title={<Typography.Text className={"text-xl text-cyan-700"}>{"Редактировать проект"}</Typography.Text>}
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

export default EditProjectModal;