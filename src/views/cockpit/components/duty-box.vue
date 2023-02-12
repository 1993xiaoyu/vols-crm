<template>
    <div class="duty-box">
        <div v-for="item in dutyObj.list" :key="item.id" class="duty-box__item">
            <!-- <img :src="'doctor' + item.avatar" /> -->
            <span class="duty-box__avatar"></span>
            <div class="duty-box__detail">
                <div>
                    {{ item.name }}
                </div>
                <span class="duty-box__detail-tip">{{
                    item.academicTitle
                }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';

import { getCensusDuty } from '@/network/cockpit.js';

const dutyObj = reactive({
    list: [],
});

const getCensusDutyData = async () => {
    const res = await getCensusDuty();

    dutyObj.list = res.list || [];
};
onMounted(() => {
    getCensusDutyData();
});
</script>

<style lang="less" scoped>
.duty-box {
    padding: 14px 10px 10px;
    display: flex;

    &__item {
        display: inline-flex;
        flex: 1;
        img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            margin-right: 8px;
        }
        .duty-box__avatar {
            display: inline-block;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            margin-right: 8px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            background-color: #2a67b3;
        }

        &:first-child .duty-box__avatar {
            background-image: url('../assets/doctor1.jpg');
        }
        &:nth-child(2) .duty-box__avatar {
            background-image: url('../assets/doctor2.jpeg');
        }
        &:last-child .duty-box__avatar {
            background-image: url('../assets/doctor3.jpg');
        }
    }

    &__detail {
        color: #fff;
        line-height: 9px;
        font-size: 9px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &-tip {
            font-size: 6px;
            line-height: 1.2;
            color: rgba(255, 255, 255, 0.65);
            margin-top: 5px;
        }
    }
}
</style>
