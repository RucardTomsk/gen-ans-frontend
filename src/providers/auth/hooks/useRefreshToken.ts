import {useQuery} from "@tanstack/react-query";
import authService from "../../../services/auth/AuthService.ts";
import {
    getAccessToken,
    getRefreshToken,
    getSessionToken,
    setAccessToken
} from "../../../helpers/localStorageHelpers.ts";
import {setAuthHeaderToInstance} from "../../../api/instancesHelpers.ts";
import {authQueryKeys} from "../../../services/auth/authQueryKeys.ts";

const REFRESH_TOKEN_INTERVAL = 4 * 60 * 1000;
export const useRefreshToken = (isAuth: boolean) => {

    const {data, isSuccess} = useQuery({
        queryKey: authQueryKeys.refreshToken(),
        queryFn: () => authService.refreshToken(getAccessToken(), getRefreshToken() || getSessionToken()),
        select: ({data}) => data,
        enabled: isAuth && (!!getRefreshToken() || !!getSessionToken()),
        refetchInterval: REFRESH_TOKEN_INTERVAL,
        refetchIntervalInBackground: true,
    })

    if (isSuccess) {
        if (data) {
            setAuthHeaderToInstance(data.accessToken);
            setAccessToken(data.accessToken);
        }
    }
}