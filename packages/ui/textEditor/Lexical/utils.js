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
