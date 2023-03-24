export const OverlayStack = (function() {
  const stack = [];
  const deleteBuffer = 10;
  const BASE_Z_INDEX = 2;

  function list() {
    return stack.slice();
  }

  function find(id) {
    const index = stack.findIndex((item) => item.id === id);

    return { found: index !== -1, index, item: stack[index] };
  }

  function getZIndex(id) {
    const highest = stack.length;
    const search = find(id);
    const term = search.found ? search.index : highest;

    return BASE_Z_INDEX + term;
  }

  function push(overlay) {
    const search = find(overlay.id);

    if (search.found) {
      return;
    }

    stack.push(overlay);
  }

  function pop(id) {
    const search = find(id);

    if (search.found) {
      stack.splice(search.index, deleteBuffer);
    }
  }

  function isLast(id) {
    const search = find(id);

    if (search.found) {
      return search.index + 1 >= stack.length;
    }

    return !stack.length;
  }

  return {
    push,
    pop,
    list,
    getZIndex,
    isLast,
  };
}());

export default OverlayStack;
