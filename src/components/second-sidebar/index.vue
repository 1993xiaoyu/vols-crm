<template>
    <div
        class="secoond-sidebar"
        :style="{ height: secondSideBarConfig.list.length * 46 + 'px' }"
    >
        <div
            v-for="item in secondSideBarConfig.list || []"
            class="secoond-sidebar-item"
            :class="{
                'is-active': secondSideBarConfig.currSideBarName === item.name,
            }"
            @click="handleSideBar(item)"
        >
            {{ item.title }}
        </div>
    </div>
</template>
<script setup>
const emit = defineEmits(['handleSideBar']);

const props = defineProps({
    secondSideBarConfig: {
        type: Object,
        default: () => {},
    },
});

const handleSideBar = (item) => {
    emit('handleSideBar', item);
};
</script>
<style lang="less" scoped>
.secoond-sidebar {
    width: 280px;
    padding: 30px 0;
    background-color: #ffffff;
    border-radius: 10px;
    margin-right: 20px;

    .secoond-sidebar-item {
        color: #333333;
        text-align: left;
        font-size: 16px;
        line-height: 16px;
        padding: 15px 32px;
        cursor: pointer;
        &.is-active {
            position: relative;
            color: #7175fc;
            &::before {
                content: '';
                width: 3px;
                height: 30px;
                background-color: #7175fc;
                position: absolute;
                left: 0;
                top: 8px;
            }
        }
    }
}
</style>
