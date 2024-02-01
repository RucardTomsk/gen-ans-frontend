import React, {useState} from "react";
import {useCase} from "../hooks/useCase.ts";
import {Typography} from "antd";
import Card from "./Card.tsx";
import AddCard from "./AddCard.tsx";
import AddModal from "./AddModal.tsx";

const DATA = [
    {
        date: "01 01 2023",
        description: "Описание"
    },
    {
        date: "01 01 2023",
        description: "Описание"
    },
    {
        date: "01 01 2023",
        description: "Описание"
    },
    {
        date: "01 01 2023",
        description: "Описание"
    },
    {
        date: "01 01 2023",
        description: "Описание"
    },
    {
        date: "01 01 2023",
        description: "Описание"
    },
    {
        date: "01 01 2023",
        description: "Описание"
    },
    {
        date: "01 01 2023",
        description: "Описание"
    },
    {
        date: "01 01 2023",
        description: "Описание"
    },
    {
        date: "01 01 2023",
        description: "Описание"
    },
    {
        date: "01 01 2023",
        description: "Описание"
    },
]
const CasePage: React.FC = () => {

    const {data, isLoading, isError} = useCase();
    const [isOpen, setIsOpen] = useState(false);

    // if (isError) return <div></div>

    return (
        <div className={"flex gap-10 flex-col items-center p-10"}>
            <div className={"flex w-full"}>
                <Typography.Text strong className={"text-3xl text-cyan-700"}>ИССЛЕДОВАНИЯ</Typography.Text>
            </div>
            <div className={"w-full grid grid-cols-4 gap-5"}>
                <AddCard onClick={() => setIsOpen(true)}/>
                {
                    DATA.map((it, index) =>
                        <Card date={it.date} description={it.description}/>
                    )
                }
            </div>
            <AddModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
        </div>
    )
}

export default CasePage;