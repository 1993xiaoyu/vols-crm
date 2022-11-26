<template>
    <div class="page-header">
        <div class="page-header-title">
            {{ sideBarConfig.currSideBarTitle }}
        </div>
        <div class="page-header-right">
            <el-badge value="3" class="page-header-right-alarm">
                <img
                    class="page-header-right-alarm"
                    src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                />
            </el-badge>
            <span class="page-header-right-name"> 小鱼爱吃鱼 </span>
            <el-avatar
                :size="55"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    sideBarConfig: {
        type: Object,
        default: () => {},
    },
});
</script>
<style lang="less" scoped>
.page-header {
    background-color: #fff;
    width: 100%;
    padding: 0 25px;
    box-sizing: border-box;
    text-align: left;
    font-weight: 500;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 10px 10px 0px rgba(0, 0, 0, 0.06);
    color: #333333;
    font-size: 28px;
    line-height: 28px;

    .page-header-right {
        display: flex;
        align-items: center;
        justify-content: center;
        &-name {
            margin-right: 14px;
            font-size: 21px;
            line-height: 21px;
        }
        &-alarm {
            display: inline-block;
            width: 46px;
            height: 46px;
            border-radius: 50%;
            margin-right: 37px;
        }
    }
}
</style>
