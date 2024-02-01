import React from "react";
import DocumentItem from "./DocumentItem.tsx";

const documents = [
    {
        id: "12",
        name: "Правила",
        size: "3.2 MB",
        extension: "pdf"
    },
    {
        id: "4242",
        name: "Памятка",
        size: "2.9 MB",
        extension: "pdf"
    },
    {
        id: "63464",
        name: "Описание региона",
        size: "9.8 MB",
        extension: "pdf"
    },
]
const DocumentsList: React.FC = () => {
    return (
        <div className={"w-96 flex flex-col px-3"}>
            {
                documents.map(it =>
                    <DocumentItem
                        id={it.id}
                        name={it.name}
                        size={it.size}
                        extension={it.extension}
                        key={it.id}
                    />)
            }
        </div>
    )
}

export default DocumentsList