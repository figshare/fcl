import { EditorState, RichUtils } from "draft-js";

import handleKeyCommand from "./handleKeyCommand.js";
import { onConvertHTMLtoDraft } from "./index";


const contentState = onConvertHTMLtoDraft("<h1>test component</h1>");
const editorState = EditorState.createWithContent(contentState);

const ctrlB = "bold";
const ctrlI = "italic";
const ctrlU = "underline";
const ctrlX = "strikethrough";

const olCommand = "ordered-list-item";
const ulCommand = "unordered-list-item";

describe("handleKeyCommand()", () => {
  it("returns the right commands", () => {
    const handleKeyFunc = (command) => handleKeyCommand(command, editorState);
    const blockStyle = (commandStyle) => RichUtils.toggleBlockType(editorState, commandStyle);
    const inlineStyle = (commandStyle) => RichUtils.toggleInlineStyle(editorState, commandStyle);

    expect(handleKeyFunc()).toEqual(inlineStyle(""));

    expect(handleKeyFunc(ctrlB)).toEqual(inlineStyle("BOLD"));
    expect(handleKeyFunc(ctrlI)).toEqual(inlineStyle("ITALIC"));
    expect(handleKeyFunc(ctrlU)).toEqual(inlineStyle("UNDERLINE"));
    expect(handleKeyFunc(ctrlX)).toEqual(inlineStyle("STRIKETHROUGH"));

    expect(handleKeyFunc(olCommand)).toEqual(blockStyle("ordered-list-item"));
    expect(handleKeyFunc(ulCommand)).toEqual(blockStyle("unordered-list-item"));
  });
});
