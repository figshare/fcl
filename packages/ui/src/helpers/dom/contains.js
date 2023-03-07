const DOCUMENT_POSITION_CONTAINED_BY = 16;

export default function(needle, haystack) {
  if (!needle || !haystack) {
    return false;
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
  if (haystack.contains) {
    return haystack.contains(needle);
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
  if (haystack.compareDocumentPosition) {
    const bitmask = haystack.compareDocumentPosition(needle);

    // eslint-disable-next-line no-bitwise
    return haystack === needle || !!(bitmask & DOCUMENT_POSITION_CONTAINED_BY);
  }

  // Fallback
  let node = needle;

  while (node) {
    if (node === haystack) {
      return true;
    }

    node = node.parentNode;
  }

  return false;
}
