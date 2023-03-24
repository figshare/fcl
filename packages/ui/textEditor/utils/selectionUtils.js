import { EditorState, SelectionState } from "draft-js";


function getSelectedBlocksMap(editorState) {
  const selectionState = editorState.getSelection();
  const contentState = editorState.getCurrentContent();
  const startKey = selectionState.getStartKey();
  const endKey = selectionState.getEndKey();
  const blockMap = contentState.getBlockMap();

  return blockMap.
    toSeq().
    skipUntil((_, k) => k === startKey).
    takeUntil((_, k) => k === endKey).
    concat([[endKey, blockMap.get(endKey)]]);
}

function getSelectedBlocksList(editorState) {
  return getSelectedBlocksMap(editorState).toList();
}

export const getSelectedBlock = (editorState) => {
  if (editorState) {
    return getSelectedBlocksList(editorState).get(0);
  }

  return undefined;
};

export const moveSelectionToEnd = (editorState, selectionInstance) => {
  const offset = selectionInstance.getStartOffset();

  const selection = new SelectionState({
    anchorKey: selectionInstance.getAnchorKey(),
    anchorOffset: offset + 1,
    focusKey: selectionInstance.getFocusKey(),
    focusOffset: offset + 1,
  });

  return EditorState.forceSelection(editorState, selection);
};
