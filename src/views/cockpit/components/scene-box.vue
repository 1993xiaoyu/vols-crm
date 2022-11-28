<template>
    <div class="scene-box">
        <div class="scene-box__left">
            <img :src="sceneBg" />
        </div>
        <div
            class="scene-box__right"
            id="sceneRoute"
            :style="{ width: '600px', height: '313px' }"
        ></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import sceneBg from '../assets/scene-bg.png';
var map = null;
const initMap = () => {
    map = new BMap.Map('sceneRoute');
    //设置地图的中心点如合肥的坐标
    let point = new BMap.Point(116.404, 39.915);
    var p1 = new BMap.Point(116.301934, 39.977552);
    var p2 = new BMap.Point(116.508328, 39.919141);

    var driving = new BMap.DrivingRoute(map, {
        renderOptions: { map: map, autoViewport: true },
    });
    driving.search(p1, p2);

    // 初始化地图，设置中心点坐标和地图级别
    map.centerAndZoom(point, 13);
    //禁止拖拽
    map.disableDragging();
    map.disableDoubleClickZoom();
    map.disablePinchToZoom();
    map.disableKeyboard();
    map.disableScrollWheelZoom();
};
onMounted(() => {
    initMap();
});
</script>
<style lang="less">
.scene-box {
    .container-box__title {
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>
<style lang="less" scoped>
.scene-box {
    display: flex;
    .container-box__title {
        position: absolute;
        top: 0;
        left: 0;
    }
    &__left {
        img {
            width: 600px;
            height: 313px;
        }
    }
}
</style>
