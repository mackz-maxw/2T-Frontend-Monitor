import tracker from "../utils/tracker";

export function pv() {
  let startTime = Date.now();

  window.addEventListener(
    "beforeunload",
    () => {
      let stayTime = Date.now() - startTime;
      tracker.send({
        kind: "business",
        type: "stayTime",
        stayTime,
      });
    },
    false
  );
  
  var connection = navigator.connection;
  // console.log('connection',connection)
  tracker.send({
    kind: "business",
    type: "pv",
    source:document.referrer||"",
    effectiveType: connection.effectiveType, //网络环境
    rtt: connection.rtt, //往返时间
    screen: `${window.screen.width}x${window.screen.height}`, //设备分辨率
  });
  
}
