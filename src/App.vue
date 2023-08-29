<script setup lang="ts">
import {Plus} from '@element-plus/icons-vue'
import Test from '@/TestComp.vue'
</script>

<template>
  <div>
    <el-button type="primary" :icon="Plus">Primary Button</el-button>
    <Test></Test>
  </div>
</template>

<style scoped> 
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
