import * as echarts from 'echarts'
import china from '@/utils/map/china.json'
import world from '@/utils/map/world.json'
import worldName from '@/utils/map/worldName.json'

// echarts.registerMap('china', china);
echarts.registerMap('world', world);


let resData=getData();
function getData() {
    let data = [];
    //调接口
    data=[
        { name: "芬兰", value: [...worldName.geoCoordMap["芬兰"],Math.round(Math.random() * Math.random() * 400)]},
        { name: "中国", value: [...worldName.geoCoordMap["中国"],Math.round(Math.random() * Math.random() * 400)]},
        { name: "英国", value: [...worldName.geoCoordMap["英国"],Math.round(Math.random() * Math.random() * 400)]},
        { name: "韩国", value: [...worldName.geoCoordMap["韩国"],Math.round(Math.random() * Math.random() * 400)]},
        { name: "日本", value: [...worldName.geoCoordMap["日本"],Math.round(Math.random() * Math.random() * 400)]},
        { name: "德国", value: [...worldName.geoCoordMap["德国"],Math.round(Math.random() * Math.random() * 400)]},
        { name: "新加坡", value: [...worldName.geoCoordMap["新加坡"],Math.round(Math.random() * Math.random() * 400)]},
        { name: "泰国", value: [...worldName.geoCoordMap["泰国"],Math.round(Math.random() * Math.random() * 400)]},
      ]
    
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

export const worldOption = {
    tooltip: {
        trigger: 'item',
      },        
    geo: {
        map: "world",
        roam: false,// 一定要关闭拖拽
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
        regions:getMapColor(resData),
        nameMap:worldName.nameMap
    },
    series: [
        {
            name: "Top 5",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: dataTop5,
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
            markPoint: {
                symbolSize:25,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 
                data: getMarList(dataTop5)
            },
            tooltip: {
                show:false
            }, 
            zlevel: 1
        }
    ]
}

