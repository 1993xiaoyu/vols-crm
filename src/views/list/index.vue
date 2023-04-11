<template>
    <div class="home-box">
        <div>
            <QuickNav />
            <System />
            <Rescue />
            <WeekCensus />
        </div>
        <div class="right-box">
            <Map />
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import QuickNav from './components/quick-nav.vue';
import System from './components/system.vue';
import Rescue from './components/rescue.vue';
import WeekCensus from './components/week-census.vue';
import Map from './components/map.vue';
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
<style lang="less" scoped>
.home-box {
    background: #f4f8fb;
    display: flex;
    .right-box {
        margin-left: 20px;
        vertical-align: top;
    }
}
</style>
