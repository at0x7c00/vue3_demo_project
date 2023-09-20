<template>
    <div class="logo" :class="{ fold: layoutStore.fold }">
        <img :src="setting.logo.img" v-if="setting.logo.showImage">
        <span>{{ setting.logo.title }}</span>
    </div>
</template>
    
<script setup lang="ts">
import setting from '@/setting.ts'
import useLayoutStore from '@/store/modules/layout.ts'
let layoutStore = useLayoutStore()
</script>
<script lang="ts">
export default {
    name: "Logo"
}
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

    &.fold {
        img {
            width: 50px;
            height: auto;
        }

        span {
            display: none;
        }
    }
}
</style>