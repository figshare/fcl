import { getSelectedNode, sanitizeUrl } from "./utils";


jest.mock("@lexical/selection");

describe("link editor utils", () => {
  it("get selected node", () => {
    const selection = {
      anchor: { getNode: () => "node" },
      focus: { getNode: () => "node" },
      isBackward: () => true,
    };

    let result = getSelectedNode(selection);
    expect(result).toEqual(selection.anchor.getNode());

    selection.anchor = { getNode: () => "anchorNode" };
    selection.focus = { getNode: () => "focusNode" };

    result = getSelectedNode(selection);
    expect(result).toEqual(selection.focus.getNode());

    selection.isBackward = () => false;

    result = getSelectedNode(selection);
    expect(result).toEqual(selection.focus.getNode());
  });

  it("sanitizes the url", () => {
    const url = "https://data:test.javascript:com";

    expect(sanitizeUrl(url)).toEqual("https://test.com");
  });
});
