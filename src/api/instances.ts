import axios from "axios";
import {getAccessToken} from "../helpers/localStorageHelpers.ts";

const ACCOUNT_API_URL = "https://hw.synthesis.account-api.freydin.space";
const BACKEND_API_URL = "https://hw.synthesis.backend-api.freydin.space";
const FILE_MANAGER_API_URL = "https://hw.synthesis.file-manager-api.freydin.space";

export const instanceAccount = axios.create({
    baseURL: `${ACCOUNT_API_URL}/api/`,
    headers: {'Authorization': `Bearer ${getAccessToken()}`}
});

export const instanceBackend = axios.create({
    baseURL: `${BACKEND_API_URL}/api/`,
    headers: {'Authorization': `Bearer ${getAccessToken()}`}
});

export const instanceFileManager = axios.create({
    baseURL: `${FILE_MANAGER_API_URL}/api/`,
    headers: {'Authorization': `Bearer ${getAccessToken()}`}
});