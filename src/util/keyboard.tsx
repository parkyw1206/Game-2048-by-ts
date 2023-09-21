import hotkeys from "hotkeys-js";

const observerMap: { [key: string]: any[] } = {};

export function addKeyObserver(key: string, callback: any) {
  if (!observerMap[key]) {
    observerMap[key] = [];
    hotkeys(key, () => executeCallbacks(key));
  }
  observerMap[key].push(callback);
}
export function removeKeyObserver(key: string, callback: any) {
  observerMap[key] = observerMap[key].filter((item) => item !== callback);
}
function executeCallbacks(key: string) {
  for (const ob of observerMap[key]) {
    ob();
  }
}
