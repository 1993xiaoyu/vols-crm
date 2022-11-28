<template>
    <div class="cockpit-box">
        <div class="center-box">
            <div class="center-box__title">5分钟急救圈信息驾驶舱平台</div>
        </div>

        <ContainerBox
            :style="{
                width: '590px',
                height: '441px',
                top: '100px',
                left: '20px',
            }"
            title="志愿者统计"
        >
            <VoluteerBox />
        </ContainerBox>

        <ContainerBox
            :style="{
                width: '590px',
                height: '182px',
                top: '100px',
                left: '630px',
            }"
            title="今日值班人员"
        >
            <DutyBox />
        </ContainerBox>

        <ContainerBox
            :style="{
                width: '590px',
                height: '238px',
                top: '300px',
                left: '630px',
            }"
            title="急救导师/专家"
        >
            <DoctorBox />
        </ContainerBox>

        <ContainerBox
            :style="{
                width: '1200px',
                height: '183px',
                top: '565px',
                left: '20px',
            }"
            title="AED盘点"
        >
            <AedBox />
        </ContainerBox>

        <ContainerBox
            :style="{
                width: '590px',
                height: '292px',
                top: '768px',
                left: '20px',
            }"
            title="响应系统状态"
        >
            <WorkBox />
        </ContainerBox>

        <ContainerBox
            :style="{
                width: '590px',
                height: '292px',
                top: '768px',
                left: '630px',
            }"
            title="响应异常清单"
        >
            <AbnormalBox />
        </ContainerBox>

        <ContainerBox
            :style="{
                width: '1360px',
                height: '646px',
                top: '102px',
                left: '1240px',
            }"
            title="实时救援监控"
            class="map-box"
        >
            <DataDivisionBox />
        </ContainerBox>

        <ContainerBox
            :style="{
                width: '1360px',
                height: '292px',
                top: '768px',
                left: '1240px',
            }"
            title="待响应紧急事件"
        >
            <RespondBox />
        </ContainerBox>

        <ContainerBox
            :style="{
                width: '1200px',
                height: '313px',
                top: '102px',
                left: '2620px',
            }"
            title="紧急救援现场"
            class="scene-box"
        >
            <SceneBox />
        </ContainerBox>

        <ContainerBox
            :style="{
                width: '590px',
                height: '313px',
                top: '434px',
                left: '2620px',
            }"
            title="反应时间统计"
        >
            <ResponseTimeBox />
        </ContainerBox>

        <ContainerBox
            :style="{
                width: '590px',
                height: '313px',
                top: '434px',
                left: '3230px',
            }"
            title="今日疾病分类"
        >
            <DiseaseBox />
        </ContainerBox>

        <ContainerBox
            :style="{
                width: '1200px',
                height: '292px',
                top: '768px',
                left: '2620px',
            }"
            title="预警信息"
        >
            <WaringBox />
        </ContainerBox>
    </div>
</template>
<script setup>
import ContainerBox from './components/container-box.vue';
import VoluteerBox from './components/volunteer-box.vue';
import DutyBox from './components/duty-box.vue';
import DoctorBox from './components/doctor-box.vue';
import AedBox from './components/aed-box.vue';
import WorkBox from './components/work-box.vue';
import WaringBox from './components/waring-box.vue';
import RespondBox from './components/respond-box.vue';
import DataDivisionBox from './components/data-division-box.vue';
import ResponseTimeBox from './components/response-time-box.vue';
import DiseaseBox from './components/disease-box.vue';
import AbnormalBox from './components/abnormal-box.vue';
import SceneBox from './components/scene-box.vue';
</script>

<style lang="less">
.cockpit-box {
    .anchorBL {
        display: none;
    }
}
</style>
<style lang="less" scoped>
.cockpit-box {
    width: 100%;
    min-width: 3840px;
    min-height: 1080px;
    height: 100%;
    overflow: auto;
    padding: 100px 20px 50px 20px;
    box-sizing: border-box;
    background: linear-gradient(
        rgba(8, 15, 34, 1) 0%,
        rgba(11, 18, 39, 1) 27.286%,
        rgba(10, 17, 37, 1) 100%
    );
    border: 1px solid rgb(151, 151, 151);

    .center-box {
        position: absolute;
        top: 0;
        left: 960px;
        width: 1920px;
        height: 1080px;
        background: url(./assets/center-bg.png);
        background-repeat: no-repeat;
        background-size: contain;
        &__title {
            font-size: 36px;
            line-height: 36px;
            color: #fff;
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
}
</style>
