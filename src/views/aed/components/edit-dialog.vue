<template>
    <el-dialog
        v-model="dialogVisible"
        :title="currDialogType === 'add' ? '新增设备' : '编辑设备'"
        width="60%"
        class="aed-dialog"
    >
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            label-width="150px"
            status-icon
            :inline="true"
        >
            <el-form-item
                label="设备序列号"
                prop="aedNumber"
                required
                :show-message="false"
            >
                <el-input v-model="ruleForm.aedNumber" />
            </el-form-item>

            <el-form-item
                label="品牌"
                prop="pinPai"
                required
                :show-message="false"
            >
                <el-input v-model="ruleForm.pinPai" />
            </el-form-item>
            <el-form-item
                label="保修时间"
                prop="warranty"
                required
                :show-message="false"
            >
                <el-date-picker
                    v-model="ruleForm.warranty"
                    type="date"
                    placeholder="请选择保修日期"
                    style="width: 100%"
                    value-format="YYYY-MM-DD"
                />
            </el-form-item>

            <el-form-item
                label="设备状态"
                prop="aedStatus"
                required
                :show-message="false"
            >
                <el-radio-group v-model="ruleForm.aedStatus">
                    <el-radio label="0">正常</el-radio>
                    <el-radio label="1">异常</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item
                label="电池状态"
                prop="batteryStatus"
                required
                :show-message="false"
            >
                <el-radio-group v-model="ruleForm.batteryStatus">
                    <el-radio label="0">正常</el-radio>
                    <el-radio label="1">异常</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item
                label="电池电量"
                prop="aedLevel"
                required
                :show-message="false"
            >
                <el-input
                    v-model="ruleForm.aedLevel"
                    placeholder="现有电量/总电量"
                />
            </el-form-item>
            <el-form-item
                label="电极片状态"
                prop="electrodeStatus"
                required
                :show-message="false"
            >
                <el-radio-group v-model="ruleForm.electrodeStatus">
                    <el-radio label="0">正常</el-radio>
                    <el-radio label="1">异常</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item
                label="所属街道"
                prop="stree"
                required
                :show-message="false"
            >
                <el-input v-model="ruleForm.stree" />
            </el-form-item>

            <el-form-item
                label="所属社区"
                prop="community"
                required
                :show-message="false"
            >
                <el-input v-model="ruleForm.community" />
            </el-form-item>
            <el-form-item
                label="安装厂商"
                prop="manufacturer"
                required
                :show-message="false"
            >
                <el-input v-model="ruleForm.manufacturer" />
            </el-form-item>
            <el-form-item
                label="安装地址"
                prop="aedPosition"
                required
                :show-message="false"
            >
                <el-input v-model="ruleForm.aedPosition" />
            </el-form-item>
            <el-form-item
                label="安装地址精度"
                prop="aedLongitude"
                required
                :show-message="false"
            >
                <el-input v-model="ruleForm.aedLongitude" />
            </el-form-item>
            <el-form-item
                label="安装地址维度"
                prop="aedLatitude"
                required
                :show-message="false"
            >
                <el-input v-model="ruleForm.aedLatitude" />
            </el-form-item>

            <el-form-item
                label="安装时间"
                prop="installationTime"
                required
                :show-message="false"
            >
                <el-date-picker
                    v-model="ruleForm.installationTime"
                    type="date"
                    placeholder="请选择保修日期"
                    style="width: 100%"
                    value-format="YYYY-MM-DD"
                />
            </el-form-item>

            <el-form-item
                label="资金来源"
                prop="capital"
                required
                :show-message="false"
            >
                <el-radio-group v-model="ruleForm.capital">
                    <el-radio label="0">正常</el-radio>
                    <el-radio label="1">异常</el-radio>
                </el-radio-group>
            </el-form-item>

            <el-form-item
                label="AED柜号"
                prop="aedNo"
                required
                :show-message="false"
            >
                <el-input v-model="ruleForm.aedNo" />
            </el-form-item>
            <el-form-item
                label="设备管理员"
                prop="manager"
                required
                :show-message="false"
            >
                <el-input v-model="ruleForm.manager" />
            </el-form-item>
            <el-form-item
                label="管理员手机"
                prop="managerPhone"
                required
                :show-message="false"
            >
                <el-input v-model="ruleForm.managerPhone" />
            </el-form-item>
            <el-form-item
                label="管理单位座机"
                prop="managerTel"
                required
                :show-message="false"
            >
                <el-input v-model="ruleForm.managerTel" />
            </el-form-item>

            <div class="aed-dialog__btns">
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
import { aedAdd, aedEdit } from '@/network/aed.js';
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
    aedNumber: '',
    aedStatus: '',
    aedLevel: '',
    aedPosition: '',
    aedNo: '',
    manager: '',
    managerPhone: '',
    pinPai: '',
    warranty: '',
    batteryStatus: '',
    electrodeStatus: '',
    stree: '',
    community: '',
    manufacturer: '',
    installationTime: '',
    capital: '',
    managerTel: '',
    aedLatitude: '',
    aedLongitude: '',
};
const ruleForm = ref({});

const currDialogType = ref('add');

const submitForm = async (formEl) => {
    if (!formEl) return;
    await formEl.validate((valid) => {
        console.log('=====', valid);

        if (valid) {
            const currFun = currDialogType.value === 'add' ? aedAdd : aedEdit;
            currFun({
                ...ruleForm.value,
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
    ruleForm.value = {
        ...item,
    };
    currDialogType.value = 'edit';
};

defineExpose({ setDialogData });
</script>

<style lang="less" scoped>
.aed-dialog {
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
