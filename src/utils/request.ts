import axios from 'axios'
import { ElMessage } from 'element-plus';
import useUserStore from '@/store/modules/user.ts'
//axios.create返回的对象与axios本身其实是一样的，只是create方法方便我们增加更多的配置
let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000
});

//给request实例添加请求和响应拦截器
request.interceptors.request.use((config) => {
    let userStore = useUserStore()
    if(userStore.token){
        config.headers.token = userStore.token
    }
    //config配置对象，可以通过它来配置一些请求头
    return config;
})

request.interceptors.response.use((response)=>{
    return response.data;
},(error)=>{

    let message = ''
    let status = error.response.status
    switch(status){
        case 401:
            message = "token invalid"
            break
        //...
    }
    ElMessage({
        type:'error',
        message
    })

    return Promise.reject(error);
    
});

export default request