<template>
    <div class="login-box">
        <div class="login-box__left">
            <div class="login-box__left-logo"></div>
            <div class="login-box__left-title">
                5分钟社会救援圈 信息驾驶舱平台
            </div>
        </div>
        <div class="login-box__right">
            <el-form
                label-position="top"
                label-width="80px"
                :model="loginForm"
                class="login-box__right-form"
            >
                <el-form-item label="账号">
                    <el-input v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input
                        v-model="loginForm.password"
                        show-password
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-checkbox v-model="loginForm.rememberMe"
                        >记住密码</el-checkbox
                    >
                    <!-- <span class="login-box__right-fp">忘记密码</span> -->
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="primary"
                        @click="onSubmit()"
                        class="login-box__right-btn"
                        >登录</el-button
                    >
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import { login } from '@/network/index.js';
import { useRouter } from 'vue-router';

const router = useRouter();

const loginForm = reactive({
    username: '',
    password: '',
    rememberMe: false,
});

const onSubmit = async () => {
    const { username, password, rememberMe } = loginForm;
    if (!username) {
        return;
    }
    if (!password) {
        return;
    }

    const res = await login({
        username,
        password,
        rememberMe,
    });
    if (!res.code) {
        router.push({ name: 'list' });
    } else {
        alertMessage = res.message || '请检查账号密码';
    }
};
</script>

<style lang="less">
.login-box__right-form {
    width: 536px;
    .el-form-item {
        position: relative;
    }
    .el-form-item__label {
        color: rgba(0, 0, 0, 0.3);
        font-size: 24px;
        margin-bottom: 6px;
    }
    .el-input__wrapper {
        border-radius: 12px;
        background: #ffffff;
        border: 1px solid #cdd5df;
        height: 88px;
    }
    .el-input__inner {
        height: 88px;
        font-size: 30px;
    }
    .el-form-item:nth-child(1) {
        margin-bottom: 30px;
    }
    .el-form-item:nth-child(2) {
        margin-bottom: 18px;
    }
    .el-checkbox__inner {
        width: 24px;
        height: 24px;
        &::after {
            height: 14px;
            left: 10px;
        }
    }

    .el-checkbox__label {
        color: rgba(0, 0, 0, 0.8);
        font-size: 24px;
        line-height: 24px;
        vertical-align: middle;
    }
}
</style>
<style lang="less" scoped>
.login-box {
    width: 100%;
    height: 100%;
    background: #eef2fc;
    display: flex;
    &__left {
        width: 1079px;
        height: 100%;
        background-image: url(./assets/bg.png);
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &-logo {
            width: 257px;
            height: 257px;
            background-image: url(./assets/logo.png);
            background-size: cover;
            background-repeat: no-repeat;
        }
        &-title {
            color: #ffffff;
            font-size: 37px;
            line-height: 70px;
            text-align: center;
            margin-top: 70px;
        }
    }
    &__right {
        width: 841px;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        &-fp {
            position: absolute;
            right: 0;
            color: #7175fc;
            font-size: 24px;
            line-height: 24px;
            cursor: pointer;
        }
        &-btn {
            border-radius: 12px;
            width: 100%;
            padding: 29px 0;
            margin-top: 16px;
            color: #f7f9fd;
            font-size: 30px;
            line-height: 30px;
        }
    }
}
</style>
