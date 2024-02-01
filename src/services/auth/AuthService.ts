import {instanceAccount} from "../../api/instances.ts";
import {AccountLoginDto} from "./models/AccountLoginDto.ts";
import {AccountRegisterDto} from "./models/AccountRegisterDto.ts";
import {TokenDto} from "./models/TokenDto.ts";

class AuthService {
    async login(data: AccountLoginDto) {
        return instanceAccount.post<TokenDto>('user/login', data)
    }

    async register(data: AccountRegisterDto) {
        return instanceAccount.post<TokenDto>('user/register', data);
    }

    async logout() {
        return instanceAccount.post('user/logout')
    }

    async refreshToken(refreshToken: string | null) {
        return instanceAccount.post<TokenDto>(`user/refresh`, { refreshToken });
    }
}

const authService = new AuthService();

export default authService;