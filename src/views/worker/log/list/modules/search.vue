<template>
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        label-width="80px"
        :inline="true"
    >
        <el-form-item label="操作人" prop="userName">
            <el-input v-model="ruleForm.userName" />
        </el-form-item>

        <el-form-item label="操作时间" prop="status">
            <el-select v-model="ruleForm.status" placeholder="请选择">
                <el-option label="开启" value="1" />
                <el-option label="冻结" value="0" />
            </el-select>
        </el-form-item>
        <el-form-item label="操作类型" prop="hospital">
            <el-select v-model="ruleForm.hospital" placeholder="请选择">
                <el-option label="机构1" value="1" />
                <el-option label="机构2" value="0" />
            </el-select>
        </el-form-item>
        <div class="btn-box">
            <el-button type="primary" @click="submitForm">查询</el-button>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </div>
    </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue';

const emit = defineEmits(['editDialogShow', 'searchList']);

const ruleFormRef = ref();
const ruleForm = reactive({
    userName: '',
    status: '',
    hospital: '',
});

const submitForm = () => {
    emit('searchList', { ...ruleForm });
};

const resetForm = (formEl) => {
    if (!formEl) return;
    formEl.resetFields();
};
</script>
<style lang="less" scoped>
.btn-box {
    text-align: right;
    margin-bottom: 60px;
}
</style>
