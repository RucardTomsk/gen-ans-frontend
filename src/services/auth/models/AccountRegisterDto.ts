export interface AccountRegisterDto {
    email: string,
    nickName: string,
    password: string,
    fullName?: string,
    birthDate?: string
}