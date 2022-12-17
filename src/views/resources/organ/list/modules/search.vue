<template>
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        label-width="80px"
        :inline="true"
    >
        <el-form-item label="关键字" prop="name">
            <el-input v-model="ruleForm.name" />
        </el-form-item>

        <el-form-item label="状态" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择">
                <el-option label="上海" value="shagn" />
                <el-option label="北京" value="beijing" />
            </el-select>
        </el-form-item>
        <el-form-item label="机构类型" prop="region1">
            <el-select v-model="ruleForm.region" placeholder="请选择">
                <el-option label="上海" value="shagn" />
                <el-option label="北京" value="beijing" />
            </el-select>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)"
                >查询</el-button
            >
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
            <el-button @click="resetForm(ruleFormRef)">导入</el-button>
            <el-button @click="resetForm(ruleFormRef)">导出</el-button>
            <el-button @click="resetForm(ruleFormRef)" type="primary"
                >新增人员</el-button
            >
        </el-form-item>
    </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue';

const ruleFormRef = ref();
const ruleForm = reactive({
    name: '',
    region: '',
    region1: '',
});

const submitForm = (formEl) => {
    if (!formEl) return;
    console.log(ruleForm);
};

const resetForm = (formEl) => {
    if (!formEl) return;
    formEl.resetFields();
};
</script>
