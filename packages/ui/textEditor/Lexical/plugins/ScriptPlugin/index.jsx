import { useCallback, useState } from "react";
import { FORMAT_TEXT_COMMAND } from "lexical";

import { ToolbarItemType } from "../../constants";
import { renderTypes } from "../Toolbar/Types";


export const ScriptPlugin = (props) => {
  const { config, styles, editor } = props;
  const { toolbarItem, spaced, format, active } = styles;

  const [selectedType, setSelectedType] = useState(null);

  const onClick = useCallback((type) => {
    // Remove the selected script
    if (selectedType) {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, selectedType);
    }

    // Change the selected script
    if (selectedType === type) {
      setSelectedType("");
    } else {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, type);
      setSelectedType(type);
    }
  }, [editor, setSelectedType, selectedType]);

  const selection = { hasFormat: (item) => selectedType === item };

  return renderTypes(
    config,
    { toolbarItem, spaced, format, active },
    ToolbarItemType.Script,
    selection,
    onClick
  );
};
