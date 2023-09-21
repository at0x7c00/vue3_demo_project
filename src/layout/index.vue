<template>
    <div class="layout-container" :class="{fold:layoutStore.fold}">
        <div class="layout-menu">
            <Logo></Logo>
            <Menu></Menu>
        </div>
        <div class="layout-bar">
            <Tabbar></Tabbar>
        </div>
        <div class="layout-main">
            <router-view></router-view>
        </div>
    </div>
</template>
    
<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Tabbar  from './tabbar/index.vue'
import useLayoutStore from '@/store/modules/layout.ts'
let layoutStore = useLayoutStore()
</script>
<script lang="ts">
export default {
    name: "Layout"
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