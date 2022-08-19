import tracker from "../utils/tracker";
import {getUuid} from "../utils/UUID";

export function pv() {
  let startTime = Date.now();
  let uuid:string|null=null;
  if(window.localStorage){
    if(window.localStorage.getItem('m-uuid')!==null){
      uuid=window.localStorage.getItem('m-uuid')
    }else{
      uuid=getUuid();
      window.localStorage.setItem('m-uuid',uuid);
    }
  }
  window.addEventListener(
    "unload",
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
  console.log('connection',connection)
  tracker.send({
    kind: "business",
    type: "pv",
    source:document.referrer||"",
    effectiveType: connection.effectiveType, //网络环境
    rtt: connection.rtt, //往返时间
    uuid,
    screen: `${window.screen.width}x${window.screen.height}`, //设备分辨率
  });
  
}
