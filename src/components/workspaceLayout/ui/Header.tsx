import React from "react";
import {Dropdown, MenuProps, Typography} from "antd";
import {useAuth} from "../../../providers/auth";
import {DownOutlined, LoginOutlined} from "@ant-design/icons";
import {Link, useNavigate} from "react-router-dom";
import {useUserData} from "../hooks/useUserData.ts";

const items: MenuProps['items'] = [
    {
        key: 'logout',
        label: "Выйти",
        icon: <LoginOutlined />,
        danger: true,
    }
];

const Header: React.FC = () => {

    const {signOut} = useAuth();
    const {data} = useUserData();

    const onClick: MenuProps['onClick'] = ({ key }) => {
        if (key === "logout") signOut();
    };

    return (
        <div className={"flex justify-between p-5 shadow-md"}>
            <div className={"flex gap-5 items-center"}>
                <Typography.Text strong className={"text-xl text-cyan-700"}>GEN AN`S</Typography.Text>
                <div>
                    <Link to={"/"} className={"no-underline"}>
                        <Typography.Text strong className={"text-cyan-700"}>Проекты</Typography.Text>
                    </Link>
                </div>
            </div>
            <Dropdown menu={{ items, onClick }}>
                <div className={"flex p-2 rounded-md items-center gap-2 hover:bg-stone-100 cursor-pointer transition"}>
                    <Typography.Text strong>{data?.user.name.toUpperCase()}</Typography.Text>
                    <DownOutlined />
                </div>
            </Dropdown>
        </div>
    )
}

export default Header;