import tracker from "../utils/tracker"
import getSelector from "../utils/getSelector";


const ASSETS_TYPE = ['img', 'css', 'script', 'link', 'audio', 'video'];

let errorImg:Array<string>=[]
export let errorImgProxy=new Proxy(errorImg,{
    set(target, prop, value) {
        Reflect.set(target, prop, value)
        return true;
    },
    get(target, value) {
        return Reflect.get(target, value);
    }
})

// 处理已经加载错误的图片,但是为了懒加载实现方法不同，无法真正通用
function observeStatic() {
    document.querySelectorAll('img').forEach((node) => {
      const lazySrc = node.getAttribute('data-src') || node.getAttribute('lazy-src');
   
      if (!lazySrc) {
         // 加载完成 complete = true，naturalWidth=0 表示图片没高度，那就是加载失败
        if (node.complete && node.naturalWidth === 0 && errorImgProxy.indexOf(node.src)!==-1) {
            errorImgProxy.push(node.src);
        }
      }
    });
}

export function resource() {
    observeStatic();
    let resourceList=[]
    
  // 监听全局未捕获的错误
  window.addEventListener(
    "error",
    (event) => {
      console.log("error+++++++++++", event);
      if (event.target && (event.target.src || event.target.href)) {
        console.log('flag',ASSETS_TYPE.indexOf(event.target.tagName.toLowerCase()) !== -1)
        if (errorImgProxy.indexOf(event.target.src || event.target.href) === -1 && ASSETS_TYPE.indexOf(event.target.tagName.toLowerCase()) !== -1) {
          errorImgProxy.push(event.target.src || event.target.href);
          console.log(errorImgProxy);

        }
        tracker.send({
          kind: "stability", // 监控指标的大类，稳定性
          type: "resourceError", // 资源获取错误
          filename: event.target.src || event.target.href, // 哪个文件报错了
          tagName: event.target.tagName,
          triggerTimeStamp: event.timeStamp, //时间
          selector: getSelector(event.target), // 代表最后一个操作的元素
        });
      }
    },
    true
  );

    let obs=new PerformanceObserver((list,boserver)=>{
        setTimeout(()=>{
            for(let item of list.getEntries()){
                const {initiatorType, name} = item;
                if(errorImgProxy.indexOf(name)===-1&&ASSETS_TYPE.indexOf(initiatorType) !== -1){
                    const {connectStart, domainLookupStart, domainLookupEnd, connectEnd, duration, encodedBodySize, requestStart, responseEnd, responseStart} = item;
                    tracker.send({
                    kind: "stability",
                    type: "resource",
                    name,
                    domainLookupStart,
                    domainLookupEnd,
                    connectStart,
                    connectEnd, // 状态码
                    duration,
                    encodedBodySize,
                    requestStart,
                    responseEnd,
                    responseStart,
                    });
                }
            }
        },100)
        
    })
    obs.observe({entryTypes:['resource']});
}