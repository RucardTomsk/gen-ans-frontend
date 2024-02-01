import {instanceAccount, instanceBackend, instanceFileManager} from "./instances.ts";

export function setAuthHeaderToInstance(accessToken: string): void {
    instanceAccount.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
    instanceBackend.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
    instanceFileManager.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
}