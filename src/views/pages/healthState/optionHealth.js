var e = 80;
export const option1 = {
  title: {
    show: false,
    text: e + "%",
    x: "center",
    y: "center",// 通过x,y将标题(进度)定位在圆环中心
    textStyle: {
      fontSize: "25",
      color: "white",
      fontWeight: "400",
      fontFamily: "DINPro, DINPro-Regular",
    },
  },
  tooltip: {
    trigger: "item",
    formatter: "{d}%",
    show: false,
  },
  legend: {
    orient: "vertical",
    x: "left",
    show: false,
  },
  series: {


    name: "",
    type: "pie",
    radius: ["65%", "85%"],
    avoidLabelOverlap: true,
    hoverAnimation: false,
    label: {


      normal: {
        show: false,
        position: "left",
      },
      emphasis: {
        show: false,
      },
    },
    labelLine: {
      normal: {
        show: false,
      },
    },
    data: [
      {
        value: e,
        name: "",
        itemStyle: {
          color: "#6790D8",
        },
      },
      {
        value: 100 - e,
        name: "",
        itemStyle: {
          color: "transparent",
        },
      },
    ],
  },

};
 
export const option2 = {
    tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
                    normal: {
                        show: true,             // 是否显示标签[ default: false ]
                        position: 'outside',    // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
                        formatter: '{b} : {c}次'  // 标签内容
                    }
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: true
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
};

export const option3 = {
  // title: {
  //   text: 'Stacked Line'
  // },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    // left: '3%',
    // right: '4%',
    // bottom: '3%',
    
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210],
      areaStyle: {}
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310],
      areaStyle: {}
    },

  ]
}