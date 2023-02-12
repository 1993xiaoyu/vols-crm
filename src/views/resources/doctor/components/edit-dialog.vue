<template>
    <el-dialog
        v-model="dialogVisible"
        :title="currDialogType === 'add' ? '新增医护人员' : '编辑医护人员'"
        width="60%"
        class="volunteer-dialog"
    >
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="100px"
            status-icon
            :inline="true"
        >
            <div class="volunteer-dialog__title">基本信息</div>
            <el-form-item label="姓名" prop="volunteerName" required>
                <el-input v-model="ruleForm.volunteerName" />
            </el-form-item>
            <el-form-item label="状态" prop="volunteerState">
                <el-switch
                    v-model="ruleForm.volunteerState"
                    active-value="0"
                    inactive-value="1"
                />
            </el-form-item>
            <el-form-item label="性别" prop="volunteerSex">
                <el-radio-group v-model="ruleForm.volunteerSex">
                    <el-radio label="0">男</el-radio>
                    <el-radio label="1">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="手机号" prop="volunteerPhone" required>
                <el-input v-model="ruleForm.volunteerPhone" />
            </el-form-item>

            <el-form-item label="医院" prop="volunteerOccupation" required>
                <el-select
                    v-model="ruleForm.volunteerOccupation"
                    placeholder="请选择医院"
                >
                    <el-option label="教师" value="1" />
                    <el-option label="医生" value="2" />
                </el-select>
            </el-form-item>

            <el-form-item label="科室" prop="volunteerEducation" required>
                <el-select
                    v-model="ruleForm.volunteerEducation"
                    placeholder="请选择科室"
                >
                    <el-option label="博士" value="1" />
                    <el-option label="研究生" value="2" />
                    <el-option label="本科" value="3" />
                    <el-option label="大专" value="4" />
                    <el-option label="其它" value="5" />
                </el-select>
            </el-form-item>

            <el-form-item label="职称" prop="volunteerStreet" required>
                <el-input v-model="ruleForm.volunteerStreet" />
            </el-form-item>

            <el-form-item label="家庭住址" prop="volunteerHomeAddress">
                <el-input v-model="ruleForm.volunteerHomeAddress" />
            </el-form-item>

            <el-form-item label="身份证号" prop="volunteerIdiccid">
                <el-input v-model="ruleForm.volunteerIdiccid" />
            </el-form-item>

            <el-form-item label="公司地址" prop="volunteerCompanyAddress">
                <el-input v-model="ruleForm.volunteerCompanyAddress" />
            </el-form-item>

            <div class="volunteer-dialog__btns">
                <el-button type="primary" @click="submitForm(ruleFormRef)"
                    >确定</el-button
                >
                <el-button @click="closeDialog(ruleFormRef)">取消</el-button>
            </div>
        </el-form>
    </el-dialog>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import { volunteerAdd, volunteerEdit } from '@/network/volunteer.js';
import { ElMessage } from 'element-plus';
const emit = defineEmits(['closeEditDialogShow', 'refreshList']);

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
});

const ruleFormRef = ref();
const defData = {
    volunteerName: '',
    volunteerState: '0',
    volunteerSex: '0',
    volunteerOccupation: '',
    volunteerEducation: '',
    volunteerPhone: '',
    volunteerStreet: '',
    volunteerHomeAddress: '',
    volunteerCompanyName: '',
    volunteerCompanyAddress: '',
    volunteerIdiccid: '',
};
const ruleForm = ref({});

const rules = reactive({
    volunteerName: [
        {
            required: true,
            message: '请填写姓名',
            trigger: 'blur',
        },
    ],
    volunteerOccupation: [
        {
            required: true,
            message: '请选择科室',
            trigger: 'blur',
        },
    ],
    volunteerEducation: [
        {
            required: true,
            message: '请选择医院',
            trigger: 'blur',
        },
    ],

    classNo: [
        {
            required: true,
            message: '请填写手机号',
            trigger: 'blur',
        },
    ],

    trainHospital: [
        {
            required: true,
            message: '请填写职称',
            trigger: 'blur',
        },
    ],

    trainAddress: [
        {
            required: true,
            message: '请填写志愿者培训地址',
            trigger: 'blur',
        },
    ],
});

const currDialogType = ref('add');

const submitForm = async (formEl) => {
    if (!formEl) return;
    await formEl.validate((valid) => {
        if (valid) {
            const currFun =
                currDialogType.value === 'add' ? volunteerAdd : volunteerEdit;
            currFun({
                ...ruleForm.value,
                trainTime:
                    ruleForm.value.startTime + '~' + ruleForm.value.endTime,
            }).then((res) => {
                if (res.code === 0) {
                    ElMessage({ type: 'success', message: '操作成功' });
                    emit('closeEditDialogShow', false);
                    emit('refreshList');
                    initDialog();
                } else {
                    ElMessage({
                        type: 'error',
                        message: res.message || '新增失败，请检查',
                    });
                }
            });
        }
    });
};

const closeDialog = () => {
    initDialog();
    emit('closeEditDialogShow', false);
    // if (!formEl) return;
    // formEl.resetFields();
};

const initDialog = () => {
    currDialogType.value = 'add';
    ruleForm.value = defData;
};

const dialogVisible = computed({
    get() {
        return props.show;
    },
    set(val) {
        initDialog();
        return val;
    },
});

const setDialogData = (item) => {
    const trainTime = item.trainTime.split('~') || [];
    ruleForm.value = {
        ...item,
        startTime: trainTime[0] || '',
        endTime: trainTime[1] || '',
    };
    currDialogType.value = 'edit';
};

defineExpose({ setDialogData });
</script>

<style lang="less" scoped>
.volunteer-dialog {
    .el-form-item {
        width: 45%;
    }
    .el-select {
        width: 100%;
    }

    &__title {
        font-weight: 700;
        margin-bottom: 24px;
    }

    &__btns {
        width: 100%;
        margin-top: 68px;
        padding-top: 22px;
        border-top: 1px solid #e1e6eb;
        margin-bottom: -8px;
        text-align: center;
    }
}
</style>
