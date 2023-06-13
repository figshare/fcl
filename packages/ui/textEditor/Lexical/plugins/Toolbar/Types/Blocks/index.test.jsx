import { DefaultToolbarConfig } from "../../../../constants";

import { renderRichText } from "./";


describe("Toolbar Blocks component", () => {
  const editor = jest.fn();

  it("renders the correct blocks", () => {
    const renderedBlocks = renderRichText(editor, {}, DefaultToolbarConfig);
    const children = renderedBlocks.props?.children;

    expect(children).toHaveLength(4);

    const hasBoldBlock = children.some((child) => child.props["aria-label"] === "Format Bold");
    const hasItalicBlock = children.some((child) => child.props["aria-label"] === "Format Italics");
    const hasUnderlineBlock = children.some((child) => child.props["aria-label"] === "Format Underline");
    const hasStriketroughBlock = children.some((child) => child.props["aria-label"] === "Format Strikethrough");

    expect(hasBoldBlock).toBe(true);
    expect(hasItalicBlock).toBe(true);
    expect(hasUnderlineBlock).toBe(true);
    expect(hasStriketroughBlock).toBe(true);
  });

  it("renders the active block based on the active prop", () => {
    const renderedBlocks = renderRichText(editor, { isBold: true }, DefaultToolbarConfig);
    const children = renderedBlocks.props?.children;


    const Bold = children.find((child) => child.props["aria-label"] === "Format Bold");
    expect(Bold.props.className).toContain("active");
  });
});
