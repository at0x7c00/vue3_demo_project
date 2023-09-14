import request from "@/utils/request"
import type { LoginForm, LoginResponse } from "./type"

enum API {
    LOGIN_URL = "/user/login",
    USERINFO_URL = "/user/info"
}

export const reqLogin = (data: LoginForm) => {
    return request.post<any, LoginResponse>(API.LOGIN_URL,data)
}

export const reqUserInfo = () => {
    return request.get(API.USERINFO_URL)
}