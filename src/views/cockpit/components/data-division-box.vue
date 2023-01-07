<template>
    <div class="division-box">
        <div class="division-num">
            <div class="division-num__item">
                <div class="division-num__item-title">月累计救援量(次)</div>
                <div class="division-num__item-num">5247</div>
            </div>
            <div class="division-num__item">
                <div class="division-num__item-title">年累计救援量(次)</div>
                <div class="division-num__item-num">68,214</div>
            </div>
        </div>
    </div>
    <div
        class="map-box"
        id="mapBox"
        :style="{ width: '1358px', height: '580px' }"
    ></div>
</template>

<script setup>
import { onMounted } from 'vue';

var map = null;

const initMap = () => {
    map = new BMapGL.Map('mapBox', {
        backgroundColor: [0, 0, 0, 0],
    });
    //设置地图的中心点如合肥的坐标
    var point = new BMapGL.Point(113.918909, 22.56794);

    map.centerAndZoom(point, 14);

    //创建地址解析器实例
    var myGeo = new BMapGL.Geocoder();
    // 将地址解析结果显示在地图上，并调整地图视野
    myGeo.getPoint(
        '广州省宝安区人民医院',
        function (point) {
            if (point) {
                map.centerAndZoom(point, 14);
                map.addOverlay(
                    new BMapGL.Marker(point, { title: '广州省宝安区人民医院' })
                );
            } else {
                alert('您选择的地址没有解析到结果！');
            }
        },
        '广州省'
    );
    //禁止拖拽
    map.disableDragging();
    map.disableDoubleClickZoom();
    map.disablePinchToZoom();
    map.disableKeyboard();
    map.disableScrollWheelZoom();
    //  map.setTilt(50);

    // getBoundary();
};

// const getBoundary = () => {
//     var bdary = new BMapGL.Boundary();
//     bdary.get('广州省宝安区', function (rs) {
//         for (var i = 0; i < rs.boundaries.length; i++) {
//             var xyArr = rs.boundaries[i].split(';');
//             var ptArr = [];

//             for (var j = 0; j < xyArr.length; j++) {
//                 var tmp = xyArr[j].split(',');
//                 var pt = new BMapGL.Point(tmp[0], tmp[1]);
//                 ptArr.push(pt);
//             }

//             var mapmask = new BMapGL.MapMask(ptArr, {
//                 isBuildingMask: true,
//                 isPoiMask: true,
//                 isMapMask: true,
//                 showRegion: 'inside',
//             });

//             map.addOverlay(mapmask);

//             var prism = new BMapGL.Prism(ptArr, 10000, {
//                 topFillColor: '#5679ea',
//                 topFillOpacity: 0.7,
//                 sideFillColor: '#5679ea',
//                 sideFillOpacity: 1,
//             });
//             map.addOverlay(prism);
//         }
//         // getRegion();
//     });
// };

// var dataArr = [
//     {
//         name: '安顺',
//         cp: [105.9082, 25.9882],
//         fillColor: '#002E65',
//     },
//     {
//         name: '贵阳',
//         cp: [106.6992, 26.7682],
//         fillColor: '#003A7F',
//     },
//     {
//         name: '遵义',
//         cp: [106.908, 28.1744],
//         fillColor: '#0051AF',
//     },
//     {
//         name: '黔东南苗族侗族自治州',
//         cp: [108.519944, 26.835886],
//         fillColor: '#006BE9',
//     },
//     {
//         name: '毕节市',
//         cp: [105.1611, 27.0648],
//         fillColor: '#1C94EB',
//     },
//     {
//         name: '黔南布依族苗族自治州',
//         cp: [107.235181, 25.705737],
//         fillColor: '#61B3FF',
//     },
//     {
//         name: '黔西南布依族苗族自治州',
//         cp: [105.5347, 25.3949],
//     },
//     {
//         name: '六盘水',
//         cp: [104.7546, 26.0925],
//     },
//     {
//         name: '铜仁市',
//         cp: [108.6218, 28.0096],
//     },
// ];

// const getRegion = () => {
//     dataArr.forEach((element) => {
//         var bdary = new BMapGL.Boundary();
//         bdary.get(element['name'], (rs) => {
//             var count = rs.boundaries.length;
//             for (let i = 0; i < count; i++) {
//                 var ply = new BMapGL.Polygon(rs.boundaries[i], {
//                     strokeWeight: 0.5,
//                     strokeColor: '#fff',
//                     fillOpacity: 0.6,
//                     fillColor: element['fillColor'] || '#006BE9',
//                 });
//                 map.addOverlay(ply);
//             }
//             // citySetLabel(
//             //     new BMapGL.Point(element['cp'][0], element['cp'][1]),
//             //     element['name']
//             // );
//         });
//     });
// };

// const citySetLabel = (cityCenter, cityName) => {
//     var label = new BMapGL.Label(cityName, {
//         offset: new BMapGL.Size(-20, -10),
//         position: cityCenter,
//     });
//     label.setStyle({
//         border: 'none',
//         background: 'transparent',
//         'font-size': '0.25rem',
//         color: '#fff',
//     });
//     map.addOverlay(label);
// };

onMounted(() => {
    initMap();
});
</script>
<style lang="less">
.map-box {
    .container-box__title {
        position: absolute;
        top: 0;
        left: 0;
    }
    background-image: none !important;
}
</style>

<style lang="less" scoped>
.division-box {
    .division-num {
        position: absolute;
        top: 60px;
        left: 24px;
        z-index: 100;

        &__item {
            width: 180px;
            height: 90px;
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            line-height: 14px;
            color: #fff;
            font-weight: 400;
            background: linear-gradient(
                rgba(42, 225, 181, 1) 0%,
                rgba(12, 180, 235, 1) 100%
            );
            margin-right: 20px;
            border-radius: 8px;
            &:nth-child(2) {
                background: linear-gradient(
                    rgba(249, 198, 97, 1) 0%,
                    rgba(253, 135, 134, 1) 100%
                );
            }

            &-title {
                &::before {
                    content: '';
                    display: inline-block;
                    width: 20px;
                    height: 15px;
                    background: url('../assets/vector.png');
                    background-repeat: no-repeat;
                    background-size: contain;
                    margin-right: 6px;
                }
            }
            &-num {
                font-size: 28px;
                line-height: 28px;
                margin-top: 10px;
                font-weight: 700;
            }
        }
    }
}
#mapBox {
    position: absolute;
    top: 62px;
    left: 1px;
}
</style>
