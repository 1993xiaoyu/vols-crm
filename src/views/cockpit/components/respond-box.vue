<template>
    <div class="respond-box">
        <el-table
            :data="waringObj.list"
            stripe
            style="width: 100%"
            :border="false"
            :header-cell-style="{ paddingLeft: '20px' }"
            :cell-style="{ paddingLeft: '20px' }"
            @row-click="handleRow"
        >
            <el-table-column
                prop="address"
                label="救援事件地点"
                width="180"
                show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
                prop="mobile"
                label="呼救人手机"
                show-overflow-tooltip
            />

            <el-table-column prop="emergency_status_str" label="响应状态" />
            <el-table-column
                prop="emergency_status_str"
                label="志愿者状态"
                width="150"
            />

            <el-table-column prop="duration" label="已呼救时长">
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';

import {
    getEventList,
    getEventDetails,
    getEventStatistics,
} from '@/network/monitor.js';

const waringObj = reactive({
    list: [
        {
            address: '福田站',
            submit_time: 1675051390,
            emergency_status_str: '已完成',
            latitude: 22.53812218,
            mobile: '18612518278',
            img_cnt: 0,
            duration: 67,
            emergency_id: 'bc6a1sxhoyryy',
            emergency_type: 4,
            emergency_type_str: '视频呼救',
            head_url:
                'https://static-1307211266.cos.ap-shanghai.myqcloud.com/o6Dbe5TK-UVoapASMs4HmDi1t1U4/1663938331864572493_364_1663938331558',
            emergency_status: 6,
            name: 'yineima',
            time_tag: '2023-01-30',
            video_cnt: 2,
            longitude: 114.05724335,
        },
    ],
});
const getCensusRespondData = async () => {
    const res = await getEventList({
        page: 1,
        size: 10,
        c: '1611370458219806720',
    });

    waringObj.list = res.data || [];
};

const handleRow = async (row) => {
    const res = await getEventDetails({
        emergency_id: row.emergency_id,
        emergency_type: row.emergency_type,
    });

    console.log(res, '===getEventDetails');
};

const getCensusStatistics = async () => {
    const res = await getEventStatistics({ platform: 0 });

    console.log(res, '===getEventStatistics');
};

onMounted(() => {
    getCensusRespondData();
    getCensusStatistics();
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
        line-height: 7px;
        font-size: 7px;
        padding: 5px 0;
    }
    .el-table .el-table__cell {
        padding: 5px 0;
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
        line-height: 13px;
        font-size: 13px;
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
