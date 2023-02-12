<template>
    <div class="left-sidebar">
        <div class="left-sidebar-item">
            <img :src="LoginIcon" class="left-sidebar-item-icon" />
        </div>

        <el-tooltip
            class="box-item"
            effect="dark"
            placement="right"
            v-for="item in sideBarConfig.list || []"
            :key="item.name"
            :content="item.title"
        >
            <div
                class="left-sidebar-item"
                @click="handleSideBar(item)"
                :class="{
                    'is-active': sideItemActive(item),
                }"
            >
                <img
                    :src="sideItemActive(item) ? item.activedIcon : item.icon"
                    class="left-sidebar-item-icon"
                />
            </div>
        </el-tooltip>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import LoginIcon from '@/assets/logo.png';
const emit = defineEmits(['handleSideBar']);
const props = defineProps({
    sideBarConfig: {
        type: Object,
        default: () => {},
    },
});
// 根据不同屏幕计算下拉高度
const sideItemActive = (item) => {
    return props.sideBarConfig.currSideBarName === item.name;
};

const handleSideBar = (item) => {
    emit('handleSideBar', item);
};

const tipShow = ref(true);
</script>

<style lang="less" scoped>
.left-sidebar {
    width: 90px;
    height: 100vh;
    background-color: rgba(4, 7, 74, 1);

    .left-sidebar-item {
        position: relative;
        align-items: center;
        display: flex;
        justify-content: center;
        padding: 20px 0;
        cursor: pointer;

        &:first-child {
            margin-bottom: 128px;
        }

        .left-sidebar-item-icon {
            display: block;
            width: 50px;
            height: 50px;
            object-fit: contain;
        }

        &.is-active {
            &::after {
                content: '';
                position: absolute;
                display: inline-block;
                width: 5px;
                height: 10px;
                border-radius: 10px 0 0 10px;
                background-color: #fff;
                right: 0;
                top: 50%;
                margin-top: -5px;
            }
        }
    }
}
</style>
