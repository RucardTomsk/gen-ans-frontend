import {Typography} from "antd";
import {PlusOutlined} from "@ant-design/icons";

interface AddCardProps {
    onClick?(): void
}
const AddProjectCard = (props: AddCardProps) => {

    const {onClick} = props;

    return (
        <div
            className={"flex flex-col gap-3 items-center justify-center rounded-md border-2 border-cyan-700 border-solid cursor-pointer hover:bg-opacity-5 hover:bg-cyan-700 transition"}
            onClick={onClick}
        >
            <PlusOutlined className={"text-cyan-700 text-3xl"}/>
            <Typography.Text strong className={"text-cyan-700 text-center whitespace-pre"}>{`СОЗДАТЬ \nПРОЕКТ`}</Typography.Text>
        </div>
    )
}

export default AddProjectCard;