import getLastEvent from "../utils/getLastEvent";
import getSelector from "../utils/getSelector";
import tracker from "../utils/tracker";

export function injectJsError() {

  var oldError = console.error;
    console.error = new Proxy(console.error,{
      apply:function (target,thisArg,...argumentList) {
      console.log('error+++++++++++',argumentList)
      tracker.send({
        kind: "stability", // 监控指标的大类，稳定性
        type: "customError", // 资源获取错误
        message: argumentList[0], // 报错信息
      });
      // 如果onerror重写成功，就无需在这里进行上报了
      // !jsMonitorStarted && siftAndMakeUpMessage(errorMsg, url, lineNumber, columnNumber, errorObj);
      return target.apply(thisArg, argumentList);
    }
  }
    )


  // 监听全局未捕获的错误
  window.addEventListener(
    "error",
    (event) => {
      console.log("error+++++++++++", event);
      let lastEvent = getLastEvent(); // 获取到最后一个交互事件
      // 脚本加载错误
      if (event.target && (event.target.src || event.target.href)) {
        tracker.send({
          kind: "stability", // 监控指标的大类，稳定性
          type: "resourceError", // 资源获取错误
          filename: event.target.src || event.target.href, // 哪个文件报错了
          tagName: event.target.tagName,
          triggerTimeStamp: event.timeStamp, //时间
          selector: getSelector(event.target), // 代表最后一个操作的元素
        });
      } else {
        tracker.send({
          kind: "stability", // 监控指标的大类，稳定性
          type: "jsError", // js执行错误
          message: event.message, // 报错信息
          filename: event.filename, // 哪个文件报错了
          position: `${event.lineno}:${event.colno}`, // 报错的行列位置
          stack: getLines(event.error.stack),
          selector: lastEvent ? getSelector(lastEvent.path) : "", // 代表最后一个操作的元素
        });
      }
    },
    true
  );

    window.addEventListener(
      "unhandledrejection",
      (event) => {
        console.log("unhandledrejection-------- ", event);
        let lastEvent = getLastEvent(); // 获取到最后一个交互事件
        let message;
        let filename;
        let line = 0;
        let column = 0;
        let stack = "";
        let reason = event.reason;
        console.log('reason',reason)
        if (typeof reason === "string") {
          message = reason;
        } else if (typeof reason === "object") {
          message = reason.message;
          if (reason.stack) {
            let matchResult = reason.stack.match(/at\s+(.+):(\d+):(\d+)/);
            filename = matchResult[1];
            line = matchResult[2];
            column = matchResult[3];
          }
          stack = getLines(reason.stack);
        }
        tracker.send({
          kind: "stability", // 监控指标的大类，稳定性
          type: "promiseError", // promise错误
          message, // 报错信息
          filename, // 哪个文件报错了
          position: `${line}:${column}`, // 报错的行列位置
          stack,
          selector: lastEvent ? getSelector(lastEvent.path) : "", // 代表最后一个操作的元素
        });
      },
      true
    );
}

function getLines(stack: string) {
  console.log('stack',stack);
  return stack
    .split("\n")
    .slice(1)
    .map((item) => item.replace(/^\s+at\s+/g, ""))
    .join("^");
}
