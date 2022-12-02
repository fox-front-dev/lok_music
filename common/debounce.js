function debounce(func, delay = 300, immediate = false) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    if (immediate && !timer) {
      func.call(this)
    }
    timer = setTimeout(() => {
      func.call(this)
    }, delay);
  };
}
export default debounce;
