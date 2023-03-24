import { Modifier, EditorState, SelectionState } from "draft-js";


const inlineStyles = ["BOLD", "ITALIC", "UNDERLINE", "STRIKETHROUGH"];
const blockListsStyles = ["ordered-list-item", "unordered-list-item"];

const removeInlineStyles = (editorState) => {
  const contentState = editorState.getCurrentContent();
  const contentWithoutStyles = inlineStyles.reduce(
    (acc, style) =>
      Modifier.removeInlineStyle(acc, editorState.getSelection(), style),
    contentState
  );

  return EditorState.push(
    editorState,
    contentWithoutStyles,
    "change-inline-style"
  );
};

/* istanbul ignore next */
const getSelectedBlocks = (contentState, anchorKey, focusKey) => {
  const isSameBlock = anchorKey === focusKey;
  const startingBlock = contentState.getBlockForKey(anchorKey);
  const selectedBlocks = [startingBlock];

  if (!isSameBlock) {
    let blockKey = anchorKey;

    while (blockKey !== focusKey) {
      const nextBlock = contentState.getBlockAfter(blockKey);
      selectedBlocks.push(nextBlock);
      blockKey = nextBlock.getKey();
    }
  }

  return selectedBlocks;
};

const removeBlocks = (editorState) => {
  const contentState = editorState.getCurrentContent();
  let contentWithoutLists = contentState;
  let newEditorState = editorState;

  // Selected blocks
  const currentSelection = editorState.getSelection();
  const startKey = currentSelection.getStartKey();
  const endKey = currentSelection.getEndKey();

  const selectedBlocks = getSelectedBlocks(contentState, startKey, endKey);

  selectedBlocks.forEach((block) => {
    const blockType = block.getType();

    if (!blockListsStyles.includes(blockType)) {
      const selectionState = SelectionState.createEmpty(block.getKey());
      const updatedSelection = selectionState.merge({
        focusOffset: 0,
        anchorOffset: block.getText().length,
      });

      contentWithoutLists = Modifier.setBlockType(
        contentWithoutLists,
        updatedSelection,
        "unstyled"
      );
    }
  });

  newEditorState = EditorState.push(
    newEditorState,
    contentWithoutLists,
    "change-block-type"
  );

  return newEditorState;
};

export default (editorState) => {
  const removals = [removeInlineStyles, removeBlocks];

  return removals.reduce(
    (acc, helper) => helper(acc),
    editorState
  );
};
