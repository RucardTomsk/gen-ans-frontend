import React from "react";
import {Button, Tooltip, Typography} from "antd";
import {Link} from "react-router-dom";
import {Links} from "../../../../constants/links.ts";
import LoginLayout from "../../../../components/loginLayout/LoginLayout.tsx";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {useRegister} from "../hooks/useRegister.ts";
import {AccountRegisterDto} from "../../../../services/auth/models/AccountRegisterDto.ts";
import InputControl from "../../../../components/input/InputControl.tsx";
import {validators} from "../../../../helpers/validators.ts";

interface Form extends AccountRegisterDto {
    confirmPassword: string
}

const RegisterPage: React.FC = () => {

    const { t } = useTranslation("translation", { keyPrefix: "pages.registration" });

    const {
        handleSubmit,
        control,
        watch
    } = useForm<Form>();

    const {mutate: register, error, isPending} = useRegister()

    const onSubmit = (data: Form) => register(data)

    return (
        <LoginLayout>
            <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-2 mt-12 md:mt-12"}>
                <div className={"flex flex-col gap-1"}>
                    <Typography.Text className={"text-3xl mb-7"}>{t("registration")}</Typography.Text>
                    <Typography.Text className={"text-base text-gray-400"}>{t("login")}</Typography.Text>
                    <InputControl
                        name={"email"}
                        rules={{
                            required: validators.required,
                            pattern: validators.emailPattern
                        }}
                        control={control}
                        size={"large"}
                    />
                    <Typography.Text className={"text-base text-gray-400"}>{t("name")}</Typography.Text>
                    <InputControl
                        name={"nickName"}
                        rules={{
                            required: validators.required,
                            pattern: validators.fullNamePattern
                        }}
                        control={control}
                        size={"large"}
                    />
                    <Tooltip title="Пароль должен быть длиннее 8 символов, содержать хотя бы одну цифру, один спецсимвол и одну строчную букву"
                             trigger={"hover"} placement={"topRight"}>
                    <Typography.Text className={"text-base text-gray-400"}>{t("password")}</Typography.Text>
                    </Tooltip>

                        <InputControl
                            name={"password"}
                            rules={{
                                required: validators.required,
                                pattern: validators.passwordPattern
                            }}
                            control={control}
                            type={"password"}
                            size={"large"}
                        />

                    <Typography.Text className={"text-base text-gray-400"}>{t("repeatPassword")}</Typography.Text>
                    <InputControl
                        name={"confirmPassword"}
                        rules={{
                            required: validators.required,
                            validate: (val) => val !== watch("password") ? "Пароли не совпадают" : undefined
                        }}
                        control={control}
                        type={"password"}
                        size={"large"}
                    />
                    {
                        error && <Typography.Text type={"danger"}>{"Аккаунт с таким email уже существует"}</Typography.Text>
                    }
                </div>
                <div className={"flex flex-col justify-center text-center"}>
                    <Button type={"primary"} size={"large"} className={"mt-5"}
                            disabled={isPending}
                            htmlType={"submit"}>{t("toRegister")}</Button>
                    <Typography.Text className={"text-sm text-gray-400 mt-1"}>
                        {t("alreadyHaveAccount")}
                        <Link to={Links.Unauthorized.Login} className={"ml-1"}> {t("toLogin")}</Link>
                    </Typography.Text>
                </div>
            </form>
        </LoginLayout>
    )
}

export default RegisterPage;