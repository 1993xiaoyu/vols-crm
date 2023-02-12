<template>我是列表页ss</template>
<script setup>
import { onMounted } from 'vue';

// import { login } from '@/network/index.js';

const getCensusAedData = async () => {
    console.log('====login', '=====');
    // const res = await login({
    //     username: 'admin',
    //     password: 'admin123',
    //     rememberMe: false,
    // });
};
onMounted(() => {
    getCensusAedData();
});
</script>
