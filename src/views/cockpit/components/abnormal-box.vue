<template>
    <div class="abnormal-box">
        <el-table
            :data="abnormalObj.list"
            stripe
            style="width: 100%"
            :border="false"
        >
            <el-table-column
                prop="history"
                label="社康/医院"
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column prop="status" label="状态" width="50">
            </el-table-column>
            <el-table-column
                prop="date"
                label="上次上线时间"
                width="125"
                show-overflow-tooltip
            >
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';

import { getCensusAbnormal } from '@/network/cockpit.js';

const abnormalObj = reactive({
    list: [
        {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
        },
        {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
        },
        {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
        },
        {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
        },
    ],
});
const getCensusAbnormalData = async () => {
    const res = await getCensusAbnormal();

    abnormalObj.list = res.list || [];
};
onMounted(() => {
    getCensusAbnormalData();
});
</script>

<style lang="less">
.abnormal-box {
    .el-table__inner-wrapper::before {
        display: none;
    }
    .el-table tr,
    .el-table th.el-table__cell {
        background-color: #080f22;
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
            rgba(0, 168, 255, 0.2) 51.563%,
            rgba(0, 111, 242, 0)
        );
    }
    .el-table th.el-table__cell {
        background-color: transparent;

        color: #6fc3ff;
    }

    .el-table .cell {
        line-height: 26px;
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
