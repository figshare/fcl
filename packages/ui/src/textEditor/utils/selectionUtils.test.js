import { EditorState, SelectionState } from "draft-js";

import { onConvertHTMLtoDraft } from "./index.js";
import { getSelectedBlock, moveSelectionToEnd } from "./selectionUtils.js";


const getStateWithSelection = (content, focusOffset) => {
  const editorState = EditorState.createWithContent(onConvertHTMLtoDraft(content));
  const firstBlockKey = editorState.getCurrentContent().getFirstBlock().getKey();
  const selectionState = SelectionState.createEmpty(firstBlockKey).merge({ focusOffset });

  return EditorState.forceSelection(editorState, selectionState);
};

describe("getSelectedBlock()", () => {
  it("returns the selected block", () => {
    const editorState = getStateWithSelection("<b>test</b>", 4);
    const selectionBlock = getSelectedBlock(editorState).getText();
    const result = "test";

    expect(selectionBlock).toEqual(result);
  });
  it("returns no block if no editorState", () => {
    const editorState = null;
    const selectionBlock = getSelectedBlock(editorState);

    expect(selectionBlock).toBe(undefined);
  });
});

describe("moveSelectionToEnd()", () => {
  it("returns new editorState based on modified selection", () => {
    const editorState = getStateWithSelection("<b>test</b>", 4);
    const selectionInstance = {
      getStartOffset: () => 2,
      getAnchorKey: () => "anchorKey",
      getFocusKey: () => "focusKey",
    };
    const newEditorState = moveSelectionToEnd(editorState, selectionInstance);
    const newSelection = newEditorState.getSelection();

    expect(newSelection.getAnchorOffset()).toEqual(3);
    expect(newSelection.getFocusOffset()).toEqual(3);
  });
});

