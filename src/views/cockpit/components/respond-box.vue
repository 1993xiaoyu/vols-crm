<template>
    <div class="respond-box">
        <el-table
            :data="waringObj.list"
            stripe
            style="width: 100%"
            :border="false"
            :header-cell-style="{ paddingLeft: '30px' }"
            :cell-style="{ paddingLeft: '30px' }"
        >
            <el-table-column
                prop="address"
                label="救援事件地点"
                width="220"
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column prop="phoneNum" label="呼救人手机号" />

            <el-table-column prop="status" label="响应状态" />
            <el-table-column prop="volunteerStatus" label="志愿者响应状态" />

            <el-table-column prop="time" label="已呼救时长"> </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';

import { getCensusRespond } from '@/network/index.js';

const waringObj = reactive({
    list: [],
});
const getCensusRespondData = async () => {
    const res = await getCensusRespond();

    waringObj.list = res.list || [];
};
onMounted(() => {
    getCensusRespondData();
});
</script>

<style lang="less">
.respond-box {
    .el-table {
        background-color: transparent;
    }
    .el-table__inner-wrapper::before {
        display: none;
    }
    .el-table tr,
    .el-table th.el-table__cell {
        background-color: rgba(8, 15, 34, 0.7);
        color: #fff;
        line-height: 14px;
        font-size: 14px;
        padding: 11px 0;
    }
    .el-table .el-table__cell {
        padding: 11px 0;
    }
    .el-table td.el-table__cell,
    .el-table th.el-table__cell.is-leaf {
        border-bottom: none;
    }

    thead tr {
        background-image: linear-gradient(
            to right,
            rgba(0, 111, 242, 0),
            rgba(0, 168, 255, 0.3) 51.563%,
            rgba(0, 111, 242, 0)
        );
    }
    .el-table th.el-table__cell {
        background-color: transparent;

        color: #6fc3ff;
    }

    .el-table .cell {
        line-height: 14px;
    }
    .el-table--striped
        .el-table__body
        tr.el-table__row--striped
        td.el-table__cell {
        background: rgba(0, 111, 242, 0.1);
        color: '#fff';
    }
}
</style>

<style lang="less" scoped></style>
