import { useCallback, useState } from "react";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from "@lexical/list";

import { ToolbarItemType } from "../../constants";
import { renderTypes } from "../Toolbar/Types";


export const ListPlugin = ({ config, styles, editor }) => {
  const [selectedType, setSelectedType] = useState(null);

  const { toolbarItem, spaced, format, active } = styles;

  const onClick = useCallback((type) => {
    if (selectedType === type) {
      editor.dispatchCommand(REMOVE_LIST_COMMAND);
      setSelectedType("");
    } else {
      const commands = {
        ul: INSERT_UNORDERED_LIST_COMMAND,
        ol: INSERT_ORDERED_LIST_COMMAND,
      };
      editor.dispatchCommand(commands[type]);
      setSelectedType(type);
    }
  }, [selectedType, setSelectedType]);

  const selection = { hasFormat: (item) => selectedType === item };

  return renderTypes(
    config, { toolbarItem, spaced, format, active },
    ToolbarItemType.List,
    selection,
    onClick
  );
};
