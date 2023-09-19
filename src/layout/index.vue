<template>
    <div class="layout-container">
        <div class="layout-menu">
            <Logo></Logo>
            <Menu></Menu>
        </div>
        <div class="layout-bar"></div>
        <div class="layout-main"></div>
    </div>
</template>
    
<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
</script>

<style scoped lang="scss">
.layout-container {
    width: 100%;
    height: 100vh;

    .layout-menu {
        width: $layout-menu-width;
        height: 100vh;
        background: $layout-menu-bg;
    }

    .layout-bar {
        position: fixed;
        top: 0px;
        left: $layout-menu-width;
        height: 35px;
        width: calc(100% - $layout-menu-width);
        background: #ddd;
    }

    .layout-main {
        position: fixed;
        top: 35px;
        background: #efefef;
        height: calc(100vh - 35px);
        width: calc(100% - $layout-menu-width);
        left: $layout-menu-width;
    }
}</style>