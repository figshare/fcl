import { RichUtils } from "draft-js";


export default (command, editorState) => {
  let commandStyle = "";
  let type = "inline";

  switch (command) {
    case "bold":
      commandStyle = "BOLD";
      break;
    case "italic":
      commandStyle = "ITALIC";
      break;
    case "underline":
      commandStyle = "UNDERLINE";
      break;
    case "strikethrough":
      commandStyle = "STRIKETHROUGH";
      break;
    case "ordered-list-item":
      commandStyle = "ordered-list-item";
      type = "block";
      break;
    case "unordered-list-item":
      commandStyle = "unordered-list-item";
      type = "block";
      break;
    default:
      break;
  }

  if (type === "block") {
    return RichUtils.toggleBlockType(editorState, commandStyle);
  }

  return RichUtils.toggleInlineStyle(editorState, commandStyle);
};
