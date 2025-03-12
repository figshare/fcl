import { $isRangeSelection } from "lexical";
import { $isLinkNode } from "@lexical/link";
import { $isListNode, ListNode } from "@lexical/list";
import { $isHeadingNode } from "@lexical/rich-text";
import { $getNearestNodeOfType } from "@lexical/utils";

import { ToolbarItem, ToolbarItemType, ToolbarSections } from "../../constants";
import { getSelectedNode } from "../../utils";
import Bold from "../../../../icons/react/TextEditorBold";
import Italic from "../../../../icons/react/TextEditorItalic";
import Underline from "../../../../icons/react/TextEditorUnderline";
import Strikethrough from "../../../../icons/react/TextEditorStrikethrough";
import H2 from "../../../../icons/react/TextEditorH2";
import H3 from "../../../../icons/react/TextEditorH3";
import H4 from "../../../../icons/react/TextEditorH4";
import Ul from "../../../../icons/react/TextEditorBullet";
import Ol from "../../../../icons/react/TextEditorNumeric";
import Superscript from "../../../../icons/react/TextEditorSuperscript";
import Subscript from "../../../../icons/react/TextEditorSubscript";
import Paragraph from "../../../../icons/react/TextEditorP";
import Link from "../../../../icons/react/Link";
import Undo from "../../../../icons/react/Undo";
import Redo from "../../../../icons/react/Redo";
import ClearFormatting from "../../../../icons/react/TextEditorClearFormat";
import PasteWithoutFormat from "../../../../icons/react/DocumentEdit";
import Resize from "../../../../icons/editor/resize";


export const IconSet = {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  H2,
  H3,
  H4,
  Ul,
  Ol,
  Superscript,
  Subscript,
  Paragraph,
  Link,
  Undo,
  Redo,
  ClearFormatting,
  PasteWithoutFormat,
  Resize,
};

export function getToolLabelAndIcon(type, group) {
  let label = "Unknown Tool";

  try {
    label = ToolbarSections[group].names[type];
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log("Unknown tool", type, "for group", group);
  }

  const IconName = type.charAt(0).toUpperCase() + type.slice(1);
  const icon = IconSet[IconName];

  return { label, icon };
}

export function describeToolsFromConfig(config) {
  return config.reduce((result, item) => {
    const { type, name } = item;

    const section = result.sections[type];

    const { label, icon } = getToolLabelAndIcon(name, type);

    if (section) {
      section.tools.push({ type: name, group: type, label, icon });
    } else {
      result.order.push(type);
      result.sections[type] = {
        type,
        tools: [{ type: name, group: type, label, icon }],
      };
    }


    return result;
  }, { order: [], sections: {} });
}

export function checkIfToolIsActive(tool, state) {
  switch (tool.group) {
    case "script":
    case "richText":
      return state.formats.includes(tool.type);
    case "list":
      return state.list === tool.type;
    case "block":
      return state.block === tool.type;
    default:
      return false;
  }
}

export function checkIfToolIsDisabled(tool, state) {
  switch (tool.group) {
    case ToolbarItemType.Link:
      return !state.hasSelection;
    case ToolbarItemType.History:
      return !state[tool.type];
    case ToolbarItemType.List: {
      const block = state.block ?? "";

      return ["h1", "h2", "h3", "h4"].includes(block);
    }
    case ToolbarItemType.Block: {
      if (tool.type === ToolbarItem.Paragraph) {
        return false;
      }

      const block = state.block ?? "";

      return block === "list";
    }
    case ToolbarItemType.Format: {
      if (tool.type === ToolbarItem.ClearFormatting) {
        return !state.hasSelection;
      }

      return false;
    }
    default:
      return false;
  }
}

export function describeExcludedTypes(type, group, selectionFormats) {
  if (group === "script") {
    return ToolbarSections.script.types.filter((t) => t !== type && selectionFormats.includes(t));
  }

  return [];
}

export function describeHasSelection({ selection }) {
  return selection !== null && (selection.focus.offset - selection.anchor.offset) !== 0;
}

export function describeSelectionFormats({ selection }) {
  const formats = [];
  const supported = [...ToolbarSections.richText.types, ...ToolbarSections.script.types];

  supported.forEach((format) => {
    try {
      const has = selection.hasFormat(format);

      if (has) {
        formats.push(format);
      }
    } catch {
      // "hasFormat does not have format", format, selection;
    }
  });

  return formats;
}

export function describeListState({ selection, editor }) {
  const anchorNode = selection.anchor.getNode();
  const element =
    anchorNode.getKey() === "root" ? anchorNode : anchorNode.getTopLevelElementOrThrow();
  const elementKey = element.getKey();
  const elementDOM = editor.getElementByKey(elementKey);

  if (elementDOM !== null && $isListNode(element)) {
    const parentList = $getNearestNodeOfType(anchorNode, ListNode);

    return parentList ? parentList.getTag() : element.getTag();
  }

  return undefined;
}

export function describeBlockState({ selection }) {
  const anchorNode = selection.anchor.getNode();

  const element =
    anchorNode.getKey() === "root" ? anchorNode : anchorNode.getTopLevelElementOrThrow();

  return $isHeadingNode(element) ? element.getTag() : element.getType();
}

export function describeLinkState({ selection }) {
  if ($isRangeSelection(selection)) {
    const node = getSelectedNode(selection);
    const parent = node.getParent();

    return $isLinkNode(parent) || $isLinkNode(node);
  }

  return false;
}
