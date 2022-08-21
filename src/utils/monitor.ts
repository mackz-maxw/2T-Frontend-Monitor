class monitor{
    constructor(){};
    // 重写 onerror 进行jsError的监听
    initJsListener(){
        window.onerror = function(errorMsg, url, lineNumber, columnNumber, errorObj) {
            var errorStack = errorObj ? errorObj.stack : null;
            this.siftAndMakeUpMessage("on_error", errorMsg, url, lineNumber, columnNumber, errorStack);
        };
    }
    initRejectionListener(){
        window.onunhandledrejection = function(e) {
            var errorMsg = "";
            var errorStack = "";
            if (typeof e.reason === "object") {
              errorMsg = e.reason.message;
              errorStack = e.reason.stack;
            } else {
              errorMsg = e.reason;
              errorStack = "";
            }
            // 分类解析
            this.siftAndMakeUpMessage("on_error", errorMsg, WEB_LOCATION, 0, 0, "UncaughtInPromiseError: " + errorStack);
          }
    }
    siftAndMakeUpMessage(event:string,errorMsg:string,url:string,lineNumber:number,columnNumber:number,errorStack:string,){

    }

}