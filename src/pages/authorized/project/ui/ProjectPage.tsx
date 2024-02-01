import {useProject} from "../hooks/useProject.ts";
import React, {useState} from "react";
import {Button, Dropdown, MenuProps, Skeleton, Typography} from "antd";
import AddProjectModal from "../../projects/ui/AddProjectModal.tsx";
import {DeleteOutlined, EditOutlined, SettingOutlined} from "@ant-design/icons";
import PhotoCard from "./PhotoCard.tsx";
import AddPhotoCard from "./AddPhotoCard.tsx";
import RemoveModal from "./RemoveProjectModal.tsx";
import EditProjectModal from "./EditProjectModal.tsx";

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
const ProjectPage = () => {

    const {getData, edit} = useProject();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenRemove, setIsOpenRemove] = useState(false);

    console.log(getData.data)

    const onClick: MenuProps['onClick'] = ({ key }) => {
        if (key === "edit") setIsOpen(true);
        else if (key === "remove") setIsOpenRemove(true);
    };

    if (getData.isError) return <div>ОШИБКА</div>

    if (getData.isLoading) return <Skeleton className={"p-10"}/>

    return (
        <div className={"flex gap-10 flex-col items-center p-10"}>
            <div className={"flex flex-col gap-3 w-full"}>
                <div className={"flex gap-3 justify-between flex-wrap"}>
                    <Typography.Text strong className={"text-3xl text-cyan-700"}>{getData.data?.project.name.toUpperCase()}</Typography.Text>
                    <Dropdown menu={{ items, onClick }}>
                        <Button icon={<SettingOutlined/>}>Настройки</Button>
                    </Dropdown>
                </div>
                <Typography.Paragraph>{getData.data?.project.description}</Typography.Paragraph>
            </div>
            <div className={"w-full grid grid-cols-4 gap-5"}>
                <AddPhotoCard onClick={() => setIsOpen(true)}/>
                {
                    getData.data?.project.photos.map(it =>
                        <PhotoCard
                            key={it.id}
                            id={it.id}
                            image={it.url}
                            name={it.name}
                            date={it.created_at}
                            description={it.description}
                        />
                    )
                }
            </div>
            <EditProjectModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                defaultValues={{
                    name: getData?.data?.project.name || "",
                    description: getData?.data?.project.description || "",
                }}
            />
            <RemoveModal isOpen={isOpenRemove} onClose={() => setIsOpenRemove(false)}/>
        </div>
    )
}

export default ProjectPage;