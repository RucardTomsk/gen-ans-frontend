import {instanceAccount} from "../../api/instances.ts";
import {AccountLoginDto} from "./models/AccountLoginDto.ts";
import {AccountRegisterDto} from "./models/AccountRegisterDto.ts";
import {TokenDto} from "./models/TokenDto.ts";
import {ChangePasswordDto} from "./models/ChangePasswordDto.ts";

class AuthService {
    async login(data: AccountLoginDto) {
        return instanceAccount.post<TokenDto>('auth/login', data)
    }

    async register(data: AccountRegisterDto) {
        return instanceAccount.post<TokenDto>('auth/register', data);
    }

    async logout() {
        return instanceAccount.post('auth/logout')
    }

    async refreshToken(accessToken: string | null, refreshToken: string | null) {
        return instanceAccount.post<TokenDto>(`auth/refresh`, { accessToken, refreshToken });
    }

    async changePassword(data: ChangePasswordDto) {
        return instanceAccount.post(`auth/change-password`, data);
    }

}

const authService = new AuthService();

export default authService;