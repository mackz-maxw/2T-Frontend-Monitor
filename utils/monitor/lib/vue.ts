import Vue from 'vue'
import tracker from "../utils/tracker";

export function vueError() {
    if (Vue) {
        Vue.config.errorHandler = function (err, vm, info) {
            console.log("VueError+++++++++++", err);
            // let lastEvent = getLastEvent(); // 获取到最后一个交互事件
            // 脚本加载错误
            // if (event.target && (event.target.src || event.target.href)) {
            //     tracker.send({
            //         kind: "stability", // 监控指标的大类，稳定性
            //         type: "error", // 小类型，这是一个错误
            //         errorType: "resourceError", // js执行错误
            //         filename: event.target.src || event.target.href, // 哪个文件报错了
            //         tagName: event.target.tagName,
            //         selector: getSelector(event.target), // 代表最后一个操作的元素
            //     });
            // } else {
            //     tracker.send({
            //         kind: "stability", // 监控指标的大类，稳定性
            //         type: "error", // 小类型，这是一个错误
            //         errorType: "jsError", // js执行错误
            //         message: event.message, // 报错信息
            //         filename: event.filename, // 哪个文件报错了
            //         position: `${event.lineno}:${event.colno}`, // 报错的行列位置
            //         stack: getLines(event.error.stack),
            //         selector: lastEvent ? getSelector(lastEvent.path) : "", // 代表最后一个操作的元素
            //     });
            // }
        }
    }
}