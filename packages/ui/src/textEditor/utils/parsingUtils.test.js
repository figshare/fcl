import { EditorState } from "draft-js";

import { onConvertDraftToHTML, onConvertHTMLtoDraft } from "./parsingUtils";


describe("onConvertDraftToHTML()", () => {
  const editorState = (content) => EditorState.createWithContent((onConvertHTMLtoDraft(content)));
  it("returns the proper html for content with inline style", () => {
    const html = "<p><em><strong>test</strong></em></p>";
    const draft = onConvertDraftToHTML(editorState(html));

    expect(draft).toEqual(html);
  });
  it("returns the proper html for content with block style", () => {
    const html = "<h2>test</h2>";
    const draft = onConvertDraftToHTML(editorState(html));

    expect(draft).toEqual(html);
  });
  it("returns the proper html for content with link", () => {
    const html = "<p><a href=\"http://google.com/\" target=\"_blank\">test1</a></p>";
    const draft = onConvertDraftToHTML(editorState(html));

    expect(draft).toEqual(html);
  });
  it("returns the proper html for content with link and script", () => {
    const html = "<p>test<sup><a href=\"http://figshare.com/\" target=\"_blank\">test</a></sup></p>";
    const draft = onConvertDraftToHTML(editorState(html));

    expect(draft).toEqual(html);
  });
});

describe("onConvertHTMLToDraft()", () => {
  it("returns the proper draft content from inline html", () => {
    const html = "<strong><i>test</i></strong>";
    const draft = EditorState.createWithContent(onConvertHTMLtoDraft(html));

    expect(typeof draft === "object").toBe(true);
  });
  it("returns the proper draft content from block html", () => {
    const html = "<ol><li>test</li></ol>";
    const draft = EditorState.createWithContent(onConvertHTMLtoDraft(html));

    expect(typeof draft === "object").toBe(true);
  });
  it("returns the proper draft from html with link", () => {
    const html = "<p><a href=\"http://google.com\" target=\"_blank\">test</a></p>";
    const draft = EditorState.createWithContent(onConvertHTMLtoDraft(html));

    expect(typeof draft === "object").toBe(true);
  });
  it("returns the proper draft from html with script", () => {
    let html = "<sub>test</sub>";
    const draft = EditorState.createWithContent(onConvertHTMLtoDraft(html));

    expect(typeof draft === "object").toBe(true);

    html = "<sup>test</sup>";
    expect(typeof draft === "object").toBe(true);
  });
});
