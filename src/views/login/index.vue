<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginFormRef">
          <h1>Hello</h1>
          <h2>欢迎~</h2>
          <el-form-item prop="username">
            <el-input type="text" :prefix-icon="User" placeholder="请输入账号" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" :prefix-icon="Lock" placeholder="请输入密码" :show-password="true"
              v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login_btn" @click="login" :loading="loading">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
    
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import useUserStore from '@/store/modules/user'
import { ElNotification } from 'element-plus';
import { useRouter } from 'vue-router'//,useRoute

let loginForm = reactive({ username: 'admin', password: '111111' })

let userStore = useUserStore()

//获取路由器
let $router = useRouter()
//路由对象
//let $route=useRoute()

let loginFormRef = ref()

let loading = ref(false)

const login = () => {
  let result = loginFormRef.value.validate()
  result.then(()=>{
    loading.value = true
    userStore.login(loginForm).then((msg: string) => {
      ElNotification({
        title: '提示',
        type: 'success', message: msg
      })
      $router.push('/')
      loading.value = false
    }).catch((msg: string) => {
      ElNotification({
        title: '错误',
        type: 'error', message: msg
      })
      loading.value = false
    })
  }).catch(()=>{
    //表单验证失败
  });
}

const rules = {
  username: [
    { required: true, trigger: "change",message:"请输入账号" }
  ],
  password:[
    { required: true, trigger: "change",message:"请输入密码" },
  ]
}

</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg')no-repeat;
  background-size: cover;

  .login_form {
    background: url('@/assets/images/login_form.png')no-repeat;
    background-size: cover;
    position: relative;
    top: 30vh;
    width: 80%;
    padding: 20px;
  }

  h1 {
    font-size: 28px;
    color: white;
    text-align: left;
    margin: 10px 0px;
  }

  h2 {
    font-size: 20px;
    color: white;
    text-align: left;
    margin: 5px 0px;
  }

  .login_btn {
    width: 100%;
  }
}
</style>