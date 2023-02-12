<template>
    <div class="voluteer-box">
        <div class="voluteer-box__item item1">
            <div class="item-box">
                <span class="voluteer-box__item-title">今日打卡人数</span>
                <span>{{ formatNum(voluteerObj.todayClockNum) }}</span>
            </div>
        </div>
        <div class="voluteer-box__item item2">
            <div class="item-box">
                <span class="voluteer-box__item-title">本月打卡人数</span>
                <span>{{ formatNum(voluteerObj.monthClockNum) }}</span>
            </div>
        </div>

        <div class="voluteer-box__item item3">
            <div class="item-box">
                <span class="voluteer-box__item-title">总人数</span>
                <span>{{ formatNum(voluteerObj.totalVolunteerNum) }}</span>
            </div>
        </div>
        <div class="voluteer-box__item item4">
            <div class="item-box">
                <span class="voluteer-box__item-title">曾参与救援</span>
                <span>{{ formatNum(voluteerObj.rescuedNum) }}</span>
            </div>
        </div>
        <div class="voluteer-box__item item5">
            <div class="item-box">
                <span class="voluteer-box__item-title">月活跃人数</span>
                <span>{{ formatNum(voluteerObj.activedNum) }}</span>
            </div>
        </div>
    </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue';

import { getCensusVoluteer } from '@/network/cockpit.js';
import { formatNum } from '@/utils/common.js';
const voluteerObj = reactive({
    todayClockNum: '',
    totalVolunteerNum: '',
    activedNum: '',
    monthClockNum: '',
    rescuedNum: '',
});
const getCensusVoluteerData = async () => {
    const res = await getCensusVoluteer();
    const {
        todayClockNum,
        totalVolunteerNum,
        activedNum,
        monthClockNum,
        rescuedNum,
    } = res;
    voluteerObj.todayClockNum = todayClockNum;
    voluteerObj.totalVolunteerNum = totalVolunteerNum;
    voluteerObj.activedNum = activedNum;
    voluteerObj.monthClockNum = monthClockNum;
    voluteerObj.rescuedNum = rescuedNum;
    console.log(res);
};
onMounted(() => {
    getCensusVoluteerData();
});
</script>

<style lang="less" scoped>
.voluteer-box {
    position: relative;
    color: #fff;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;

    &__item {
        position: absolute;
        display: inline-block;
        width: 71px;
        height: 101px;
        text-align: center;
        background: url('../assets/voluteer-bg1.png');
        background-repeat: no-repeat;
        background-size: contain;
        display: flex;
        justify-content: center;

        .item-box {
            margin-left: -7px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-top: 20px;
        }

        &-title {
            color: rgba(255, 255, 255, 0.65);

            font-size: 8px;
            font-weight: 400;
            line-height: 12px;
        }
    }

    .item1 {
        top: -10px;
        left: 40px;
    }
    .item2 {
        top: -10px;
        left: 193px;
    }
    .item3 {
        width: 88px;
        height: 136px;
        top: 30px;
        left: 104px;
        background-image: url('../assets/voluteer-bg2.png');
        .item-box {
            margin-top: -20px;
        }
    }
    .item4 {
        top: 90px;
        left: 23px;
    }
    .item5 {
        top: 90px;
        left: 210px;
    }
}
</style>
