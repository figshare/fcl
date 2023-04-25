import icons from "../../icons/editor";


export const controlButtons = [
  { icon: icons.HeadingTwo, style: "header-two", type: "block", key: "h2" },
  { icon: icons.HeadingThree, style: "header-three", type: "block", key: "h3" },
  { icon: icons.HeadingFour, style: "header-four", type: "block", key: "h4" },
  {
    icon: icons.Paragraph,
    style: "unstyled",
    type: "block",
    hasSeparator: true,
    key: "p",
  },

  { icon: icons.Bold, style: "BOLD", type: "inline", key: "b" },
  { icon: icons.Italic, style: "ITALIC", type: "inline", key: "i" },
  { icon: icons.Underline, style: "UNDERLINE", type: "inline", key: "u" },
  {
    icon: icons.Strikethrough,
    style: "STRIKETHROUGH",
    type: "inline",
    hasSeparator: true,
    key: "strikethrough",
  },

  { icon: icons.Link, style: "link", type: "link", hasSeparator: true, key: "link" },

  { icon: icons.BulletList, style: "unordered-list-item", type: "block", key: "ul" },
  { icon: icons.NumberedList, style: "ordered-list-item", type: "block", key: "ol" },
  { icon: icons.Subscript, style: "unstyled", type: "sub", key: "sub" },
  {
    icon: icons.Superscript,
    style: "unstyled",
    type: "sup",
    hasSeparator: true,
    key: "sup",
  },

  { icon: icons.ClearFormatting, isAction: true, type: "clear", key: "clear" },
  {
    icon: icons.PasteAsPlainText,
    isAction: true,
    type: "paste",
    hasSeparator: true,
    key: "paste",
  },

  { icon: icons.Undo, isAction: true, type: "undo", key: "undo" },
  { icon: icons.Redo, isAction: true, type: "redo", key: "redo" },
];

export const ToolbarButtonType = {
  CLEAR: "clear",
  BLOCK: "block",
  INLINE: "inline",
  LINK: "link",
  SUP: "sup",
  SUB: "sub",
};

export const DraftEntity = {
  SUB: "SUB",
  SUP: "SUP",
  LINKSUB: "LINKSUB",
  LINKSUP: "LINKSUP",
  LINK: "LINK",
  UNSTYLED: "unstyled",
};
