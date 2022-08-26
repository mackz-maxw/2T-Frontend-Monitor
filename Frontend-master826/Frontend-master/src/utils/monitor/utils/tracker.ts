import {getBrowser,getOS} from "./userAgent";
import {getUuid} from "../utils/UUID";

// 主机
let host = "cn-guangdong-log.aliyuncs.com";
// 项目名
let project = "yymonitor";
// 存储名
let logstore = "yymonitor-store";

let pid:string;//项目标识
//公共字段
function getExtraData(this: any) {
  return {
    pid:this.pid,
    uuid:this.uuid,
    title: document.title,
    url: location.href,
    timestamp: Date.now(),
    // userAgent: userAgent.parse(navigator.userAgent).name,
    browser:getBrowser(),
    OS:getOS()
  };
}

class SendTracker {

  pid:string='';
  uuid:string|null='';//用户标识
    // this.url = `http://${project}.${host}/logstores/${logstore}/track`;
  url:string=`/upload`;
  xhr = new XMLHttpRequest();
  constructor() {
    // 上报的路径
    //获取本地用户标识
    if(window.localStorage){
      if(window.localStorage.getItem('m-uuid')!==null){
        this.uuid=window.localStorage.getItem('m-uuid')
      }else{
        this.uuid=getUuid();
        window.localStorage.setItem('m-uuid',this.uuid);
      }
    }
  }

  setPid(pid:string){
    this.pid=pid;
  }

  send(data = {}) {
    let extraData = getExtraData.apply(this);
    let log = { ...data, ...extraData };
    let mXhr=this.xhr
    console.log("log", log);
    // 接入日志系统，此处以阿里云为例
    let body = JSON.stringify(log);
    mXhr.open("POST", this.url, true);
    mXhr.setRequestHeader("Content-Type", "application/json");
    mXhr.setRequestHeader("x-log-apiversion", "1.0.0");
    mXhr.setRequestHeader("x-log-bodyrawsize", body.length.toString());
    mXhr.onload = function () {
      console.log(mXhr.responseText);
    };
    mXhr.onerror = function (error) {
      console.log(error);
    };
    mXhr.send(body);
  }
}

export default new SendTracker();
