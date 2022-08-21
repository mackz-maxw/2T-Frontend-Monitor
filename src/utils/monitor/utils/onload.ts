export default function (callback: (this: any, ev?: Event) => any) {
  if (document.readyState === "complete") {
    callback();
  } else {
    window.addEventListener("load", callback);
  }
}
