<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="志愿者" width="180" fixed="left" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="address" label="人员状态" width="180" />
        <el-table-column prop="address" label="职业" width="180" />
        <el-table-column prop="address" label="地址" width="180" />
        <el-table-column prop="address" label="救援次数" width="180" />
        <el-table-column prop="address" label="培训医院" width="180" />
        <el-table-column prop="address" label="培训地点" width="180" />
        <el-table-column prop="address" label="培训日期" width="180" />
        <el-table-column label="操作" fixed="right" width="180">
            <template #default>
                <el-button link type="primary" size="small" @click="handleClick"
                    >编辑</el-button
                >
                <el-button
                    link
                    type="primary"
                    size="small"
                    @click="handleDetail"
                    >详情</el-button
                >
                <el-button link type="primary" size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination
        v-model:current-page="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const tableData = ref([
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]);

const currentPage1 = ref(1);
const handleSizeChange = (val) => {
    console.log(`${val} items per page`);
};
const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`);
};
const handleClick = () => {};

const handleDetail = () => {
    router.push({
        name: 'volunteerDetail',
        query: { userId: 111 },
    });
};
</script>
<style lang="less" scoped>
.el-pagination {
    margin-top: 30px;
    justify-content: flex-end;
}
</style>
