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

//export type LoginResponseData = MessageData | TokenData
/*
export interface MessageData{
    message:string
}
export interface TokenData{
    token:string
}
*/



