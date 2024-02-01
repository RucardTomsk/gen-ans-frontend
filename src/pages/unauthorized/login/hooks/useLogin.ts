import {useMutation} from "@tanstack/react-query";
import {AccountLoginDto} from "../../../../services/auth/models/AccountLoginDto.ts";
import authService from "../../../../services/auth/AuthService.ts";
import {useAuth} from "../../../../providers/auth";
import {generatePath, useNavigate} from "react-router-dom";
import {Links} from "../../../../constants/links.ts";

export function useLogin(rememberMe: boolean) {

    const {signIn} = useAuth()
    const navigate = useNavigate()

    return useMutation( {
        mutationFn: (data: AccountLoginDto) => authService.login(data),
        onSuccess: (data) => {
            signIn(data.data.accessToken, data.data.refreshToken, rememberMe)
            navigate(generatePath(Links.Authorized.Case, {caseId: "683600e2-2e90-43f5-afa9-2415615441ca"}))
        }
    });
}