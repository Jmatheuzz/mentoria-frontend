import { User } from "./user";

export type ResponseLogin = Omit<User, 'password'> & {access_token: string}

export type RequestLogin = {
    email: string;
    password: string;
}
export type ResponseSignUp = {
    success: boolean;
}
export type RequestSignUp = {
    name: string;
    email: string;
    password: string;
}

export type ResponseVerifyToken = {
    access_token: string;
}
export type RequestVerifyToken = {
    verify_token: string;
}