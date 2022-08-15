// 主机
let host = "cn-guangdong-log.aliyuncs.com";
// 项目名
let project = "yymonitor";
// 存储名
let logstore = "yymonitor-store";
import {getBrowser,getOS} from "./userAgent";


function getExtraData() {
  return {
    title: document.title,
    url: location.href,
    timestamp: Date.now(),
    // userAgent: userAgent.parse(navigator.userAgent).name,
    browser:getBrowser(),
    OS:getOS()
  };
}

class SendTracker {
    // this.url = `http://${project}.${host}/logstores/${logstore}/track`;
  url:string=`/upload`;
  xhr = new XMLHttpRequest();
  constructor() {
    // 上报的路径

  }
  send(data = {}) {
    let extraData = getExtraData();
    let log = { ...data, ...extraData };
    let mXhr=this.xhr
    // 阿里云要求值不能为数字
    // for (const key in log) {
    //   if (typeof log[key] === "number") {
    //     log[key] = `${log[key]}`;
    //   }
    // }
    console.log("log", log);
    // 接入日志系统，此处以阿里云为例
    let body = JSON.stringify({
      __logs__: [log],
    });
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
