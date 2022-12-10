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

        <el-form-item>
            <el-button type="primary" @click="submitForm">查询</el-button>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
            <el-button @click="resetForm(ruleFormRef)">导入</el-button>
            <el-button @click="resetForm(ruleFormRef)">导出</el-button>
            <el-button @click="volunteerDialogShow" type="primary"
                >新增志愿者</el-button
            >
        </el-form-item>
    </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue';
const emit = defineEmits(['editDialogShow', 'searchList']);

const ruleFormRef = ref();
const ruleForm = reactive({
    volunteerId: '',
    volunteerState: '',
    trainTime: '',
});

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
</script>
