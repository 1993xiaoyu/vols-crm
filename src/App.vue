<template>
    <div class="app-container" v-if="!isFullScreen">
        <div class="main-container">
            <leftSideBar
                :sideBarConfig="sideBarConfig"
                @handleSideBar="handleSideBar"
            />
        </div>
        <div class="content-container">
            <pageHeader :sideBarConfig="sideBarConfig" />
            <div class="content-detail">
                <secondSideBar
                    :secondSideBarConfig="secondSideBarConfig"
                    @handleSideBar="handleSecondSideBar"
                    v-if="secondSideBarConfig.list.length"
                />
                <div
                    :class="{
                        'content-detail-right': secondSideBarConfig.list.length,
                        'content-detail-box': !secondSideBarConfig.list.length,
                    }"
                >
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
import leftSideBar from '@/components/left-sidebar/index.vue';
import pageHeader from '@/components/page-header/index.vue';
import secondSideBar from '@/components/second-sidebar/index.vue';
import { watch, ref } from 'vue';
import { useRouter } from 'vue-router';
import useSideBar from '@/composables/useSideBar';

const {
    sideBarConfig,
    secondSideBarConfig,
    setCurrSideBarName,
    setSecondCurrSideBarName,
} = useSideBar();
const router = useRouter();

const handleSideBar = (item) => {
    if (!item) {
        return;
    }
    setCurrSideBarName(item);
    if (item.children && item.children.length) {
        handleSecondSideBar(item.children[0]);
    } else {
        router.push({ name: item.name });
    }
};

const handleSecondSideBar = (item) => {
    setSecondCurrSideBarName(item);
    router.push({ name: item.name });
};

const isFullScreen = ref(true);

watch(
    () => router.currentRoute.value.name,
    () => {
        const { meta, name } = router.currentRoute.value;

        if (name) {
            isFullScreen.value = meta.isFullScreen || false;
            const { parentName } = meta;
            const currParData = sideBarConfig.list.filter(
                (item) => item.name === parentName
            );

            setCurrSideBarName(currParData[0]);
        }
    },
    { immediate: true }
);
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
