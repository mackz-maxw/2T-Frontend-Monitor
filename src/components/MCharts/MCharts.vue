<template>
  <div :id="uuid" :style="style"></div>
  <!-- :style="style" -->
</template>
<script>  
import * as echarts from "echarts";
// import {EleResize} from '@/assets/esresize.js';

const idGen = 
/**
 * 随机生成字符串
 * @param len 指定生成字符串长度
 */
function (len = 16){
    let _charStr = 'abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789',
        min = 0, 
        max = _charStr.length-1, 
        _str = '';                    //定义随机字符串 变量
    //判断是否指定长度，否则默认长度为15
    len = len || 15;
    //循环生成字符串
    for(var i = 0, index; i < len; i++){
        index = (function(randomIndexFunc, i){         
                    return randomIndexFunc(min, max, i, randomIndexFunc);
                })(function(min, max, i, _self){
                    let indexTemp = Math.floor(Math.random()*(max-min+1)+min),
                        numStart = _charStr.length - 10;
                    if(i==0&&indexTemp >=numStart){
                        indexTemp = _self(min, max, i, _self);
                    }
                    return indexTemp ;
                }, i);
        _str += _charStr[index];
    }
    return _str;
}
export default {
  name: "MCharts",
  props: {
    height: {
      type: String,
    //   default: "400px",
    default: "100%",
    },
    width: {
      type: String,
    //   default: "600px",
    default: "100%",
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
            duration: 500,
          },
        });
      }
    },
    option() {
      if (this.myChart) {
        //   notMerge这个方法，是表示配置不重复，但是目前这个分代码没有生效
        this.myChart.setOption(this.option),
          {
            // notMerge: true,
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
  methods: {
    resize() {
      this.myChart.setOption(this.option);
      this.myChart.resize();
    }
  }, 
  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById(this.uuid));
    this.myChart.setOption(this.option);
               window.addEventListener('resize', this.resize.bind(this))
    // window.addEventListener('resize', function () {this.myChart.resize();})
    // let listener = function(){
    //     console.log('resize')
    //     this.myChart.resize()
    // }
    // EleResize.on(resizeDiv,listener);
  },
};
</script>