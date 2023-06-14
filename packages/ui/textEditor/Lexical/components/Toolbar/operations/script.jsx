import { FORMAT_TEXT_COMMAND } from "lexical";

import { describeExcludedTypes } from "../utils";


export default function operation({ tool, editor, state }) {
  const { type, group } = tool;
  const selectionFormats = state.formats;
  const excludedFormats = describeExcludedTypes(type, group, selectionFormats);
  excludedFormats.forEach((excluded) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, excluded);
  });
  editor.dispatchCommand(FORMAT_TEXT_COMMAND, type);
}
