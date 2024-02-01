import React from "react";

interface Props {
    src?: string,
    size?: number,
    color?: string,
    className?: string
}
const IconURL: React.FC<Props> = ({
      src,
      size = 20,
      className
    }) => {

    return (
        <img src={src} width={size} height={size} alt={"icon"} className={`brightness-0 ${className}`}/>
    )
}
export default IconURL
