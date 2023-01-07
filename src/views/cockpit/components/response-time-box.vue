<template>
    <div class="respinseTime-box">
        <div class="respinseTime-box__item item1">
            <div class="item-box">
                <span class="respinseTime-box__item-title">平均响应时间</span>
                <div>
                    {{ responseTimeObj.averageResponseTime
                    }}<span class="unit-style">秒</span>
                </div>
            </div>
        </div>
        <div class="respinseTime-box__item item2">
            <div class="item-box">
                <span class="respinseTime-box__item-title">平均出车时间</span>
                <div>
                    {{ responseTimeObj.averageSetOutTime
                    }}<span class="unit-style">分钟</span>
                </div>
            </div>
        </div>

        <div class="respinseTime-box__item item3">
            <div class="item-box">
                <span class="respinseTime-box__item-title">平均救援时长</span>
                <div>
                    {{ responseTimeObj.averageRescueTime
                    }}<span class="unit-style">分钟</span>
                </div>
            </div>
        </div>
        <div class="respinseTime-box__item item4">
            <div class="item-box">
                <span class="respinseTime-box__item-title"> 平均到达时间</span>
                <div>
                    {{ responseTimeObj.averageArriveTime
                    }}<span class="unit-style">分钟</span>
                </div>
            </div>
        </div>
        <div class="respinseTime-box__item item5">
            <div class="item-box">
                <span class="respinseTime-box__item-title">平均到院时间</span>
                <div>
                    {{ responseTimeObj.averageArriveHospitalTime
                    }}<span class="unit-style">分钟</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue';

import { getCensuResponseTime } from '@/network/cockpit.js';
const responseTimeObj = reactive({
    averageResponseTime: '',
    averageSetOutTime: '',
    averageRescueTime: '',
    averageArriveTime: '',
    averageArriveHospitalTime: '',
});
const getCensuResponseTimeData = async () => {
    const res = await getCensuResponseTime();
    const {
        averageResponseTime,
        averageSetOutTime,
        averageRescueTime,
        averageArriveTime,
        averageArriveHospitalTime,
    } = res;
    responseTimeObj.averageResponseTime = averageResponseTime;
    responseTimeObj.averageSetOutTime = averageSetOutTime;
    responseTimeObj.averageRescueTime = averageRescueTime;
    responseTimeObj.averageArriveTime = averageArriveTime;
    responseTimeObj.averageArriveHospitalTime = averageArriveHospitalTime;
};
onMounted(() => {
    getCensuResponseTimeData();
});
</script>

<style lang="less" scoped>
.respinseTime-box {
    position: relative;
    color: #fff;
    box-sizing: border-box;
    font-size: 28px;
    font-weight: 900;
    line-height: 42px;

    &__item {
        position: absolute;
        display: inline-block;
        width: 125px;
        height: 88px;
        text-align: center;
        background: url('../assets/response-time-bg1.png');
        background-repeat: no-repeat;
        background-size: contain;
        display: flex;
        justify-content: center;

        .item-box {
            margin-left: -10px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        &-title {
            color: rgba(255, 255, 255, 0.65);
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
        }
    }

    .unit-style {
        font-size: 18px;
    }

    .item1 {
        top: 0px;
        left: 82px;
        color: #00ddff;
    }
    .item2 {
        top: 0px;
        left: 385px;
    }
    .item3 {
        width: 376px;
        height: 217px;
        top: 40px;
        left: 50%;
        transform: translateX(-50%);
        background-image: url('../assets/response-time-bg2.png');
        .item-box {
            margin-top: 55px;
            margin-left: 0px;
        }
    }
    .item4 {
        top: 145px;
        left: 39px;
    }
    .item5 {
        top: 145px;
        left: 425px;
    }
}
</style>
