import * as echarts from 'echarts'
import china from '@/utils/map/china.json'

echarts.registerMap('china', china);

let resData=getData();
function getData() {
    let data = [];
    for (let i = 0; i < 20; i++) {
        let num = Math.round(Math.random() * Math.random() * 400)
        data.push({ "name": china.features[i].properties.name, "value": [...china.features[i].properties.center, num] })
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

export const chinaOption = {
    tooltip: {
        trigger: 'item',
      },        
    geo: {
        map: "china",
        roam: false,// 一定要关闭拖拽
        zoom: 1.2,
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

