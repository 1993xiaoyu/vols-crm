<template>
    <div class="voluteeer-box">
        <Search
            @editDialogShow="volunteerDialogShow"
            @searchList="searchList"
        />
        <List
            ref="listRef"
            :searchData="searchData"
            @emitVolunteer="emitVolunteer"
        />
        <EditDialog
            v-model="editDialogShow"
            ref="editDialogRef"
            @closeEditDialogShow="volunteerDialogShow"
        />
    </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import List from './modules/list.vue';
import Search from './modules/search.vue';
import EditDialog from '../components/edit-dialog.vue';

const searchData = reactive({
    volunteerId: '',
    volunteerState: '',
    trainTime: '',
});
const listRef = ref();
const editDialogRef = ref();
const editDialogShow = ref(false);
const volunteerDialogShow = (data) => {
    editDialogShow.value = data;
};

const searchList = (data) => {
    searchData.volunteerId = data.volunteerId || '';
    searchData.volunteerState = data.volunteerState || '';
    searchData.trainTime = data.trainTime || '';

    listRef.value.getList();
};

const emitVolunteer = (data) => {
    editDialogShow.value = true;
    editDialogRef.value.setDialogData(data);
};
onMounted(() => {
    listRef.value.getList();
});
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
