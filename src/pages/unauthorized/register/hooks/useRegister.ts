import {useMutation} from "@tanstack/react-query";
import authService from "../../../../services/auth/AuthService.ts";
import {useAuth} from "../../../../providers/auth";
import {AccountRegisterDto} from "../../../../services/auth/models/AccountRegisterDto.ts";
import {generatePath, useNavigate} from "react-router-dom";
import {Links} from "../../../../constants/links.ts";

export function useRegister() {

    const {signIn} = useAuth()
    const navigate = useNavigate()

    return useMutation( {
        mutationFn: (data: AccountRegisterDto) => authService.register(data),
        onSuccess: (data) => {
            signIn(data.data.accessToken, data.data.refreshToken, true)
            navigate(generatePath(Links.Authorized.Case, {caseId: "683600e2-2e90-43f5-afa9-2415615441ca"}))
        }
    });
}