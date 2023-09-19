<template>
    <div class="logo">
        <img :src="setting.logo.img" v-if="setting.logo.showImage">
        <span>{{ setting.logo.title }}</span>
    </div>
</template>
    
<script setup lang="ts">
import setting from '@/setting.ts'
</script>

<style scoped lang="scss">
.logo {
    height: $layout-menu-logo-height;
    display: flex;
    align-items: center;
    img {
        width: 80px;
        height: auto;
    }

    span {
        color: white;
        display: block;
    }
}
</style>