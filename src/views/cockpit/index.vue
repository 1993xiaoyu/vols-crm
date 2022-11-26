<template>
    <div class="cockpit-box">
        <ContainerBox
            :style="{ width: '590px', height: '441px' }"
            title="志愿者统计"
        >
            <VoluteerBox />
        </ContainerBox>

        <ContainerBox
            :style="{ width: '1200px', height: '183px' }"
            title="AED盘点"
        >
            <AedBox />
        </ContainerBox>

        <ContainerBox
            :style="{ width: '590px', height: '292px' }"
            title="响应系统状态"
        >
            <WorkBox />
        </ContainerBox>
    </div>
</template>
<script setup>
import ContainerBox from './components/container-box.vue';
import VoluteerBox from './components/volunteer-box.vue';
import AedBox from './components/aed-box.vue';
import WorkBox from './components/work-box.vue';
</script>

<style lang="less" scoped>
.cockpit-box {
    width: 3840px;
    height: 100%;
    overflow: auto;
    padding: 100px 20px 50px 20px;
    background: linear-gradient(
        rgba(8, 15, 34, 1) 0%,
        rgba(11, 18, 39, 1) 27.286%,
        rgba(10, 17, 37, 1) 100%
    );
    border: 1px solid rgb(151, 151, 151);
}
</style>
