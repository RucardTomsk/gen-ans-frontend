import {Checkbox, Input, Modal, Select, Typography} from "antd";
import InputControl from "../../../../components/input/InputControl.tsx";

interface AddModalProps {
    isOpen?: boolean,
    onClose?(): void
}
const AddModal = (props:AddModalProps) => {

    const {isOpen, onClose} = props;

    return (
        <Modal
            open={isOpen}
            onCancel={onClose}
            title={<Typography.Text className={"text-xl text-cyan-700"}>{"Создать исследование"}</Typography.Text>}
            okText={"Создать"}
            okButtonProps={{
                title: "Создать"
            }}
        >
            <div className={"pt-3 flex flex-col gap-3"}>
                <div className={"flex flex-col gap-1"}>
                    <Typography.Text>Название исследование</Typography.Text>
                    <Input/>
                </div>
                <div className={"flex flex-col gap-1"}>
                    <Typography.Text>Сотрудники</Typography.Text>
                    <Select mode={"multiple"}/>
                </div>
                <div className={"flex flex-col gap-1"}>
                    <Typography.Text>Читатели</Typography.Text>
                    <Select mode={"multiple"}/>
                </div>
                <div className={"flex gap-3"}>
                    <Checkbox/>
                    <Typography.Text>Открытое исследование</Typography.Text>
                </div>
            </div>
        </Modal>
    )
}

export default AddModal;