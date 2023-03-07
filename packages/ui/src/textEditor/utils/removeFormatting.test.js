import { EditorState, SelectionState } from "draft-js";

import removeFormatting from "./removeFormatting.js";
import { onConvertHTMLtoDraft, onConvertDraftToHTML } from "./index";


const getStateWithSelection = (content, focusOffset) => {
  const editorState = EditorState.createWithContent(onConvertHTMLtoDraft(content));
  const firstBlockKey = editorState.getCurrentContent().getFirstBlock().getKey();
  const selectionState = SelectionState.createEmpty(firstBlockKey).merge({ focusOffset });

  return EditorState.forceSelection(editorState, selectionState);
};


const convertToHtmlandFormat = (editorState) => onConvertDraftToHTML(removeFormatting(editorState));

describe("removeFormatting()", () => {
  it("returns the content without inline style", () => {
    const editorState = getStateWithSelection("<p><strong>test</strong></p>", 4);
    const result = "<p>test</p>";

    expect(convertToHtmlandFormat(editorState)).toEqual(result);
  });

  it("returns the content without headings", () => {
    const editorState = getStateWithSelection("<h2>test</h2>", 4);
    const result = "<p>test</p>";

    expect(convertToHtmlandFormat(editorState)).toEqual(result);
  });

  it("returns the content without nested inline styles", () => {
    const editorState = getStateWithSelection("<b><i>test</i></b>", 4);
    const result = "<p>test</p>";

    expect(convertToHtmlandFormat(editorState)).toEqual(result);
  });

  it("returns the content with link", () => {
    const editorState = getStateWithSelection("<p><a href=\"link\">test</a></p>", 4);
    const result = "<p><a href=\"link\" target=\"_blank\">test</a></p>";

    expect(convertToHtmlandFormat(editorState)).toEqual(result);
  });

  it("returns the content with lists", () => {
    const editorState = getStateWithSelection("<ol><li><b>Test</b></li></ol>", 4);
    const result = `<ol>
  <li>Test</li>
</ol>`;

    expect(convertToHtmlandFormat(editorState)).toEqual(result);
  });
});

