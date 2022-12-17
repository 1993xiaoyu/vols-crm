<template>
    <div class="role-detail">
        <div class="role-detail-title">
            {{ roleId ? '编辑角色' : '新增角色' }}
            <div>
                <el-button @click="goBack">返回</el-button>
            </div>
        </div>
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="100px"
            status-icon
        >
            <el-form-item label="角色名称" prop="roleName" required>
                <el-input v-model="ruleForm.roleName" />
            </el-form-item>

            <el-form-item label="状态" prop="status">
                <el-switch
                    v-model="ruleForm.status"
                    active-value="1"
                    inactive-value="0"
                />
            </el-form-item>

            <el-form-item label="角色描述" prop="remark">
                <el-input
                    v-model="ruleForm.remark"
                    type="textarea"
                    :autosize="{ minRows: 4, maxRows: 8 }"
                />
            </el-form-item>
        </el-form>

        <div class="role-tree">
            <div class="role-tree__title">权限配置</div>
            <el-tree
                :data="treeDataObj.data"
                show-checkbox
                default-expand-all
                node-key="id"
                ref="treeRef"
                :props="treeDataObj.defaultProps"
            >
            </el-tree>
        </div>

        <div class="role-btn">
            <el-button type="primary" @click="submitForm(ruleFormRef)"
                >保存</el-button
            >
            <el-button @click="resetForm(ruleFormRef)">清空</el-button>
        </div>
    </div>
</template>
<script setup>
import { getCurrentInstance, onMounted, ref, reactive } from 'vue';
import { roleList, roleAdd } from '@/network/role.js';
import { ElMessage } from 'element-plus';

const instance = getCurrentInstance();
const { $router, $route } = instance.appContext.config.globalProperties;
const roleId = $route.query.roleId;
const detailObj = ref({});

const treeRef = ref();
const ruleFormRef = ref();
const defData = {
    roleName: '',
    status: '1',
    remark: '',
};
const ruleForm = ref({});

const treeDataObj = reactive({
    data: [
        {
            id: 1,
            label: '一级 1',
            children: [
                {
                    id: 4,
                    label: '二级 1-1',
                },
                {
                    id: 5,
                    label: '二级 1-2',
                },
                {
                    id: 6,
                    label: '二级 1-3',
                },
            ],
        },
        {
            id: 2,
            label: '一级 2',
            children: [
                {
                    id: 7,
                    label: '二级 2-1',
                },
                {
                    id: 8,
                    label: '二级 2-2',
                },
            ],
        },
        {
            id: 3,
            label: '一级 3',
            children: [
                {
                    id: 99,
                    label: '二级 3-1',
                },
                {
                    id: 899,
                    label: '二级 3-2',
                },
            ],
        },
    ],
    defaultProps: {
        children: 'children',
        label: 'label',
    },
});
const rules = reactive({
    roleName: [
        {
            required: true,
            message: '请填写',
            trigger: 'blur',
        },
    ],
});

// 请求列表
const getDetail = async () => {
    const params = {
        roleId,
    };
    const res = await roleList(params);
    const currData = res.rows || [];
    detailObj.value = currData[0] || {};
};

// 返回
const goBack = () => {
    $router.go(-1);
};

// 保存
const submitForm = async (formEl) => {
    if (!formEl) return;
    await formEl.validate((valid) => {
        if (valid) {
            const menuIds = treeRef.value.getCheckedKeys();

            if (!menuIds.length) {
                ElMessage({
                    type: 'waring',
                    message: '请选择权限配置',
                });
            } else {
                const params = {
                    ...ruleForm.value,
                    menuIds,
                };
                roleAdd(params).then((res) => {
                    if (res.code === 0) {
                        ElMessage({
                            type: 'success',
                            message: '操作成功',
                        });
                        goBack();
                    } else {
                        ElMessage({
                            type: 'error',
                            message: res.msg || '系统异常，稍后再试',
                        });
                    }
                });
            }
        }
    });
};

// 清空
const resetForm = (formEl) => {
    if (!formEl) return;
    formEl.resetFields();
    treeRef.value.setCheckedNodes([]);
};

onMounted(() => {
    if (roleId) {
        getDetail();
    }
    ruleForm.value = defData;
});
</script>

<style lang="less">
.role-tree {
    .el-tree-node {
        padding: 5px;
    }
    .el-tree-node__children {
        .el-tree-node {
            display: inline-flex;
        }
    }
}
</style>

<style lang="less" scoped>
.role-detail {
    background: #fff;
    padding: 30px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    .el-form {
        width: 600px;
    }
    &-title {
        color: #333333;
        font-size: 28px;
        line-height: 28px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
    }
}

.role-tree {
    margin-top: 60px;

    &__title {
        display: inline-block;
        color: #7175fc;
        border-bottom: 2px solid #7175fc;
        padding: 0 10px 6px 10px;
        font-size: 16px;
        margin-bottom: 20px;
    }
}

.role-btn {
    margin-top: 100px;
}
</style>
