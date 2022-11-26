<template>
    <div class="left-sidebar">
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
                    'is-active': sideBarConfig.currSideBarName === item.name,
                }"
            >
                <img :src="item.icon" class="left-sidebar-item-icon" />
            </div>
        </el-tooltip>
    </div>
</template>

<script setup>
const emit = defineEmits(['handleSideBar']);
const props = defineProps({
    sideBarConfig: {
        type: Object,
        default: () => {},
    },
});

const handleSideBar = (item) => {
    emit('handleSideBar', item);
};
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
