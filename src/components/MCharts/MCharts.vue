<template>
  <div :id="uuid" :style="style" autoresize ></div>
  <!-- :style="style" -->
</template>
<script>
import * as echarts from "echarts";
// import {EleResize} from '@/assets/esresize.js';

const idGen = () => {
  return new Date().getTime();
};
export default {
  name: "MCharts",
  props: {
    height: {
      type: String,
    //   default: "400px",
    default: "99%",
    },
    width: {
      type: String,
    //   default: "600px",
    default: "99%",
    },
    option: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      uuid: null,
      myChart: null,
    };
  },
  created() {
    this.uuid = idGen();
  },
  watch: {
    width() {
      //如果实例可用
      if (this.myChart) {
        this.myChart.resize({
          Animation: {
            duration: 300,
          },
        });
      }
    },
    option() {
      if (this.myChart) {
        //   notMerge这个方法，是表示配置不重复，但是目前这个分代码没有生效
        this.myChart.setOption(this.option),
          {
            notMerge: true,
          };
      }
    },
  },
  computed: {
    style() {
      return {
        height: this.height,
        width: this.width,
      };
    },
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById(this.uuid));
    this.myChart.setOption(this.option);
               window.addEventListener('resize', function () {
                 this.echarts.resize();
            })
    // window.addEventListener('resize', function () {this.myChart.resize();})
    // let listener = function(){
    //     console.log('resize')
    //     this.myChart.resize()
    // }
    // EleResize.on(resizeDiv,listener);
  },
};
</script>