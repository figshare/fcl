import { $isAtNodeEnd } from "@lexical/selection";


const ToolbarSections = {
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

export const getToolbarMainSections = (config) => config.reduce((acc, item) => {
  if (ToolbarSections[item.type]?.types.includes(item.name)) {
    if (!acc[item.type]) {
      acc[item.type] = { types: [], names: {} };
    }

    acc[item.type].types = [...(acc[item.type].types), item.name];
    acc[item.type].names = {
      ...acc[item.type].names,
      ...{ [item.name]: ToolbarSections[item.type].names[item.name] },
    };
  }

  return acc;
}, {});

export const stripHtmlTags = (html) => {
  const regexp = /(<([^>]+)>)/gi;

  return html.replace(regexp, "");
};

export const getScriptType = (selection) => {
  if (selection.hasFormat("subscript")) {
    return "subscript";
  }

  if (selection.hasFormat("superscript")) {
    return "superscript";
  }

  return "";
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
