<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column
            prop="userId"
            label="操作类型"
            width="120"
            fixed="left"
        />
        <el-table-column prop="userName" label="操作人" />

        <el-table-column prop="phoneNumber" label="操作内容" />
        <el-table-column prop="email" label="操作时间" />
    </el-table>
    <el-pagination
        v-model:current-page="pageParams.pageNum"
        :page-size="pageParams.pageSize"
        layout="total, prev, pager, next"
        :total="pageParams.total"
        @current-change="handleCurrentChange"
    />
</template>

<script setup>
import { ref, reactive, defineExpose } from 'vue';
import { userList } from '@/network/user.js';
const emit = defineEmits(['emitVolunteer']);
const props = defineProps({
    searchData: {
        type: Object,
        default: () => {},
    },
});
const tableData = ref();
const pageParams = reactive({
    pageSize: 20,
    pageNum: 1,
    total: 0,
});

// 请求列表
const getList = async () => {
    const params = {
        ...props.searchData,
        pageSize: pageParams.pageSize,
        pageNum: pageParams.pageNum,
    };
    const res = await userList(params);
    tableData.value = res.rows || [];
    pageParams.total = res.total || 0;
};

// 翻页
const handleCurrentChange = (val) => {
    pageParams.pageNum = val;
    getList();
};

defineExpose({ getList });
</script>
<style lang="less" scoped>
.el-pagination {
    margin-top: 30px;
    justify-content: flex-end;
}
</style>
