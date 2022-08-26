import tracker from "../utils/tracker";
import {getUuid} from "../utils/UUID";
import $ from 'jquery';


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

  // tracker.send({
  //   kind: "business",
  //   type: "pv",
  //   source:document.referrer||"",
  //   effectiveType: connection.effectiveType, //网络环境
  //   rtt: connection.rtt, //往返时间
  //   screen: `${window.screen.width}x${window.screen.height}`, //设备分辨率
  // });

  var connection = navigator.connection;
  console.log('connection',connection)
  // console.log(typeof Date.now())
  let log = {
    kind: "business",
    type: "pv",
    timestamp: Date.now()+"",
    source:document.referrer||"",
    effective_type: connection.effectiveType, //网络环境
    rtt: connection.rtt+"", //往返时间
    uuid,
    screen: `${window.screen.width}x${window.screen.height}`, //设备分辨率
  }


  // console.log(log);
  var logg = JSON.stringify(log);
  $.ajax({
    url: "http://localhost:3006/upload/pv/",
    type: "POST",
    data: logg,
    dataType: 'JSON',
    contentType: "application/json; charset=utf-8",//
    success(resp) {  
            console.log("successpvuv",resp);
    }//success
  });

}
