import {instanceAccount, instanceBackend} from "./instances.ts";

export function setAuthHeaderToInstance(accessToken: string): void {
    instanceAccount.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
    instanceBackend.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
}