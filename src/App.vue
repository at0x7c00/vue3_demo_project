<script setup lang="ts">
//import {Plus} from '@element-plus/icons-vue'
//import Test from '@/TestComp.vue'

//import request from '@/utils/request'
//import { onMounted } from 'vue';
import {RouterView} from 'vue-router'
//import { ElMessage } from 'element-plus';

//import {reqLogin} from '@/api/user/'

import Home from '@/views/home/index.vue'

/*onMounted(()=>{


request({
  url: '/user/login',
  method:'post',
  data:{
    username:'admin',
    password:'1111112'
  }
}).then(res=>{
  console.log(res)
  ElMessage({
    type:'success',
    message:res.data.message
  })
})


 
//let LoginForm = {
//    username: 'admin',password : '111111'
//}
//reqLogin(LoginForm)

})*/

</script>

<template>

<!--    <h1>路由测试</h1>-->
      <router-view></router-view>

<!--    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/404">404</router-link>


    <router-view></router-view>-->

</template>

<style scoped lang="scss">


</style>
