<template>
    <el-dialog
        v-model="dialogVisible"
        :title="currDialogType === 'add' ? '新增志愿者' : '编辑志愿者'"
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
                <el-switch v-model="ruleForm.volunteerState" />
            </el-form-item>
            <el-form-item label="性别" prop="volunteerSex">
                <el-radio-group v-model="ruleForm.volunteerSex">
                    <el-radio label="1">男</el-radio>
                    <el-radio label="2">女</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item label="职业" prop="volunteerOccupation" required>
                <el-select
                    v-model="ruleForm.volunteerOccupation"
                    placeholder="请选择职业"
                >
                    <el-option label="教师" value="1" />
                    <el-option label="医生" value="2" />
                </el-select>
            </el-form-item>

            <el-form-item label="学历" prop="volunteerEducation" required>
                <el-select
                    v-model="ruleForm.volunteerEducation"
                    placeholder="请选择学历"
                >
                    <el-option label="博士" value="1" />
                    <el-option label="研究生" value="2" />
                    <el-option label="本科" value="3" />
                    <el-option label="大专" value="4" />
                    <el-option label="其它" value="5" />
                </el-select>
            </el-form-item>

            <el-form-item label="手机号" prop="volunteerPhone">
                <el-input v-model="ruleForm.volunteerPhone" />
            </el-form-item>

            <el-form-item label="所在街道" prop="volunteerStreet">
                <el-input v-model="ruleForm.volunteerStreet" />
            </el-form-item>

            <el-form-item label="家庭住址" prop="volunteerHomeAddress">
                <el-input v-model="ruleForm.volunteerHomeAddress" />
            </el-form-item>

            <el-form-item label="公司名称" prop="volunteerCompanyName">
                <el-input v-model="ruleForm.volunteerCompanyName" />
            </el-form-item>

            <el-form-item label="公司地址" prop="volunteerCompanyAddress">
                <el-input v-model="ruleForm.volunteerCompanyAddress" />
            </el-form-item>

            <el-form-item label="身份证号" prop="volunteerIdiccid">
                <el-input v-model="ruleForm.volunteerIdiccid" />
            </el-form-item>

            <div class="volunteer-dialog__title">培训信息</div>
            <el-form-item label="班级标号" prop="classNo" required>
                <el-input v-model="ruleForm.classNo" />
            </el-form-item>

            <el-form-item label="培训医院" prop="trainHospital" required>
                <el-input v-model="ruleForm.trainHospital" />
            </el-form-item>

            <el-form-item label="培训地点" prop="trainAddress" required>
                <el-input v-model="ruleForm.trainAddress" />
            </el-form-item>

            <el-form-item label="培训时间" prop="trainDate" required>
                <el-date-picker
                    v-model="ruleForm.trainDate"
                    type="datetime"
                    placeholder="请选择时间"
                    style="width: 100%"
                    value-format="YYYY-MM-DD HH:MM"
                />
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
const emit = defineEmits(['closeEditDialogShow']);

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
});

const ruleFormRef = ref();
const defData = {
    volunteerName: '',
    volunteerState: '',
    volunteerSex: '1',
    volunteerOccupation: '',
    volunteerEducation: '',
    volunteerPhone: '',
    volunteerStreet: '',
    volunteerHomeAddress: '',
    volunteerCompanyName: '',
    volunteerCompanyAddress: '',
    volunteerIdiccid: '',
    classNo: '',
    trainHospital: '',
    trainAddress: '',
    trainDate: '',
};
const ruleForm = ref({});

const rules = reactive({
    volunteerName: [
        {
            required: true,
            message: '请填写志愿者名字',
            trigger: 'blur',
        },
    ],
    volunteerOccupation: [
        {
            required: true,
            message: '请选择志愿者职业',
            trigger: 'blur',
        },
    ],
    volunteerEducation: [
        {
            required: true,
            message: '请选择志愿者学历',
            trigger: 'blur',
        },
    ],

    classNo: [
        {
            required: true,
            message: '请填写志愿者班级编号',
            trigger: 'blur',
        },
    ],

    trainHospital: [
        {
            required: true,
            message: '请填写志愿者培训医院',
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
    trainDate: [
        {
            type: 'date',
            required: true,
            message: '请选择志愿者培训时间',
            trigger: 'change',
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
            }).then((res) => {
                if (res.code === 0) {
                    ElMessage({ type: 'success', message: '操作成功' });
                    emit('closeEditDialogShow', false);
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
    ruleForm.value = item;
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
