import axios from "axios";
import {getAccessToken} from "../helpers/localStorageHelpers.ts";

const ACCOUNT_API_URL = "https://hw.gen.back.user-api.freydin.space";
const BACKEND_API_URL = "https://hw.gen.back.gen-api.freydin.space";

export const instanceAccount = axios.create({
    baseURL: `${ACCOUNT_API_URL}/api/v1`,
    headers: {'Authorization': `Bearer ${getAccessToken()}`}
});

export const instanceBackend = axios.create({
    baseURL: `${BACKEND_API_URL}/api/v1`,
    headers: {'Authorization': `Bearer ${getAccessToken()}`}
});