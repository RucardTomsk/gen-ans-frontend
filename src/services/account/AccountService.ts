import {instanceAccount} from "../../api/instances.ts";
import {UserObjectDto} from "./models/UserObjectDto.ts";

class AccountService {
    async getUserProfile() {
        return instanceAccount.get<UserObjectDto>('user/retrieve')
    }
}

const accountService = new AccountService();

export default accountService;