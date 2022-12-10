<template>
    <div class="aed-box">
        <div v-for="item in aedList" :key="item.valueKey" class="aed-box__item">
            <img :src="item.iconUrl" />
            <div class="aed-box__detail">
                <div class="aed-box__detail-num">
                    {{ formatNum(aedObj[item.valueKey]) }}
                </div>
                <span>{{ item.title }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';

import { getCensusAed } from '@/network/cockpit.js';
import { formatNum } from '@/utils/common.js';
import aedBg1 from '../assets/aed-bg1.png';
import aedBg2 from '../assets/aed-bg2.png';
import aedBg3 from '../assets/aed-bg3.png';
import aedBg4 from '../assets/aed-bg4.png';
import aedBg5 from '../assets/aed-bg5.png';

const aedList = [
    { iconUrl: aedBg1, title: '总台数', valueKey: 'aedTootal' },
    { iconUrl: aedBg1, title: '正常台数', valueKey: 'normalNum' },
    { iconUrl: aedBg2, title: '自检失败', valueKey: 'checkingWaringNum' },
    { iconUrl: aedBg3, title: '电池异常', valueKey: 'batteryWaringNum' },
    { iconUrl: aedBg4, title: '掉线数', valueKey: 'disconnectNum' },
    { iconUrl: aedBg5, title: '预警台数', valueKey: 'earlyWarningNum' },
];
const aedObj = reactive({
    aedTootal: 0,
    normalNum: 0,
    checkingWaringNum: 0,
    batteryWaringNum: 0,
    disconnectNum: 0,
    earlyWarningNum: 0,
});
const getCensusAedData = async () => {
    const res = await getCensusAed();
    const {
        aedTootal,
        normalNum,
        checkingWaringNum,
        batteryWaringNum,
        disconnectNum,
        earlyWarningNum,
    } = res;
    aedObj.aedTootal = aedTootal;
    aedObj.normalNum = normalNum;
    aedObj.checkingWaringNum = checkingWaringNum;
    aedObj.batteryWaringNum = batteryWaringNum;
    aedObj.disconnectNum = disconnectNum;
    aedObj.earlyWarningNum = earlyWarningNum;
};
onMounted(() => {
    getCensusAedData();
});
</script>

<style lang="less" scoped>
.aed-box {
    padding: 50px 40px 42px 40px;
    display: flex;

    &__item {
        display: inline-flex;
        flex: 1;
        img {
            width: 60px;
            height: 60px;
            margin-right: 12px;
        }
    }

    &__detail {
        color: #fff;
        line-height: 14px;
        font-size: 14px;
        &-num {
            font-size: 26px;
            line-height: 39px;
            background-image: -webkit-linear-gradient(
                rgba(0, 126, 241, 1) 0%,
                rgba(6, 250, 255, 1) 100%
            );

            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
}
</style>
