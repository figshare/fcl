import { FORMAT_TEXT_COMMAND } from "lexical";


export default function operation({ tool, editor }) {
  const { type } = tool;
  editor.dispatchCommand(FORMAT_TEXT_COMMAND, type);
}
