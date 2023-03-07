import { EditorState, SelectionState } from "draft-js";

import {
  findEntityURL,
  getEntityForLink,
  getSelectionEntity,
  toggleEntityOnSelection,
  findEntityType,
} from "./entityUtils";
import { onConvertHTMLtoDraft, onConvertDraftToHTML } from "./index";


const getStateWithSelection = (content, focusOffset) => {
  const editorState = EditorState.createWithContent(onConvertHTMLtoDraft(content));
  const firstBlockKey = editorState.getCurrentContent().getFirstBlock().getKey();
  const selectionState = SelectionState.createEmpty(firstBlockKey).merge({ focusOffset });

  return EditorState.forceSelection(editorState, selectionState);
};

describe("findEntityURL()", () => {
  it("returns the url of a entity of type link", () => {
    const editorState = getStateWithSelection("<a href=\"http://google.com\" target=\"_blank\">test</a>", 4);
    const result = "http://google.com/";

    expect(findEntityURL(editorState)).toEqual(result);
  });
  it("returns the url of a entity of type link with script", () => {
    const result = "http://google.com/";

    let editorState = getStateWithSelection("<sub><a href=\"http://google.com\" target=\"_blank\">test</a><sub>", 4);
    expect(findEntityURL(editorState)).toEqual(result);

    editorState = getStateWithSelection("<sup><a href=\"http://google.com\" target=\"_blank\">test</a><sup>", 4);
    expect(findEntityURL(editorState)).toEqual(result);
  });
});

describe("getEntityForLink()", () => {
  it("returns the entity for link", () => {
    const html = "<p>test component</p>";
    const elementOuter = "<a href=\"http://google.com\" target=\"_blank\">test</a>";
    const result = "LINK";

    expect(getEntityForLink(html, elementOuter)).toEqual(result);
  });

  it("returns the entity for link with sub", () => {
    const html = "<p>test<sub>d</sub><sub><a href=\"test\" target=\"_blank\">test</a></sub></p>";
    const elementOuter = "<a href=\"test\" target=\"_blank\">test</a>";

    const result = "LINKSUB";
    expect(getEntityForLink(html, elementOuter)).toEqual(result);
  });

  it("returns the entity for link with sup", () => {
    const html = "<p>test<sup><a href=\"http://figshare.com/\" target=\"_blank\">test</a></sup></p><p><br></p>";
    const elementOuter = "<a href=\"http://figshare.com/\" target=\"_blank\">test</a>";

    const result = "LINKSUP";
    expect(getEntityForLink(html, elementOuter)).toEqual(result);
  });
});

describe("findEntityType()", () => {
  it("returns the entity type for the current editorState with link", () => {
    const editorState = getStateWithSelection("<a href=\"http://google.com\" target=\"_blank\">test</a>", 4);
    const result = "LINK";

    expect(findEntityType(editorState)).toEqual(result);
  });
  it("returns the entity type for the current editorState with link and sub", () => {
    const editorState = getStateWithSelection("<sub><a href=\"http://google.com\" target=\"_blank\">test</a></sub>", 4);
    const result = "LINKSUB";

    expect(findEntityType(editorState)).toEqual(result);
  });

  it("returns the entity type for the current editorState with link and sup", () => {
    const editorState = getStateWithSelection("<sup><a href=\"http://google.com\" target=\"_blank\">test</a></sup>", 4);
    const result = "LINKSUP";

    expect(findEntityType(editorState)).toEqual(result);
  });
});

describe("getSelectionEntity()", () => {
  it("returns the entity key for the current editorState with link", () => {
    const editorState = getStateWithSelection("<a href=\"http://google.com\" target=\"_blank\">test</a>", 4);
    const selectionKey = editorState.getCurrentContent().getFirstBlock().getEntityAt(0);

    expect(getSelectionEntity(editorState)).toEqual(selectionKey);
  });
  it("returns the entity key for the current editorState with link and sub", () => {
    const editorState = getStateWithSelection("<sub><a href=\"http://google.com\" target=\"_blank\">test</a><sub>", 4);
    const selectionKey = editorState.getCurrentContent().getFirstBlock().getEntityAt(0);

    expect(getSelectionEntity(editorState)).toEqual(selectionKey);
  });

  it("returns the entity key for the current editorState with link and sup", () => {
    const editorState = getStateWithSelection("<sup><a href=\"http://google.com\" target=\"_blank\">test</a><sup>", 4);
    const selectionKey = editorState.getCurrentContent().getFirstBlock().getEntityAt(0);

    expect(getSelectionEntity(editorState)).toEqual(selectionKey);
  });
});

describe("toggleEntityOnSelection()", () => {
  it("toggles from unstyled to script", () => {
    const oldHTML = "<p>test</p>";
    const editorState = getStateWithSelection(oldHTML, 4);
    const newEntity = "SUP";
    const currentEntity = "unstyled";

    const toggleFunc = toggleEntityOnSelection(editorState, newEntity, currentEntity);
    const newHTML = onConvertDraftToHTML(toggleFunc);

    expect(newHTML).toEqual("<p><sup>test</sup></p>");
  });

  it("toggles from script to unstyled", () => {
    const oldHTML = "<p><sub>test</sub><p>";
    const editorState = getStateWithSelection(oldHTML, 4);
    const newEntity = "unstyled";
    const currentEntity = "SUB";

    const toggleFunc = toggleEntityOnSelection(editorState, newEntity, currentEntity);
    const newHTML = onConvertDraftToHTML(toggleFunc);

    expect(newHTML).toEqual("<p><span>test</span></p>");
  });

  it("toggles sub to sup", () => {
    const oldHTML = "<p><sub>test</sub><p>";
    const editorState = getStateWithSelection(oldHTML, 4);
    const newEntity = "SUP";
    const currentEntity = "SUB";

    const toggleFunc = toggleEntityOnSelection(editorState, newEntity, currentEntity);
    const newHTML = onConvertDraftToHTML(toggleFunc);

    expect(newHTML).toEqual("<p><sup>test</sup></p>");
  });

  it("toggles sup to sub", () => {
    const oldHTML = "<p><sup>test</sup><p>";
    const editorState = getStateWithSelection(oldHTML, 4);
    const newEntity = "SUB";
    const currentEntity = "SUP";

    const toggleFunc = toggleEntityOnSelection(editorState, newEntity, currentEntity);
    const newHTML = onConvertDraftToHTML(toggleFunc);

    expect(newHTML).toEqual("<p><sub>test</sub></p>");
  });
});

