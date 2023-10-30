import { RequestLogin, ResponseLogin } from "../models/auth";
import { api } from "../services/api";

export async function login(data: RequestLogin): Promise<ResponseLogin | {errorMessage: string}> {
    try {
        const {data: responseData} = await api.post<ResponseLogin>('/login', data);
        localStorage.setItem('access_token', responseData.access_token)
        return responseData
    } catch (error: any) {
        return {errorMessage: error.message}
    }
}