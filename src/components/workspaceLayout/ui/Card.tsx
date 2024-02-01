import React from "react";

interface Props {
    children?: React.ReactNode,
    className?: string
}
const Card: React.FC<Props> = ({children, className}) => {
    return (
        <div className={`bg-white rounded-2xl sm:rounded-lg shadow-md p-5 ${className}`}>
            { children }
        </div>
    )
}

export default Card;