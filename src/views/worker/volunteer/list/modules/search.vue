<template>
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        label-width="80px"
        :inline="true"
    >
        <el-form-item label="关键字" prop="volunteerId">
            <el-input v-model="ruleForm.volunteerId" />
        </el-form-item>
        <el-form-item prop="trainTime" label="加入时间">
            <el-date-picker
                v-model="ruleForm.trainTime"
                type="date"
                placeholder="请选择"
                style="width: 100%"
            />
        </el-form-item>
        <el-form-item label="人员状态" prop="volunteerState">
            <el-select v-model="ruleForm.volunteerState" placeholder="请选择">
                <el-option label="开启" value="1" />
                <el-option label="冻结" value="0" />
            </el-select>
        </el-form-item>

        <div class="btn-box">
            <el-button type="primary" @click="submitForm">查询</el-button>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
            <el-button @click="handleUpload">导入</el-button>
            <el-button @click="handleExport">导出</el-button>
            <el-button @click="volunteerDialogShow" type="primary"
                >新增志愿者</el-button
            >
        </div>
    </el-form>
    <Upload
        v-model="uploadDialogShow"
        @closeUploadDialogShow="closeUploadDialogShow"
    />
</template>

<script setup>
import { reactive, ref } from 'vue';
import Upload from './upload.vue';
import { exportData } from '@/network/volunteer.js';
import { ElMessage } from 'element-plus';

const emit = defineEmits(['editDialogShow', 'searchList']);

const ruleFormRef = ref();
const ruleForm = reactive({
    volunteerId: '',
    volunteerState: '',
    trainTime: '',
});

const uploadDialogShow = ref(false);
const submitForm = () => {
    emit('searchList', { ...ruleForm });
};

const resetForm = (formEl) => {
    if (!formEl) return;
    formEl.resetFields();
};

const volunteerDialogShow = () => {
    emit('editDialogShow', true);
};

const handleUpload = () => {
    uploadDialogShow.value = true;
};

const closeUploadDialogShow = () => {
    uploadDialogShow.value = false;
};

// 导出数据
const handleExport = async () => {
    const params = {
        ...ruleForm,
    };
    const res = await exportData(params);

    if (res.msg) {
        window.open(res.msg, '_self');
    } else {
        ElMessage({
            type: 'waring',
            message: '下载失败，请稍后再试',
        });
    }
};
</script>
<style lang="less" scoped>
.btn-box {
    text-align: right;
    margin-bottom: 60px;
}
</style>
