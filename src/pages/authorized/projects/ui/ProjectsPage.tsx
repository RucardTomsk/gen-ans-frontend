import React, {useState} from "react";
import {useProjects} from "../hooks/useProjects.ts";
import {Skeleton, Typography} from "antd";
import ProjectCard from "./ProjectCard.tsx";
import AddProjectCard from "./AddProjectCard.tsx";
import AddProjectModal from "./AddProjectModal.tsx";

const ProjectsPage: React.FC = () => {

    const {data, isLoading, isError} = useProjects();
    const [isOpen, setIsOpen] = useState(false);

    if (isError) return <div>ОШИБКА</div>

    if (isLoading) return <Skeleton className={"p-10"}/>

    return (
        <div className={"flex gap-10 flex-col items-center p-10"}>
            <div className={"flex w-full"}>
                <Typography.Text strong className={"text-3xl text-cyan-700"}>ИССЛЕДОВАТЕЛЬСКИЕ ПРОЕКТЫ</Typography.Text>
            </div>
            <div className={"w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"}>
                <AddProjectCard onClick={() => setIsOpen(true)}/>
                {
                    data?.projects.map(it =>
                        <ProjectCard
                            key={it.id}
                            id={it.id}
                            name={it.name}
                            date={it.created_at}
                            description={it.description}
                        />
                    )
                }
            </div>
            <AddProjectModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
        </div>
    )
}

export default ProjectsPage;