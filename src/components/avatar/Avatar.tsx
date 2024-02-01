import React, {useEffect, useState} from "react";

interface AvatarProps {
    avatar?: string,
    label?: string,
    size?: string,
    className?: string
    rounded?: boolean
}

const Avatar: React.FC<AvatarProps> = ({
           avatar,
           label,
           size,
           className,
           rounded = true
       }) => {

    const [isAvatar, setIsAvatar] = useState<boolean>(!!avatar);
    const avatarSize = size ? size : "3rem";

    useEffect(() => {
        setIsAvatar(!!avatar)
    }, [avatar])

    return (
        <div style={{width: avatarSize, height: avatarSize}} className={`${className}`}>
            {
                isAvatar ? <img
                        src={avatar}
                        alt={""}
                        className={`h-full w-full object-cover ${rounded ? "rounded-full" : "rounded-lg"}`}
                        onError={() => setIsAvatar(false)}
                    /> :
                    <div className={`w-full h-full flex items-center justify-center bg-gray-200
                     ${rounded ? "rounded-full" : "rounded-lg"}`}>
                        <span style={{fontSize: `calc(${size} / 2.2)`}}>{getUpperCaseFirstLetterOfString(label)}</span>
                    </div>
            }
        </div>
    )
}

function getUpperCaseFirstLetterOfString(string?: string): string {
    if(!string) return ""
    return string.slice(0, 1).toUpperCase();
}

export default Avatar