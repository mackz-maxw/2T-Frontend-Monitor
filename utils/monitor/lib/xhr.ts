import tracker from "../utils/tracker";

// export function injectXHR() {
//   let XMLHttpRequest = window.XMLHttpRequest;
//   let oldOpen = XMLHttpRequest.prototype.open;
//   XMLHttpRequest.prototype.open = function (method, url, async) {
//     // 把上报接口过滤掉
//     if (!url.match(/logstores/) && !url.match(/sockjs/)) {
//       this.logData = { method, url, async };
//     }
//     return oldOpen.apply(this, arguments);
//   };
//   let oldSend = XMLHttpRequest.prototype.send;
//   XMLHttpRequest.prototype.send = function (body) {
//     if (this.logData) {
//       let startTime = Date.now();
//       let handler = (type) => (event) => {
//         // 持续时间
//         let duration = Date.now() - startTime;
//         let status = this.status;
//         let statusText = this.statusText;
//         tracker.send({
//           kind: "stability",
//           type: "xhr",
//           eventType: type,
//           pathname: this.logData.url,
//           status: status + "-" + statusText, // 状态码
//           duration,
//           response: this.response ? JSON.stringify(this.response) : "", // 响应体
//           params: body || "", // 入参
//         });
//       };
//       // this.addEventListener("load", handler("load"), false);
//       this.addEventListener("error", handler, false);
//       this.addEventListener("abort", handler, false);
//     }
//     return oldSend.apply(this, arguments);
//   };
// }

export function proxyXHR() {
  let oldOpen=XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open=new Proxy(oldOpen,{ 
    apply:function(target,thisArg,argumentsList:[method: string, url: string | URL, async: boolean, username?: string | null | undefined, password?: string | null | undefined]){
      if(typeof argumentsList[1]!=='string'){
        argumentsList[1]=argumentsList[1].toString();
      }
      if (!argumentsList[1].match(/upload/) && !argumentsList[1].match(/sockjs/)) {
        thisArg.logData = argumentsList;
      }else{
        thisArg.logData = [];
      }
        console.log('thisArg',thisArg) 
        console.log('argumentsList',argumentsList) 
        return target.apply(thisArg,argumentsList) 
    } 
});
let oldSend=XMLHttpRequest.prototype.send
  XMLHttpRequest.prototype.send=new Proxy(oldSend,{
    apply:function(target,thisArg,argumentsList:[body?: Document | XMLHttpRequestBodyInit | null | undefined]){
      if (thisArg.logData.length>0) {
        console.log('thisArg.logData',thisArg.logData);
        let startTime = Date.now();
        let handler = (type?:string) => (event: any) => {
          // 持续时间
          let duration = Date.now() - startTime;
          let status = thisArg.status;
          let statusText = thisArg.statusText;
          tracker.send({
            kind: "stability",
            type: "xhr",
            eventType: type,
            pathname: thisArg.logData.url,
            status: status + "-" + statusText, // 状态码
            duration,
            response: thisArg.response ? JSON.stringify(thisArg.response) : "", // 响应体
            params: argumentsList[0] || "", // 入参
          });
        };
        thisArg.addEventListener("load", handler(), false);
        thisArg.addEventListener("error", handler(), false);
        thisArg.addEventListener("abort", handler(), false);
      }
      return target.apply(thisArg, argumentsList);
    } 
});
}
