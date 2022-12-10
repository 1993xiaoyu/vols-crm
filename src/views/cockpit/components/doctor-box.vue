<template>
    <div class="duty-box">
        <div
            v-for="item in doctorList"
            :key="item.valueKey"
            class="duty-box__item"
        >
            <span class="duty-box__item-title">
                {{ item.title }}
            </span>
            <span class="duty-box__detail-num">{{
                formatNum(doctorObj[item.valueKey])
            }}</span>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';

import { getCensusDoctor } from '@/network/volunteer.js';
import { formatNum } from '@/utils/common.js';

const doctorList = [
    { title: '总数', valueKey: 'totalNum' },
    { title: '急救专家数量', valueKey: 'specialistNum' },
    { title: '急救导师数量', valueKey: 'supervisorNum' },
    { title: '已参与培训人数', valueKey: 'traineesNum' },
];

const doctorObj = reactive({
    totalNum: 0,
    specialistNum: 0,
    supervisorNum: 0,
    traineesNum: 0,
});
const getCensusDoctorData = async () => {
    const res = await getCensusDoctor();
    const { totalNum, specialistNum, supervisorNum, traineesNum } = res;
    doctorObj.totalNum = totalNum;
    doctorObj.specialistNum = specialistNum;
    doctorObj.supervisorNum = supervisorNum;
    doctorObj.traineesNum = traineesNum;
};
onMounted(() => {
    getCensusDoctorData();
});
</script>

<style lang="less" scoped>
.duty-box {
    padding: 37px 40px 12px 40px;
    display: flex;
    flex-wrap: wrap;

    &__item {
        display: inline-flex;
        justify-content: space-between;
        color: #ffffff;
        padding: 0 20px;
        width: 245px;
        box-sizing: border-box;
        line-height: 56px;
        height: 56px;
        background: rgba(16, 139, 219, 0.2);
        border: 1px solid rgb(13, 151, 246);
        margin-bottom: 20px;
        &-title {
            font-size: 14px;
        }

        &-num {
            font-size: 20px;
            font-weight: 700;
        }
        &:nth-child(2n) {
            margin-left: 15px;
        }
    }
}
</style>
