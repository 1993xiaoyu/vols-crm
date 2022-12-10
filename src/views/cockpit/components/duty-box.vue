<template>
    <div class="duty-box">
        <div v-for="item in dutyObj.list" :key="item.id" class="duty-box__item">
            <img
                :src="
                    item.avatar ||
                    'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
                "
            />
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

import { getCensusDuty } from '@/network/volunteer.js';

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
    padding: 37px 40px;
    display: flex;

    &__item {
        display: inline-flex;
        flex: 1;
        img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            margin-right: 16px;
        }
    }

    &__detail {
        color: #fff;
        line-height: 18px;
        font-size: 18px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &-tip {
            font-size: 14px;
            line-height: 21px;
            color: rgba(255, 255, 255, 0.65);
            margin-top: 10px;
        }
    }
}
</style>
