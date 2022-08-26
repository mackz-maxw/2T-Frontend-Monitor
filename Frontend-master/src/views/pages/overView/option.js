


let pu = window.localStorage.getItem('pvuv') // string

let pvuv = JSON.parse(pu)

// console.log("uv2:",pvuv["timestamp"])

function array_uniq(input_arr) {
  // 判断规格是否重复
  var h={};    //定义一个hash表  
  var arr=[];  //定义一个临时数组  
    
  for(var i = 0; i < input_arr.length; i++){    //循环遍历当前数组  
      //对元素进行判断，看是否已经存在表中，如果存在则跳过，否则存入临时数组  
      if(!h[input_arr[i]]){  
          //存入hash表  
          h[input_arr[i]] = true;  
          //把当前数组元素存入到临时数组中  
          arr.push(input_arr[i]);  
      }  
  }  
  return arr.length;  
}

function timestampToTime(timestamp) {
  var date = new Date(timestamp );//时间戳为10位需*1000，时间戳为13位的话不需乘1000  * 1000
  // var date = timestamp;
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  var D = (date.getDate() < 10 ? '0'+ date.getDate() : date.getDate()) + ' ';
  var h = (date.getHours() < 10 ? '0'+ date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() < 10 ? '0'+ date.getMinutes() : date.getMinutes()) + ':';
  var s = (date.getSeconds() < 10 ? '0'+ date.getSeconds() : date.getSeconds());
  return M+D+h+m+s;

}


export const pv_length = pvuv.length//2  //pvuv?pvuv.length:

export const uv_length = array_uniq(pvuv)//1//array_uniq(pvuv)

export const option1 = {
  xAxis: {
    type: 'value',
    min:1661413032456,
    max:1661421990197,
    axisLabel:{
      formatter:function(e){
        return timestampToTime(e);
      },
      rotate:30
    }
  },
  yAxis: {
    type: 'value',
    min:0,
    max:3
  },
  series: [
    {
      data: [[1661413032456,1],[1661421990097,1],[1661421990197,1]],
      type: 'line',
    }
  ]

};

export const option2 = {

};