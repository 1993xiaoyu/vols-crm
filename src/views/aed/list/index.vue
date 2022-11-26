<template>
    <div class="voluteeer-box">
        <Card />
        <div class="voluteeer-box-search">
            <Search />
            <List />
        </div>
    </div>
</template>
<script setup>
import Card from './modules/card.vue';
import Search from './modules/search.vue';
import List from './modules/list.vue';
</script>

<style lang="less" scoped>
.voluteeer-box-search {
    background: #fff;
    padding: 30px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
}
</style>
