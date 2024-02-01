import {createContext} from "react";

export interface AuthContextValue {
    isAuth: boolean;
    signIn(accessToken: string, refreshToken: string, rememberMe: boolean): void;
    signOut(withServerLogout?: boolean, callback?: () => void): void;
}

const defaultValue: AuthContextValue = {
    isAuth: false,
    signOut() {},
    signIn(accessToken: string, refreshToken: string, rememberMe: boolean) {}
}

export const AuthContext = createContext<AuthContextValue>(defaultValue);