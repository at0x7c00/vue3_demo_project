export interface LoginForm {
    username: string,
    password: string
}

export interface LoginResponse {
    code: number,
    data: LoginResponseData
}

export interface LoginResponseData{
    token?:string,
    message?:string
}

export interface ErrorMessage {
    message: string
}

export interface UserInfo {
    userId: number,
    username: string,
    password: string,
    token: string,
    name: string,
    avatar: string
}

export interface UserInfoResponse{
    code: number,
    data: ErrorMessage | UserInfo
}

//export type LoginResponseData = MessageData | TokenData
/*
export interface MessageData{
    message:string
}
export interface TokenData{
    token:string
}
*/



