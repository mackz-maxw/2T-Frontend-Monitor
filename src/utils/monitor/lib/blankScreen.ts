import tracker from "../utils/tracker";
import onload from "../utils/onload";

export function blankScreen() {
  let wrapperElements = ["html", "body", "#container", ".content"];
  let emptyPoints = 0;
  function getSelector(element: Element) {
    const { id, className, nodeName } = element;
    if (id) {
      return "#" + id;
    } else if (className) {
      // 过滤空白符 + 拼接
      return (
        "." +
        className
          .split(" ")
          .filter((item) => !!item)
          .join(".")
      );
    } else {
      return nodeName.toLowerCase();
    }
  }
  function isWrapper(element: Element) {
    let selector = getSelector(element);
    if (wrapperElements.indexOf(selector) !== -1) {
      emptyPoints++;
    }
  }
  // 刚开始页面内容为空，等页面渲染完成，再去做判断
  onload(function () {
    let xElements, yElements, yXElements, yNavXElements;
    for (let i = 0; i < 9; i++) {
      //
      xElements = document.elementsFromPoint(
        (window.innerWidth * i) / 10,
        window.innerHeight / 2
      );//获取屏幕中间x轴方向上的点
      yElements = document.elementsFromPoint(
        window.innerWidth / 2,
        (window.innerHeight * i) / 10
      );//获取屏幕中间y轴方向上的点
      yNavXElements = document.elementsFromPoint(
        (window.innerWidth * i) / 10,
        (window.innerHeight * i) / 10
      );//获取屏幕中间y=-x轴方向上的点
      yXElements = document.elementsFromPoint(
        (window.innerWidth * (9-i)) / 10,
        (window.innerHeight * i) / 10
      );//获取屏幕中间y轴方向上的点
      isWrapper(xElements[0]);
      isWrapper(yElements[0]);
      isWrapper(yNavXElements[0]);
      isWrapper(yXElements[0]);

    }
    // 白屏
    if (emptyPoints >= 0) {
      const centerElements = document.elementsFromPoint(
        window.innerWidth / 2,
        window.innerHeight / 2
      );
      console.log("emptyPoints++++++++++++++", getSelector(centerElements[0]));
      tracker.send({
        kind: "stability",
        type: "blank",
        emptyPoints: emptyPoints + "",
        screen: window.screen.width + "X" + window.screen.height,
        viewPoint: window.innerWidth + "X" + window.innerHeight,
        selector: getSelector(centerElements[0]),
      });
    }
  });
}
