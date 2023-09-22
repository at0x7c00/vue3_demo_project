<template>
    <div class="layout-bar-left">
        <el-icon>
            <component :is="!layoutStore.fold ?  'Fold' : 'Expand'" @click="toggleFold"></component>
        </el-icon>
        <el-breadcrumb separator-icon="ArrowRight">
            <el-breadcrumb-item>
                <el-icon>
                    <Tools></Tools>
                </el-icon>
                <span>系统设置</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
                <el-icon>
                    <User></User>
                </el-icon>
                <span>用户管理</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="layout-bar-right">
        <el-button icon="Refresh" size="small" circle @click="doRefresh"/>
        <el-button icon="FullScreen" size="small" circle @click="fullScreen"/>
        <el-button icon="Tools" size="small" circle/>
        
        <img :src="userStore.avatar" style="width: 24px;height: 24px;margin:0px 10px;border-radius: 50%;">
        <el-dropdown>
            <span class="el-dropdown-link">
                admin
                <el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>
    
<script setup lang="ts">
import useLayoutStore from '@/store/modules/layout.ts'
import useUserStore from '@/store/modules/user.ts'
import { ElNotification } from 'element-plus';
import {onMounted} from 'vue'

let layoutStore = useLayoutStore()
let userStore = useUserStore()

const toggleFold = () => {
    layoutStore.fold = !layoutStore.fold
}
const doRefresh = () => {
    layoutStore.refresh = !layoutStore.refresh
}
const fullScreen = () => {
    if(!document.fullscreenElement){
        document.documentElement.requestFullscreen();
    }else{
        document.exitFullscreen()
    }
}
const logout = () => {
    console.log('do logout')
}
onMounted(()=>{
    userStore.loadUserInfo().then(()=>{
        
    }).catch((msg:string)=>{
        ElNotification({
            title:'错误',
            type: 'error', message: msg
        })
    })
})
</script>
<script lang="ts">
export default {
    name: "Tabbar"
}
</script>

<style scoped lang="scss">
.layout-bar-left {
    display: flex;
    align-items: center;

    .el-breadcrumb {
        margin-left: 15px;

        .el-breadcrumb__item {
            .el-breadcrumb__inner {
                display: flex;
                align-items: center;

                span {
                    margin-left: 5px;
                }

            }
        }

    }

    .el-icon {
        margin-left: 10px;
        cursor: pointer;
    }
}

.layout-bar-right {
    display: flex;
    align-items: center;
}
</style>