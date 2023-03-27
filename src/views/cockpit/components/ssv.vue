<template>
    <Ssv @login="onLoginSuccess" :init="plginParams" />
</template>
<script setup>
import { getQuery } from '@/utils/common';
const emit = defineEmits(['handleTokenInfo']);

const onLoginSuccess = (data) => {
    // sdk登录后返回的数据 示例：
    // let data = {
    //   tenantInfo: {
    //     tenant_id: 'bcxxx',
    //     tenant_name: '测试部门',
    //     roles: [1],
    //     platform: 2,
    //   },
    //   tokenInfo: {
    //     expires_in: 1676040486,
    //     access_token: '',
    //     refresh_token: '',
    //     uid: '1xxx'
    //   },
    // }
    // 说明：
    // 登陆态 access_token
    // 平台标识 platform
    // 用户标识 uid

    emit('handleTokenInfo', {
        ...data.tokenInfo,
        ...data.tenantInfo,
        env: getQuery('env') === 'test' ? 'test' : 'master',
    });
};

const TenantUserInfo = localStorage.getItem('TenantUserInfo');
const userInfo = TenantUserInfo ? JSON.parse(TenantUserInfo) : {};
const plginParams = {
    id: userInfo.username,
    pwd: userInfo.password,
    login_type: 1,
    platform: 1,
};
</script>
