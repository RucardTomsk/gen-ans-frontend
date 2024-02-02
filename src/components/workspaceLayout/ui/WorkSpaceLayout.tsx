import React, {ReactNode} from "react";
import Header from "./Header.tsx";

interface Props {
    children?: ReactNode,
}
const WorkSpaceLayout: React.FC<Props> = ({children}) => {

    return (
        <div className={"flex justify-center max-w-screen min-h-screen bg-gray-50"}>
            <div className={"flex flex-col w-full lg:w-4/5 min-h-screen bg-white shadow-2xl"}>
                <Header/>
                {children}
            </div>
        </div>
    )
}

export default WorkSpaceLayout;