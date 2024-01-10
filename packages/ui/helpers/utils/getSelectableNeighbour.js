const generalQuerySelector = `button:not([disabled]), [href]:not([disabled]),
          input:not([disabled]) , select:not([disabled]), textarea, [tabindex]:not([tabindex="-1"])`;

export function getSelectableNeighbour({
  querySelector = generalQuerySelector,
  containerNode,
  currentNode,
  offset,
  filter,
}) {
  let items = Array.from(containerNode?.querySelectorAll(querySelector));

  if (filter) {
    items = items.filter(filter);
  }

  const currentIndex = items.indexOf(currentNode);

  let node = null;
  if (currentIndex !== -1) {
    const itemsCount = items.length;
    const index = (itemsCount + currentIndex + offset) % itemsCount;
    node = items[index];
  } else {
    node = offset >= 0 ? items[0] : items.pop();
  }

  return node;
}
