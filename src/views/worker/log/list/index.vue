<template>
    <div class="doctor-box">
        <Search @editDialogShow="editDialogShow" @searchList="searchList" />
        <List
            ref="listRef"
            :searchData="searchData"
            @emitVolunteer="emitVolunteer"
        />
    </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import List from './modules/list.vue';
import Search from './modules/search.vue';

const searchData = reactive({
    userName: '',
    status: '',
    hospital: '',
});
const listRef = ref();
const editDialogRef = ref();

const dialogShow = ref(false);
const editDialogShow = (data) => {
    dialogShow.value = data;
};

const searchList = (data) => {
    searchData.userName = data.userName || '';
    searchData.status = data.status || '';
    searchData.hospital = data.hospital || '';

    listRef.value.getList();
};

const emitVolunteer = (data) => {
    dialogShow.value = true;
    editDialogRef.value.setDialogData(data);
};
onMounted(() => {
    listRef.value.getList();
});
</script>

<style lang="less" scoped>
.doctor-box {
    background: #fff;
    padding: 30px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
}
</style>
