import {Button, Dropdown, MenuProps, Radio, Typography} from "antd";
import {DeleteOutlined, EditOutlined, EllipsisOutlined, PlusOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import {MineralDto} from "../../../../services/material/models/MineralsDto.ts";
import AddMineralModal from "./AddMineralModal.tsx";
import EditMineralModal from "./EditMineralModal.tsx";
import RemoveMineralModal from "./RemoveMineralModal.tsx";

interface Props {
    setSelectedMineral(id:string): void,
    minerals: MineralDto[],
    selectedMineral: string
}

const items: MenuProps['items'] = [
    {
        key: 'edit',
        label: "Редакировать",
        icon: <EditOutlined/>
    },
    {
        key: 'remove',
        label: "Удалить",
        icon: <DeleteOutlined/>,
        danger: true,
    }
];
const Minerals = (props: Props) => {

    const {
        minerals,
        setSelectedMineral,
        selectedMineral
    } = props;

    const [isOpenAdd, setIsOpenAdd] = useState(false);
    const [isOpenRemove, setIsOpenRemove] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [editingMineral, setEditingMineral] = useState("")

    const getDefaultValues = () => {
        const data =
            minerals.find(it => it.id === editingMineral)
        return ({name: data?.name || "", description: data?.description || "", color: data?.color || ""})
    }

    return (
        <div className={"flex flex-col gap-1"}>
            <div className={"flex flex-1 gap-3 flex-wrap"}>
                <Typography.Text strong={true} type={"secondary"} className={"text-lg mb-1"}>ДОСТУПНЫЕ МИНЕРАЛЫ</Typography.Text>
                <Button icon={<PlusOutlined/>} onClick={() => setIsOpenAdd(true)}/>
            </div>
            <Radio.Group onChange={(e) => setSelectedMineral(e.target.value)} value={selectedMineral}>
                <div className={"flex flex-col gap-2"}>
                    {
                        minerals.map(it =>
                            <Radio value={it.id} key={it.id} >
                                <div className={"flex justify-between items-start gap-2"}>
                                    <div className={"flex gap-2"}>
                                        <span className={"mt-2 shadow-md w-5 h-5 rounded-full"} style={{backgroundColor: it.color}}></span>
                                        <div className={"flex flex-col"}>
                                            <Typography.Text strong={true}>Название: {it.name}</Typography.Text>
                                            <Typography.Text>Описание: {it.description}</Typography.Text>
                                        </div>
                                    </div>
                                    <Dropdown
                                        menu={{
                                            items, onClick: ({key}) => {
                                                if (key === "edit") {
                                                    setEditingMineral(it.id)
                                                    setIsOpenEdit(true)
                                                }
                                                else if (key === "remove") setIsOpenRemove(true);
                                            }}}
                                        className={""}>
                                        <EllipsisOutlined rotate={90} className={"text-2xl"} />
                                    </Dropdown>
                                </div>
                            </Radio>
                        )
                    }
                </div>

            </Radio.Group>
            <AddMineralModal isOpen={isOpenAdd} onClose={() => setIsOpenAdd(false)}/>
            <EditMineralModal
                defaultValues={getDefaultValues()} mineralId={editingMineral}
                isOpen={isOpenEdit} onClose={() => setIsOpenEdit(false)}
            />
            <RemoveMineralModal isOpen={isOpenRemove} id={editingMineral} onClose={() => setIsOpenRemove(false)}/>
        </div>
    )
}

export default Minerals;