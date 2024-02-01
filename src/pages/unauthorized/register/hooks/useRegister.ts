import {useMutation} from "@tanstack/react-query";
import authService from "../../../../services/auth/AuthService.ts";
import {useAuth} from "../../../../providers/auth";
import {AccountRegisterDto} from "../../../../services/auth/models/AccountRegisterDto.ts";
import {useNavigate} from "react-router-dom";
import {Links} from "../../../../constants/links.ts";

export function useRegister() {

    const {signIn} = useAuth()
    const navigate = useNavigate()

    return useMutation( {
        mutationFn: (data: AccountRegisterDto) => authService.register(data),
        onSuccess: (data) => {
            signIn(data.data.token, data.data.refreshToken, true)
            navigate(Links.Authorized.Projects)
        }
    });
}