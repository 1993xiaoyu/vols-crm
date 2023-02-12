<template>
    <div class="cockpit-box">
        <div class="center-box">
            <div class="center-box__title">5分钟急救圈信息驾驶舱平台</div>
        </div>
        <div class="cockpit-detail">
            <ContainerBox class="box1" title="志愿者统计">
                <VoluteerBox />
            </ContainerBox>

            <ContainerBox class="box2" title="今日值班人员">
                <DutyBox />
            </ContainerBox>

            <ContainerBox class="box3" title="急救导师/专家">
                <DoctorBox />
            </ContainerBox>

            <ContainerBox class="box4" title="AED盘点">
                <AedBox />
            </ContainerBox>

            <ContainerBox class="box5" title="响应系统状态">
                <WorkBox />
            </ContainerBox>

            <ContainerBox class="box6" title="响应异常清单">
                <AbnormalBox />
            </ContainerBox>

            <ContainerBox title="实时救援监控" class="map-box box7">
                <DataDivisionBox />
            </ContainerBox>

            <ContainerBox class="box8" title="待响应事件">
                <RespondBox />
            </ContainerBox>

            <ContainerBox title="紧急救援现场" class="scene-box box9">
                <SceneBox />
            </ContainerBox>

            <ContainerBox class="box10" title="反应时间统计">
                <ResponseTimeBox />
            </ContainerBox>

            <ContainerBox class="box11" title="今日疾病分类">
                <DiseaseBox />
            </ContainerBox>

            <ContainerBox class="box12" title="预警信息">
                <WaringBox />
            </ContainerBox>
        </div>

        <div class="test-text">测试版</div>
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
    // transform: scale(0.5);

    .anchorBL {
        display: none;
    }
}
</style>
<style lang="less" scoped>
.cockpit-box {
    width: 100%;
    // min-width: 3840px;
    // min-height: 1080px;
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
        left: 50%;
        margin-left: -400px;
        width: 800px;
        height: 270px;
        background: url(./assets/center-bg.png);
        background-repeat: no-repeat;
        background-size: cover;
        &__title {
            font-size: 30px;
            line-height: 30px;
            color: #fff;
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
}
.box1 {
    width: 295px;
    height: 240px;
    top: 120px;
    left: 10px;
}

.box2 {
    width: 330px;
    height: 91px;
    top: 120px;
    left: 315px;
}

.box3 {
    width: 330px;
    height: 119px;
    top: 240px;
    left: 315px;
}

.box4 {
    width: 637px;
    height: 92px;
    top: 392px;
    left: 10px;
}

.box5 {
    width: 295px;
    height: 256px;
    top: 520px;
    left: 10px;
    background-color: rgba(10, 17, 37, 1);
}

.box6 {
    width: 332px;
    height: 256px;
    top: 520px;
    left: 315px;
    background-color: rgba(10, 17, 37, 1);
}

.box7 {
    width: 680px;
    height: 365px;
    top: 120px;
    left: 655px;
}

.box8 {
    width: 680px;
    height: 256px;
    top: 520px;
    left: 655px;
    background-color: rgba(10, 17, 37, 1);
}

.box9 {
    width: 602px;
    height: 170px;
    top: 120px;
    left: 1345px;
}

.box10 {
    width: 295px;
    height: 167px;
    top: 317px;
    left: 1345px;
}

.box11 {
    width: 295px;
    height: 167px;
    top: 317px;
    left: 1650px;
    background-color: rgba(10, 17, 37, 1);
}

.box12 {
    width: 602px;
    height: 256px;
    top: 520px;
    left: 1345px;
}
.test-text {
    position: fixed;
    left: 60%;
    font-size: 30px;
    color: red;
}
</style>
