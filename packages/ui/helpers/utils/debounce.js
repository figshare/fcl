export function debounce(func, wait, immediate = false) {
  let timeout = undefined;

  return function(...args) {
    const later = function() {
      timeout = null;
      if (!immediate) {
        func(...args);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func(...args);
    }
  };
}
