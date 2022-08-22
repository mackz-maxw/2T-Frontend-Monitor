import * as echarts from 'echarts'
import china from '@/utils/map/china.json'
import world from '@/utils/map/world.json'
import worldName from '@/utils/map/worldName.json'

// echarts.registerMap('china', china);
echarts.registerMap('world', world);

var geoCoordMap = [
    { name: "芬兰", value: worldName.geoCoordMap["芬兰"], symbolSize: 8 },
    { name: "德国", value: worldName.geoCoordMap["德国"], symbolSize: 8 },
    { name: "英国", value: worldName.geoCoordMap["英国"], symbolSize: 8 },
    { name: "韩国", value: worldName.geoCoordMap["韩国"], symbolSize: 8 },
    { name: "日本", value: worldName.geoCoordMap["日本"], symbolSize: 8 },
  ]
  var data = [
    { name: "澳大利亚", value: [135.193845, -25.304039], symbolSize: 8 },
    { name: "美国", value: [-100.696295, 33.679979], symbolSize: 8 },
  ]

let resData=getData();
function getData() {
    let data = [];
    for (let i = 0; i < 20; i++) {
        let num = Math.round(Math.random() * Math.random() * 400)
        data.push({ "name": world.features[i].properties.name, "value": [...world.features[i].properties.center, num] })
    }
    return data;
}

function getTop5(dataValue){
    let data=JSON.parse(JSON.stringify(dataValue));
    return data.splice(0,5)
}

let dataTop5=getTop5(resData);

function getMarList(dataValue){
    let data=[];
    for(let index in dataValue){
        let [xAxis,yAxis,value]=dataValue[index].value
        data.push({
            coord:[xAxis,yAxis],
            value
        })
    }
    console.log(data)
    return data;
}

function getMapColor(dataValue){
    let data=[];
    for(let index in dataValue){
        
        let [xAxis,yAxis,value]=dataValue[index].value
        if(value>0&&value<50){
            data.push({
                name: dataValue[index].name,
                itemStyle: {
                    areaColor: '#94d2ff',
                    color: '#94d2ff'
                }
            })
        }else if(value<100){
            data.push({
                name: dataValue[index].name,
                itemStyle: {
                    areaColor: '#52b7ff',
                    color: '#52b7ff'
                }
            })
        }else if(value>=100){
            data.push({
                name: dataValue[index].name,
                itemStyle: {
                    areaColor: '#24a4ff',
                    color: '#24a4ff'
                }
            })
        }
        
    }
    console.log(data)
    return data;
}

export const option = {
    tooltip: {
        trigger: 'item',
      },        
    geo: {
        map: "world",
        roam: true,// 一定要关闭拖拽
        zoom: 1.5,
        center: [105, 36], // 调整地图位置
        label: {
            normal: {
                show: false, //关闭省份名展示
                
            },
            emphasis: {
                show: true,
                fontSize: "12",
                color: "rgba(0,0,0,0.7)"
            }
        },
        // regions:getMapColor(resData),
        
    },
    series: [
        {
            name: "Top 5",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: geoCoordMap,
            symbolSize: 8,
            tooltip: {
                show: true
            },
            encode: {
                value: 2
            },
            showEffectOn: "render",
            rippleEffect: {
                brushType: "stroke",
                period: 9,
                scale: 5
            },
            hoverAnimation: true,
            label: {
                formatter: "{@value}",
                position: "top",
                show: false,
            },
            itemStyle: {
                color: "#ffc64a",
                shadowBlur: 2,
                shadowColor: "#333"
            },
            // markPoint: {
            //     symbolSize:25,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 
            //     data: getMarList(dataTop5)
            // },
            tooltip: {
                show:false
            }, 
            zlevel: 1
        }
    ]
}

