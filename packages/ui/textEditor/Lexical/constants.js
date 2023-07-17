export const LowPriority = 1;
export const HighPriority = 2;

export const FOCUSABLE_ELEMENTS = "button:not([tabindex=\"-1\"]), " +
"[href]:not([tabindex=\"-1\"]), " +
"input:not([disabled]):not([tabindex=\"-1\"]), " +
"select:not([disabled]):not([tabindex=\"-1\"]), " +
"textarea:not([disabled]):not([tabindex=\"-1\"]), " +
"[tabindex]:not([tabindex=\"-1\"]), " +
"div[contenteditable=\"true\"]:not([tabindex=\"-1\"])";

export const ToolbarItem = {
  Heading2: "h2",
  Heading3: "h3",
  Heading4: "h4",
  Paragraph: "paragraph",
  Bold: "bold",
  Italic: "italic",
  StrikeThrough: "strikethrough",
  Underline: "underline",
  OrderedList: "ol",
  UnorderedList: "ul",
  Subscript: "subscript",
  Superscript: "superscript",
  Undo: "undo",
  Redo: "redo",
  ClearFormatting: "clearFormatting",
  PasteWithoutFormat: "pasteWithoutFormat",
  Link: "link",
};
export const ToolbarItemType = {
  Block: "block",
  List: "list",
  Script: "script",
  History: "history",
  Format: "format",
  RichText: "richText",
  Link: "link",
};

export const DefaultToolbarConfig = [
  { name: ToolbarItem.Heading2, type: ToolbarItemType.Block },
  { name: ToolbarItem.Heading3, type: ToolbarItemType.Block },
  { name: ToolbarItem.Heading4, type: ToolbarItemType.Block },
  { name: ToolbarItem.Paragraph, type: ToolbarItemType.Block },
  { name: ToolbarItem.Bold, type: ToolbarItemType.RichText },
  { name: ToolbarItem.Italic, type: ToolbarItemType.RichText },
  { name: ToolbarItem.Underline, type: ToolbarItemType.RichText },
  { name: ToolbarItem.StrikeThrough, type: ToolbarItemType.RichText },
  { name: ToolbarItem.Link, type: ToolbarItemType.Link },
  { name: ToolbarItem.OrderedList, type: ToolbarItemType.List },
  { name: ToolbarItem.UnorderedList, type: ToolbarItemType.List },
  { name: ToolbarItem.Subscript, type: ToolbarItemType.Script },
  { name: ToolbarItem.Superscript, type: ToolbarItemType.Script },
  { name: ToolbarItem.ClearFormatting, type: ToolbarItemType.Format },
  { name: ToolbarItem.PasteWithoutFormat, type: ToolbarItemType.Format },
  { name: ToolbarItem.Undo, type: ToolbarItemType.History },
  { name: ToolbarItem.Redo, type: ToolbarItemType.History },
];

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
