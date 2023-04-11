<template>
    <div class="app-container" v-if="!isFullScreen">
        <leftSideBar
            :sideBarConfig="sideBarConfig"
            @handleSideBar="handleSideBar"
        />
        <div class="content-container">
            <pageHeader :sideBarConfig="sideBarConfig" />
            <div class="content-detail">
                <div class="content-detail-box">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
    <div class="full-container" v-if="isFullScreen">
        <router-view></router-view>
    </div>
</template>

<script setup>
import { watch, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import leftSideBar from '@/components/left-sidebar/index.vue';
import pageHeader from '@/components/page-header/index.vue';
import useSideBar from '@/composables/useSideBar';

const { sideBarConfig, setCurrSideBarName, getMenuData, getRoleMenuTreeData } =
    useSideBar();
const router = useRouter();

const handleSideBar = (item, sideData) => {
    if (!item) {
        return;
    }

    setCurrSideBarName(sideData);
    router.push({ name: item.name });
};

const isFullScreen = ref(true);

watch(
    () => router.currentRoute.value.name,
    () => {
        const { meta, name } = router.currentRoute.value;

        if (name) {
            isFullScreen.value = meta.isFullScreen || false;
        }
    },
    { immediate: true }
);

onMounted(() => {
    // getMenuData();
    // getRoleMenuTreeData();
});
</script>
<style lang="less" scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100vh;
    background: rgba(244, 248, 251, 1);
}
.app-container {
    display: flex;
    .content-container {
        width: calc(100% - 90px);
        background: rgba(244, 248, 251, 1);
        overflow: hidden;
    }
    .content-detail {
        width: 100%;
        padding: 30px 20px;
        display: flex;
        box-sizing: border-box;
        height: 88vh;
        overflow: scroll;
        &-box {
            width: 100%;
        }
        &-right {
            width: calc(100% - 300px);
        }
    }
}

.full-container {
    width: 100vw;
    height: 100vh;
    //  overflow: auto;
}
</style>
