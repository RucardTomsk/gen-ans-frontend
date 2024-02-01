import {accountQueryKeys} from "../../../services/account/accountQueryKeys.ts";
import accountService from "../../../services/account/AccountService.ts";
import {useQuery} from "@tanstack/react-query";

export function useUserData() {

    return useQuery({
        "queryKey": accountQueryKeys.userProfile(),
        queryFn: () => accountService.getUserProfile(),
        select: ({data}) => data
    })
}