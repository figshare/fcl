import { ToolbarItemType } from "../../../constants";
import { debug } from "../../../utils";

import blockOperation from "./block";
import formatOperation from "./format";
import scriptOperation from "./script";
import richTextOperation from "./richText";
import linkOperation from "./link";
import listOperation from "./list";
import historyOperation from "./history";


const Operations = {
  [ToolbarItemType.Format]: formatOperation,
  [ToolbarItemType.Script]: scriptOperation,
  [ToolbarItemType.RichText]: richTextOperation,
  [ToolbarItemType.Block]: blockOperation,
  [ToolbarItemType.Link]: linkOperation,
  [ToolbarItemType.List]: listOperation,
  [ToolbarItemType.History]: historyOperation,
};

export function runTool({ tool, state, editor, callbacks }) {
  const runner = Operations[tool.group];

  try {
    runner({ tool, state, editor, callbacks });
  } catch (e) {
    debug("runTool() failed running tool, or running unregistered tool group", tool, state, editor);
  }
}

export default runTool;

