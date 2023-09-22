import { defineStore } from 'pinia'

import type { LoginForm,UserInfo,ErrorMessage } from '@/api/user/type'
import {reqLogin,reqUserInfo} from '@/api/user'
import type {UserStoreState} from '@/store/modules/types/user.ts'

const useUserStore = defineStore('User', {
    state: ():UserStoreState => {
        return {
            token: localStorage.getItem("TOKEN"),
            username: null,
            avatar: '',
            name: ''
        }
    },
    getters: {

    },
    actions: {
        async login(loginForm: LoginForm) {
            const result = await reqLogin(loginForm)
            if(result.code == 200){
                this.token = (result.data.token as string)
                localStorage.setItem("TOKEN",this.token)
                return "登录成功~"//
            }else{
                return Promise.reject(result.data.message)
            }
        },
        async loadUserInfo(){
            const response = await reqUserInfo()
            if(response.code == 200){
                console.log((response.data as UserInfo))
                this.username = (response.data as UserInfo).username
                this.name = (response.data as UserInfo).name
                this.avatar = (response.data as UserInfo).avatar
                return this.username
            }else{
                return Promise.reject((response.data as ErrorMessage).message)
            }
        }
    },
})

export default useUserStore