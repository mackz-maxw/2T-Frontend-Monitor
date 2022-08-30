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
                
                let responseCopy:Response;

                return target.apply(thisArg, argumentsList).then((response)=>{
                        
                        responseCopy=response.clone();console.log('fetchResponse',responseCopy)
                        return response.json();
                }).then((res)=>{
                    console.log(res);
                    if(monitorFlag){
                        
                        let handler = () => {
                        // 持续时间
                        let duration = Date.now() - startTime;

                        console.log("_response_",responseCopy,res);
                        tracker.send({
                            kind: "stability",
                            type: "fetch",
                            pathname: url,
                            status: responseCopy.status + "-" + responseCopy.statusText, // 状态码
                            duration,
                            response: res ? JSON.stringify(res) : "", // 响应体
                            params: argumentsList[0] || "", // 入参
                        });
                    }
                        // tracker.send({
                        //     kind: "stability",
                        //     type: "xhr",
                        //     eventType: type,
                        //     pathname: thisArg.logData.url,
                        //     status: status + "-" + statusText, // 状态码
                        //     duration,
                        //     response: thisArg.response ? JSON.stringify(thisArg.response) : "", // 响应体
                        //     params: argumentsList[0] || "", // 入参
                        //   });
                        handler();
                    }
                    return responseCopy;
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
