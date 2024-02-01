import {Button, Checkbox, Input, Modal, Select, Typography} from "antd";
import InputControl from "../../../../components/input/InputControl.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {useCreateProject} from "../hooks/useCreateProject.ts";
import {validators} from "../../../../helpers/validators.ts";
import TextAreaControl from "../../../../components/input/TextAreaControl.tsx";
import {generatePath, useNavigate} from "react-router-dom";
import {Links} from "../../../../constants/links.ts";

interface AddModalProps {
    isOpen?: boolean,
    onClose?(): void
}

type CreateProjectForm = {
    name: string,
    description: string,
}

const AddProjectModal = (props:AddModalProps) => {

    const {isOpen, onClose} = props;
    const navigate = useNavigate();
    const {mutateAsync: createProject, isPending} = useCreateProject();

    const {
        control,
        handleSubmit,
    } = useForm<CreateProjectForm>();

    const onSubmit: SubmitHandler<CreateProjectForm> = (data) => {
        createProject(data).then((res) => {
            navigate(generatePath(Links.Authorized.Project, {id: res.data.ID}))
        })
    }

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            title={<Typography.Text className={"text-xl text-cyan-700"}>{"Создать исследование"}</Typography.Text>}
            okText={"Создать"}
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
                    <Button type={"primary"} htmlType={"submit"} loading={isPending}>Создать</Button>
                    <Button disabled={isPending} onClick={onClose}>Отмена</Button>
                </div>
            </form>
        </Modal>
    )
}

export default AddProjectModal;