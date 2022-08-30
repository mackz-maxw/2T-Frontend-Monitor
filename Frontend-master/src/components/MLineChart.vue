<template>
  <div ref="chartDom" style="width:100%;height: 200px;">
  
  </div>
</template>

<script lang="ts" setup>
import {ref,onMounted} from 'vue';
import * as echarts from 'echarts';

type seriesType = 
  {
      name: string,
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      data: Array<number>,
      itemStyle: {
        color: '#3a57fa'
      }
};

interface Props {
  xAxisData: Array<string>;
  series: Array<seriesType>;
}
const props = defineProps<Props>();


type EChartsOption = echarts.EChartsOption

let chartDom = ref<null|HTMLElement>(null);
let option: EChartsOption;

function seriesParam() {
  let seriesArray:Array<seriesType>=[];
  for(let item of props.series){
    seriesArray.push(Object.assign({
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      itemStyle: {
        color: '#3a57fa'
      }
    },item));
  }
  return seriesArray;
}

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: props.xAxisData
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: seriesParam()
};

onMounted(()=>{
    chartDom.value?.setAttribute("_echarts_instance_", "");
    let myChart = echarts.init(chartDom.value!);
    myChart.setOption(option);
})
</script>

<style lang="scss" scoped>

</style>