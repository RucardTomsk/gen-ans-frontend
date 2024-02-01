import React, {useState} from "react";
import {AuthContext, AuthContextValue} from "./AuthContext.ts";
import {
    getAccessToken,
    removeAccessToken,
    removeRefreshToken,
    removeSessionToken,
    setAccessToken, setRefreshToken, setSessionToken
} from "../../../helpers/localStorageHelpers.ts";
import {setAuthHeaderToInstance} from "../../../api/instancesHelpers.ts";
import authService from "../../../services/auth/AuthService.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useRefreshToken} from "../hooks/useRefreshToken.ts";

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [isAuth, setIsAuth] = useState<boolean>(!!getAccessToken());
    const queryClient = useQueryClient();

    const { mutateAsync: logout } = useMutation({
        mutationFn: () => authService.logout()
    })

    useRefreshToken(isAuth);

    const signIn = (accessToken: string, refreshToken: string, rememberMe: boolean) => {
        setAccessToken(accessToken);
        if (rememberMe) setRefreshToken(refreshToken);
        else {
            removeRefreshToken();
            setSessionToken(refreshToken);
        }
        setAuthHeaderToInstance(accessToken);
        setIsAuth(true);
        queryClient.clear();
    }

    const signOut = (withServerLogout = true, callback?: () => void) => {

        const removeCache = () => {
            removeAccessToken();
            removeSessionToken();
            removeRefreshToken();
            queryClient.clear();
            callback && callback();
        }

        setIsAuth(false);

        withServerLogout
            ? logout().then(() => removeCache()).catch(() => removeCache())
            : removeCache()
    }

    const value: AuthContextValue = {
        isAuth,
        signIn,
        signOut,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}