<template>
        <el-scrollbar>
            <el-menu :background-color="setting.menu.bg" :text-color="setting.menu.textcolor" :active-text-color="setting.menu.activecolor">
                <el-menu-item index="1"><el-icon><HomeFilled></HomeFilled></el-icon>首页</el-menu-item>
                <el-menu-item index="2"><el-icon><Platform></Platform></el-icon>数据大屏</el-menu-item>
                <el-sub-menu index="3">
                    <template #title>
                        <el-icon><Tools></Tools></el-icon>
                        <span>系统设置</span>
                    </template>
                    <el-menu-item index=4><el-icon><User></User></el-icon>用户管理</el-menu-item>
                    <el-menu-item index="5"><el-icon><MoreFilled></MoreFilled></el-icon>角色管理</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-scrollbar>
</template>
    
<script setup lang="ts">
import setting from '@/setting.ts'
</script>

<style scoped lang="scss">
    .el-scrollbar{
        height:calc(100vh - $layout-menu-logo-height);
        width:100%;
        .el-menu{
            border-right:none;
        }
    }
</style>