/**
 * 时间格式化
 */
//时间格式化 dateFormat('YYYY-mm-dd HH:MM:SS',new Date('2021-02-06 14:25:56'))
export function formatDate(date,fmt='YYYY-mm-dd HH:MM:SS') {
    let ret;
    let opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}
  
  /**
   * @param {number} time
   * @returns {string}
   */
  export function formatTime(time) {
    if (('' + time).length === 10) {
      time = parseInt(time) * 1000
    } else {
      time = +time
    }
    const date = new Date(time)
    const now = Date.now()
  
    const diff = (now - Number(date))
    
    let s;
    let m;
    if(diff<1000){
        return `${diff}ms`
    }
    else if (diff < 30000) {
        s=diff / 1000;
        return `${s}s`
    } else if (diff < 3600000) {
      // less 1 hour
      m=Math.floor(diff / 60000);
      s=(diff-m*60000)/1000;
      return  + `${m}min${s}s`
    } else if (diff < 3600 * 24) {
      return '大于一小时'
    }
  }