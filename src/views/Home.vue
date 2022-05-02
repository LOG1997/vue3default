<script  setup lang='ts'>
import { ref, reactive } from 'vue'
import HelloWorld from '../components/HelloWorld.vue';
import { test_get,test_post } from '../apis/request'
test_get({ data: { name: 'test' } }).then(res => {
    console.log("get:",res);
})
test_post({ data: { name: 'test' } }).then(res => {
    console.log("post:",res);
})
</script>
 
<template>

    <img alt="Vue logo" src="../assets/logo.png" class="m-auto" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>
 
<style scoped>
</style>