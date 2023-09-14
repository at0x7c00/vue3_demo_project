import { defineStore } from 'pinia'

import type { LoginForm } from '@/api/user/type'
import {reqLogin} from '@/api/user'
import type {UserStoreState} from '@/store/modules/types/user.ts'

const useUserStore = defineStore('User', {
    state: ():UserStoreState => {
        return {
            token: localStorage.getItem("TOKEN")
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
        }
    },
})

export default useUserStore