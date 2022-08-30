var e = 80;
export const option1 = {
  title:{
    show:true,
    // text:"执行任务",
    x:"center",
    textStyle:{
        fontSize:"15",
        color:"green",
        fontWeight:"bold",
    }
    
},
//  提示框组件
tooltip: {
    //是否显示提示框组件，包括提示框浮层和 axisPointe
    show:false,
    // 触发类型: item:数据项触发，axis：坐标轴触发
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
},

// 系列列表。每个系列通过 type 决定自己的图表类型
series: [
    {
        // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
        name:'任务进度',
        type:'pie',
        // 饼图的半径，数组的第一项是内半径，第二项是外半径
        radius: ['50%', '70%'],
        // 是否启用防止标签重叠策略，默认开启
        avoidLabelOverlap: false,          
         hoverAnimation: false,
        // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
        labelLine: {
            normal: {
                show: false
            }
        },
        data:[
            {   // 数据值
                value:20, 
                // 数据项名称
                name:'健康状况',
                //该数据项是否被选中
                selected:false,
                // 单个扇区的标签配置
                label: {
                normal: {
                    // 是显示标签
                    show: true,
                    position: 'center',
                    fontSize: 20,
                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                    formatter:'{b}\n{d}%',
                }
           
            },
             
            },
            {
                value:100, 
                label:{
                    normal:{
                        show:false,
                        
                    }
                }
                
            },
          
        ]
    }
  ]

};
export const option4 = {
  title:{
    show:true,
    // text:"执行任务",
    x:"center",
    textStyle:{
        fontSize:"15",
        color:"green",
        fontWeight:"bold",
    }
    
},
//  提示框组件
tooltip: {
    //是否显示提示框组件，包括提示框浮层和 axisPointe
    show:false,
    // 触发类型: item:数据项触发，axis：坐标轴触发
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
},

// 系列列表。每个系列通过 type 决定自己的图表类型
series: [
    {
        // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
        name:'任务进度',
        type:'pie',
        // 饼图的半径，数组的第一项是内半径，第二项是外半径
        radius: ['50%', '70%'],
        // 是否启用防止标签重叠策略，默认开启
        avoidLabelOverlap: false,          
         hoverAnimation: false,
        // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
        labelLine: {
            normal: {
                show: false
            }
        },
        data:[
            {   // 数据值
                value:10, 
                // 数据项名称
                name:'js错误',
                //该数据项是否被选中
                selected:false,
                // 单个扇区的标签配置
                label: {
                normal: {
                    // 是显示标签
                    show: true,
                    position: 'center',
                    fontSize: 20,
                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                    formatter:'{b}\n{d}%',
                }
           
            },
             
            },
            {
                value:70, 
                label:{
                    normal:{
                        show:false,
                        
                    }
                }
                
            },
          
        ]
    }
  ]

};
export const option5 = {
  title:{
    show:true,
    // text:"执行任务",
    x:"center",
    textStyle:{
        fontSize:"15",
        color:"green",
        fontWeight:"bold",
    }
    
},
//  提示框组件
tooltip: {
    //是否显示提示框组件，包括提示框浮层和 axisPointe
    show:false,
    // 触发类型: item:数据项触发，axis：坐标轴触发
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
},

// 系列列表。每个系列通过 type 决定自己的图表类型
series: [
    {
        // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
        name:'任务进度',
        type:'pie',
        // 饼图的半径，数组的第一项是内半径，第二项是外半径
        radius: ['50%', '70%'],
        // 是否启用防止标签重叠策略，默认开启
        avoidLabelOverlap: false,          
         hoverAnimation: false,
        // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
        labelLine: {
            normal: {
                show: false
            }
        },
        data:[
            {   // 数据值
                value:10, 
                // 数据项名称
                name:'自定义异常',
                //该数据项是否被选中
                selected:false,
                // 单个扇区的标签配置
                label: {
                normal: {
                    // 是显示标签
                    show: true,
                    position: 'center',
                    fontSize: 20,
                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                    formatter:'{b}\n{d}%',
                }
           
            },
             
            },
            {
                value:133, 
                label:{
                    normal:{
                        show:false,
                        
                    }
                }
                
            },
          
        ]
    }
  ]

};
export const option6 = {
  title:{
    show:true,
    // text:"执行任务",
    x:"center",
    textStyle:{
        fontSize:"15",
        color:"green",
        fontWeight:"bold",
    }
    
},
//  提示框组件
tooltip: {
    //是否显示提示框组件，包括提示框浮层和 axisPointe
    show:false,
    // 触发类型: item:数据项触发，axis：坐标轴触发
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
},

// 系列列表。每个系列通过 type 决定自己的图表类型
series: [
    {
        // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
        name:'任务进度',
        type:'pie',
        // 饼图的半径，数组的第一项是内半径，第二项是外半径
        radius: ['50%', '70%'],
        // 是否启用防止标签重叠策略，默认开启
        avoidLabelOverlap: false,          
         hoverAnimation: false,
        // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
        labelLine: {
            normal: {
                show: false
            }
        },
        data:[
            {   // 数据值
                value:3, 
                // 数据项名称
                name:'静态资源异常',
                //该数据项是否被选中
                selected:false,
                // 单个扇区的标签配置
                label: {
                normal: {
                    // 是显示标签
                    show: true,
                    position: 'center',
                    fontSize: 20,
                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                    formatter:'{b}\n{d}%',
                }
           
            },
             
            },
            {
                value:120, 
                label:{
                    normal:{
                        show:false,
                        
                    }
                }
                
            },
          
        ]
    }
  ]

}; 
export const option7 = {
  title:{
    show:true,
    // text:"执行任务",
    x:"center",
    textStyle:{
        fontSize:"15",
        color:"green",
        fontWeight:"bold",
    }
    
},
//  提示框组件
tooltip: {
    //是否显示提示框组件，包括提示框浮层和 axisPointe
    show:false,
    // 触发类型: item:数据项触发，axis：坐标轴触发
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
},

series: [
    {
        // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
        name:'任务进度',
        type:'pie',
        // 饼图的半径，数组的第一项是内半径，第二项是外半径
        radius: ['50%', '70%'],
        // 是否启用防止标签重叠策略，默认开启
        avoidLabelOverlap: false,          
         hoverAnimation: false,
        // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
        labelLine: {
            normal: {
                show: false
            }
        },
        data:[
            {   // 数据值
                value:2, 
                // 数据项名称
                name:'接口异常',
                //该数据项是否被选中
                selected:false,
                // 单个扇区的标签配置
                label: {
                normal: {
                    // 是显示标签
                    show: true,
                    position: 'center',
                    fontSize: 20,
                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                    formatter:'{b}\n{d}%',
                }
           
            },
             
            },
            {
                value:100, 
                label:{
                    normal:{
                        show:false,
                        
                    }
                }
                
            },
          
        ]
    }
  ]

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
      // name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210],
      areaStyle: {}
    },
    {
      // name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310],
      areaStyle: {}
    },

  ]
}