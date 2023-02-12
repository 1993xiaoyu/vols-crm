<template>
    <div
        class="left-sidebar"
        :class="{ 'left-sidebar__collapse': !isCollapse }"
    >
        <div class="left-sidebar-item">
            <img :src="LoginIcon" class="left-sidebar-item-icon" />
        </div>

        <el-menu
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            :collapse-transition="false"
        >
            <div v-for="item in sideBarConfig.list || []">
                <el-sub-menu
                    :index="item.name"
                    v-if="item.children && item.children.length"
                >
                    <template #title>
                        <img
                            :src="
                                sideItemActive(item)
                                    ? item.activedIcon
                                    : item.icon
                            "
                            class="left-sidebar-item-icon"
                        />

                        <span>{{ item.title }}</span>
                    </template>

                    <el-menu-item
                        :index="citem.name"
                        v-for="citem in item.children || []"
                        @click="handleSideBar(citem, item.name)"
                    >
                        <span>{{ citem.title }}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-menu-item
                    :index="item.name"
                    v-if="!item.children.length"
                    @click="handleSideBar(item, item.name)"
                >
                    <template #title>
                        <img
                            :src="
                                sideItemActive(item)
                                    ? item.activedIcon
                                    : item.icon
                            "
                            class="left-sidebar-item-icon"
                        />
                        <span>{{ item.title }}</span>
                    </template>
                </el-menu-item>
            </div>
        </el-menu>
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

const handleSideBar = (item, pname) => {
    emit('handleSideBar', item, { name: pname, title: item.title });
};

const isCollapse = ref(false);
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
}
</style>

<style lang="less" scoped>
.left-sidebar {
    width: 80px;
    overflow: hidden;
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
            margin-bottom: 60px;
        }

        .left-sidebar-item-icon {
            display: block;
            width: 80px;
            height: 80px;
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
.left-sidebar-item-icon {
    width: 36px;
    height: 36px;
    margin-right: 10px;
}
.left-sidebar__collapse {
    width: 240px;
}
.left-sidebar-item-alone {
    .el-sub-menu__icon-arrow {
        display: none;
    }
}
</style>
