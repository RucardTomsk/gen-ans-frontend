import {useAuth} from "../providers/auth";
import {useMutation} from "@tanstack/react-query";
import {AxiosError, AxiosResponse} from "axios";
import {getAccessToken, getRefreshToken} from "../helpers/localStorageHelpers.ts";
import {instanceAccount, instanceBackend, instanceFileManager} from "./instances.ts";
import authService from "../services/auth/AuthService.ts";

export const useSetupInstanceInterceptors = () => {

    const { signOut } = useAuth();
    const {mutate: refreshToken } = useMutation({
        mutationFn: () => authService.refreshToken(getAccessToken(), getRefreshToken()),
        onError: () => {
            signOut(false);
        }
    })

    const onResponse = (response: AxiosResponse): AxiosResponse => {
        return response;
    }

    const onResponseError = (error: AxiosError): Promise<AxiosError> => {
        onUnauthorizedError(error);
        onInternalServerError(error);
        return Promise.reject(error);
    }

    const onUnauthorizedError = (error: AxiosError) => {
        if (error.response?.status === 401) {
            if (getAccessToken() && getRefreshToken()) refreshToken()
            else signOut(false);
        }

    }

    const onInternalServerError = (error: AxiosError) => {
        if (error.response?.status === 500) {}
    }

    instanceAccount.interceptors.response.use(onResponse, onResponseError);
    instanceBackend.interceptors.response.use(onResponse, onResponseError);
    instanceFileManager.interceptors.response.use(onResponse, onResponseError);
}