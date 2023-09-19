<template>
    <div class="layout-container" :class="{fold:layoutStore.fold}">
        <div class="layout-menu">
            <Logo></Logo>
            <Menu></Menu>
        </div>
        <div class="layout-bar">
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
                我是右侧的内容
            </div>
        </div>
        <div class="layout-main">
            
        </div>
    </div>
</template>
    
<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import useLayoutStore from '@/store/modules/layout.ts'
let layoutStore = useLayoutStore()
const toggleFold = () => {
    layoutStore.fold = !layoutStore.fold
}
</script>

<style scoped lang="scss">
.layout-container {
    width: 100%;
    height: 100vh;

    .layout-menu {
        width: $layout-menu-width;
        height: 100vh;
        background: $layout-menu-bg;
        transition: all 0.3s;
    }

    .layout-bar {
        position: fixed;
        top: 0px;
        left: $layout-menu-width;
        height: 35px;
        width: calc(100% - $layout-menu-width);
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content:space-between;
        .layout-bar-left{
            display: flex;
            align-items: center;
            .el-breadcrumb{
                margin-left: 15px;
                .el-breadcrumb__item{
                    .el-breadcrumb__inner{
                        display: flex;
                        align-items: center;
                        span{
                            margin-left: 5px;
                        }
                        
                    }
                }
                
            }

            .el-icon{
                margin-left: 10px;
                cursor: pointer;
            }
        }
    }

    .layout-main {
        position: fixed;
        top: 35px;
        height: calc(100vh - 35px);
        width: calc(100% - $layout-menu-width);
        left: $layout-menu-width;
        transition: all 0.3s;
    }

    &.fold{
        .layout-menu {
            width: 50px;
            transition: all 0.3s;
        }

        .layout-main {
            width: calc(100% - 50px);
            left: 50px;
            transition: all 0.3s;
        }

        .layout-bar {
            left: 50px;
            width: calc(100% - 50px);
            transition: all 0.3s;
        }
    }
}
</style>