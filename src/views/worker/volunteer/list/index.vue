<template>
    <div class="voluteeer-box">
        <Search />
        <List />
    </div>
</template>
<script setup>
import List from './modules/list.vue';
import Search from './modules/search.vue';
</script>

<style lang="less" scoped>
.voluteeer-box {
    background: #fff;
    padding: 30px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
}
</style>
