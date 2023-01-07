<template>
    <div class="container-box">
        <div class="container-box__title">{{ title }}</div>
        <slot></slot>
    </div>
</template>
<script setup>
const props = defineProps({
    title: String,
});
</script>

<style lang="less" scoped>
.container-box {
    position: absolute;
    box-sizing: border-box;
    background: rgba(6, 13, 30, 0.3);
    border: 1px solid rgba(0, 136, 207, 0.3);
    margin-bottom: 20px;
    overflow: hidden;
    &__title {
        display: inline-block;
        color: #fff;
        font-size: 20px;
        font-weight: 400;
        line-height: 36px;
        padding: 0px 50px 0px 20px;
        height: 36px;
        background: url('../assets/title-bg.png');
        background-size: contain;
        background-repeat: no-repeat;
    }
}
</style>
