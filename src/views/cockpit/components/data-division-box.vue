<template>
    <div
        class="map-box"
        id="mapBox"
        :style="{ width: '1360px', height: '580px', marginTop: '20px' }"
    ></div>
</template>

<script setup>
import { onMounted } from 'vue';

const BMap = window.BMap;
var map = null;

const initMap = () => {
    map = new BMap.Map('mapBox');
    //设置地图的中心点如合肥的坐标
    let point = new BMap.Point(106.714476, 26.60403);
    // 初始化地图，设置中心点坐标和地图级别
    map.centerAndZoom(point, 8);
    //禁止拖拽
    map.disableDragging();
    map.disableDoubleClickZoom();
    map.disablePinchToZoom();
    map.disableKeyboard();
    map.disableScrollWheelZoom();

    getBoundary();
};

const getBoundary = () => {
    const bdary = new BMap.Boundary();
    bdary.get('贵州省', (rs) => {
        const count = rs.boundaries.length;
        if (count === 0) {
            return;
        }
        const EN_JW = '180, 90;';
        const NW_JW = '-180,  90;';
        const WS_JW = '-180, -90;';
        const SE_JW = '180, -90;';
        // 东南西北四个角添加一个覆盖物
        const ply1 = new BMap.Polygon(
            rs.boundaries[0] + SE_JW + SE_JW + WS_JW + NW_JW + EN_JW + SE_JW,
            {
                strokeColor: 'none',
                fillColor: '#fff',
                fillOpacity: 1,
                strokeOpacity: 1,
            }
        );
        map.addOverlay(ply1);
        var pointArray = [];
        // 绘制‘贵州省’整体的外轮廓
        for (let i = 0; i < count; i++) {
            const ply = new BMap.Polygon(rs.boundaries[i], {
                strokeWeight: 0.5,
                strokeColor: '#006BE9',
                fillColor: '#006BE9',
            });
            map.addOverlay(ply);
            pointArray = pointArray.concat(ply.getPath());
        }

        map.setViewport(pointArray, {
            enableAnimation: false,
        }); // 调整视野
        getRegion();
    });
};

var dataArr = [
    {
        name: '安顺市',
        cp: [105.9082, 25.9882],
    },
    {
        name: '贵阳市',
        cp: [106.6992, 26.7682],
    },
    {
        name: '遵义市',
        cp: [106.908, 28.1744],
    },
    {
        name: '黔东南苗族侗族自治州',
        cp: [108.519944, 26.835886],
    },
    {
        name: '毕节市',
        cp: [105.1611, 27.0648],
    },
    {
        name: '黔南布依族苗族自治州',
        cp: [107.235181, 25.705737],
    },
    {
        name: '黔西南布依族苗族自治州',
        cp: [105.5347, 25.3949],
    },
    {
        name: '六盘水市',
        cp: [104.7546, 26.0925],
    },
    {
        name: '铜仁市',
        cp: [108.6218, 28.0096],
    },
];

const getRegion = () => {
    dataArr.forEach((element) => {
        var bdary = new BMap.Boundary();
        bdary.get(element['name'], (rs) => {
            var count = rs.boundaries.length;
            for (let i = 0; i < count; i++) {
                var ply = new BMap.Polygon(rs.boundaries[i], {
                    strokeWeight: 0.5,
                    strokeColor: '#fff',
                    fillOpacity: 0.6,
                    fillColor: '#006BE9',
                });
                map.addOverlay(ply);
            }
            citySetLabel(
                new BMap.Point(element['cp'][0], element['cp'][1]),
                element['name']
            );
        });
    });
};

const citySetLabel = (cityCenter, cityName) => {
    var label = new BMap.Label(cityName, {
        offset: new BMap.Size(-20, -10),
        position: cityCenter,
    });
    label.setStyle({
        border: 'none',
        background: 'transparent',
        'font-size': '0.25rem',
        color: '#fff',
    });
    map.addOverlay(label);
};

onMounted(() => {
    initMap();
});
</script>
<style lang="less">
.map-box {
    margin-top: 20px;
}
</style>
