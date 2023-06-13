import { useCallback } from "react";
import { REDO_COMMAND, UNDO_COMMAND } from "lexical";

import { ToolbarItemType } from "../../constants";
import { renderTypes } from "../Toolbar/Types";


export const HistoryPlugin = (props) => {
  const { config, styles, editor } = props;

  const onClick = useCallback((type) => {
    const commands = {
      undo: UNDO_COMMAND,
      redo: REDO_COMMAND,
    };
    editor.dispatchCommand(commands[type]);
  }, [editor]);

  return renderTypes(
    config,
    styles,
    ToolbarItemType.History,
    null,
    onClick
  );
};
