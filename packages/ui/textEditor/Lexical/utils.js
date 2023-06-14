import { $isAtNodeEnd } from "@lexical/selection";


export const ToolbarSections = {
  block: {
    types: [
      "h2",
      "h3",
      "h4",
      "paragraph",
    ],
    names: {
      h2: "H2",
      h3: "H3",
      h4: "H4",
      paragraph: "P",
    },
  },
  richText: {
    types: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
    ],
    names: {
      "bold": "Bold",
      "italic": "Italic",
      "underline": "Underline",
      "strikethrough": "Strikethrough",
    },
  },
  list: {
    types: [
      "ul",
      "ol",
    ],
    names: {
      ul: "Unordered List",
      ol: "Ordered List",
    },
  },
  link: {
    types: ["link"],
    names: { link: "Hyperlink" },
  },
  script: {
    types: [
      "subscript",
      "superscript",
    ],
    names: {
      subscript: "Subscript",
      superscript: "Superscript",
    },
  },
  history: {
    types: [
      "undo",
      "redo",
    ],
    names: {
      undo: "Undo",
      redo: "Redo",
    },
  },
  format: {
    types: [
      "clearFormatting",
      "pasteWithoutFormat",
    ],
    names: {
      clearFormatting: "Clear Formatting",
      pasteWithoutFormat: "Paste Without Format",
    },
  },
};

export const stripHtmlTags = (html) => {
  const regexp = /(<([^>]+)>)/gi;

  return html.replace(regexp, "");
};

export const getSelectedNode = (selection) => {
  const { anchor } = selection;
  const { focus } = selection;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  const isBackward = selection.isBackward();
  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  }

  return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
};


export function debug(...args) {
  // eslint-disable-next-line no-console
  console.log(...args);
}
