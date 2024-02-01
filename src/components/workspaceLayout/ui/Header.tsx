import React, {useState} from "react";
import {Drawer, Menu, MenuProps, Typography} from "antd";
import {useAuth} from "../../../providers/auth";
import {MenuOutlined, ProfileOutlined, UserOutlined} from "@ant-design/icons";
import {Link, useNavigate} from "react-router-dom";
import Avatar from "../../avatar/Avatar.tsx";

const Header: React.FC = () => {

    const [open, setOpen] = useState(false);
    const {signOut} = useAuth();
    const navigate = useNavigate()


    return (
        <div className={"flex justify-between p-5 shadow-md"}>
            <div className={"flex gap-5 items-center"}>
                <Typography.Text strong className={"text-xl text-cyan-700"}>GEN`ANS</Typography.Text>
                <div>
                    <Link to={"/"} className={"no-underline"}>
                        <Typography.Text strong className={"text-cyan-700"}>Мои исследования</Typography.Text>
                    </Link>
                </div>
            </div>
            <div className={"flex p-2 rounded-md items-center gap-5 hover:bg-stone-100 cursor-pointer transition"}>
                <Typography.Text strong className={""}>USER</Typography.Text>
                <UserOutlined className={"text-2xl"}/>
            </div>
        </div>
    )
}

export default Header;