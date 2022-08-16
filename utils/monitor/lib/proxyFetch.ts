import tracker from "../utils/tracker";

export function proxyFetch(){
    if (window.fetch) {
        let oldFetch = window.fetch
        window.fetch = new Proxy(oldFetch,{
            apply:function(target,thisArg,argumentsList:[input: URL | RequestInfo, init?: RequestInit | undefined]){
                let monitorFlag=false;//是否监听该接口标记
                let startTime = Date.now();//请求开始时间
                let url='';//请求路径
                if(!argumentsList[0].toString().match(/upload/) && !argumentsList[0].toString().match(/sockjs/)){
                    monitorFlag=true;
                    let fetchInput = argumentsList[0]
                    let method = 'GET'
                    if (typeof fetchInput === 'string') {
                        url = fetchInput
                    } else if ('Request' in window && fetchInput instanceof window.Request) {
                        url = fetchInput.url
                        if (fetchInput.method) {
                            method = fetchInput.method
                        }
                    } else {
                        url = '' + fetchInput
                    }
                    if (argumentsList[1] && argumentsList[1].method) {
                        method = argumentsList[1].method
                    }
                }
                
                return _origin_fetch.apply(thisArg, argumentsList).then((response)=>{
                    if(monitorFlag){
                        console.log('fetchResponse',response)
                        let handler = () => {
                            // 持续时间
                            let duration = Date.now() - startTime;
                            tracker.send({
                              kind: "stability",
                              type: "fetch",
                              pathname: url,
                              status: `${response.status}-${response.statusText}`, // 状态码
                              duration,
                              params: argumentsList[0] || "", // 入参
                            });
                        };
                        handler();
                    }
                    return response;
                });
            }
        })
    }
}

// export function injectFetch(){
//     if (window.fetch) {
//         let _origin_fetch = window.fetch
//         window.fetch = function () {
//             let startTime = Date.now()
//             let args = [].slice.call(arguments)

//             let fetchInput = args[0]
//             let method = 'GET'
//             let url

//             if (typeof fetchInput === 'string') {
//                 url = fetchInput
//             } else if ('Request' in window && fetchInput instanceof window.Request) {
//                 url = fetchInput.url
//                 if (fetchInput.method) {
//                     method = fetchInput.method
//                 }
//             } else {
//                 url = '' + fetchInput
//             }

//             if (args[1] && args[1].method) {
//                 method = args[1].method
//             }

//             return _origin_fetch.apply(this, args).then(function (response) {
//                 console.log('proxyRes',response);
//                     let handler = (type) => {
//                         // 持续时间
//                         let duration = Date.now() - startTime;
//                         tracker.send({
//                           kind: "stability",
//                           type: "fetch",
//                           eventType: type,
//                           pathname: url,
//                           status: response.status, // 状态码
//                           duration,
//                           params: args[0] || "", // 入参
//                         });
//                     };
//                     handler('fetchLoad');
//                 return response
//             })
//         }
//     }
// }
