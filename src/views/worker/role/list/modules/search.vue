<template>
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        label-width="80px"
        :inline="true"
    >
        <el-form-item label="角色名" prop="roleName">
            <el-input v-model="ruleForm.roleName" />
        </el-form-item>

        <el-form-item label="状态" prop="status">
            <el-select v-model="ruleForm.status" placeholder="请选择">
                <el-option label="开启" value="1" />
                <el-option label="冻结" value="0" />
            </el-select>
        </el-form-item>

        <div class="btn-box">
            <el-button type="primary" @click="submitForm">查询</el-button>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
            <el-button @click="dialogShow" type="primary">新增角色</el-button>
        </div>
    </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const ruleFormRef = ref();
const ruleForm = reactive({
    roleName: '',
    status: '',
});

const submitForm = () => {
    emit('searchList', { ...ruleForm });
};

const resetForm = (formEl) => {
    if (!formEl) return;
    formEl.resetFields();
};

const dialogShow = () => {
    router.push({
        name: 'roleDetail',
    });
};
</script>
<style lang="less" scoped>
.btn-box {
    text-align: right;
    margin-bottom: 60px;
}
</style>
