import React, {useState} from "react";
import {Button, Checkbox, Typography} from "antd";
import {Link} from "react-router-dom";
import {Links} from "../../../../constants/links.ts";
import LoginLayout from "../../../../components/loginLayout/LoginLayout.tsx";
import {useTranslation} from "react-i18next";
import {useLogin} from "../hooks/useLogin.ts";
import { useForm } from "react-hook-form";
import {AccountLoginDto} from "../../../../services/auth/models/AccountLoginDto.ts";
import InputControl from "../../../../components/input/InputControl.tsx";
import {validators} from "../../../../helpers/validators.ts";

const LoginPage: React.FC = () => {

    const [rememberMe, setRememberMe] = useState(false)

    const {
        handleSubmit,
        control
    } = useForm<AccountLoginDto>();

    const {mutate: login, error, isPending} = useLogin(rememberMe)

    const onSubmit = (data: AccountLoginDto) => login(data)

    return (
        <LoginLayout>
            <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-2 mt-12 md:mt-24 w-96"}>
                <div className={"flex flex-col gap-1 mt-16"}>
                    <Typography.Text className={"text-cyan-700 text-3xl mb-7"}>{"ВХОД"}</Typography.Text>
                    <Typography.Text className={"text-base text-gray-400"}>{"Логин"}</Typography.Text>
                    <InputControl name={"email"} size={"large"} control={control}
                                  rules={{required: validators.required}}
                                  placeholder={"user@email.com"}
                    />
                    <Typography.Text className={"text-base text-gray-400"}>{"Пароль"}</Typography.Text>
                    <InputControl name={"password"} size={"large"} control={control}
                                  rules={{required: validators.required}}
                                  placeholder={"*********"}
                                  type={"password"}
                    />
                    <Checkbox
                        className={"text-gray-400"}
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    >{"Запомнить меня"}</Checkbox>
                    {
                        error && <Typography.Text type={"danger"}>{"Неверный логин или пароль"}</Typography.Text>
                    }
                </div>
                <div className={"flex flex-col justify-center text-center"}>
                    <Button type={"primary"} size={"large"}
                            disabled={isPending}
                            className={"mt-5"} htmlType={"submit"}
                    >{"Войти"}</Button>
                    <Typography.Text className={"text-sm text-gray-400 mt-1"}>
                        {"Нет аккаунта?"}
                        <Link to={Links.Unauthorized.Register} className={"ml-1"}>{"Зарегистрируйтесь"}</Link>
                    </Typography.Text>
                </div>
            </form>
        </LoginLayout>
    )
}

export default LoginPage;