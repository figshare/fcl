import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  REDO_COMMAND,
  UNDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  FORMAT_TEXT_COMMAND,
  $getSelection,
  $isRangeSelection,
  $createParagraphNode,
} from "lexical";
import { $isLinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import {
  $wrapNodes,
  $isAtNodeEnd,
} from "@lexical/selection";
import { $getNearestNodeOfType, mergeRegister } from "@lexical/utils";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
  $isListNode,
  ListNode,
} from "@lexical/list";
import {
  $createHeadingNode,
  $isHeadingNode,
} from "@lexical/rich-text";
import classnames from "classnames";

import { renderBlockTypes } from "../Toolbar/Types/Blocks";

import { renderTypes } from "./Types";
import styles from "./Toolbar.css";


const LowPriority = 1;

function Divider() {
  return <div className={styles.divider} />;
}


function getSelectedNode(selection) {
  const { anchor } = selection;
  const { focus } = selection;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  const isBackward = selection.isBackward();
  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  }

  return $isAtNodeEnd(anchor) ? focusNode : anchorNode;

}

const getScriptType = (selection) => {
  if (selection.hasFormat("subscript")) {
    return "subscript";
  }

  if (selection.hasFormat("superscript")) {
    return "superscript";
  }

  return "";
};

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef(null);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [blockType, setBlockType] = useState("paragraph");
  const [listType, setListType] = useState("");
  const [scriptType, setScriptType] = useState("");
  const [formatType, setFormatType] = useState("");
  const [activeEditor, setActiveEditor] = useState(editor);

  const [isLink, setIsLink] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const blocks = { isBold, isItalic, isUnderline, isStrikethrough };

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      const element =
        anchorNode.getKey() === "root" ? anchorNode : anchorNode.getTopLevelElementOrThrow();
      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);
      if (elementDOM !== null) {
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType(anchorNode, ListNode);
          const type = parentList ? parentList.getTag() : element.getTag();
          setBlockType(type);
        } else {
          const type = $isHeadingNode(element) ? element.getTag() : element.getType();
          setBlockType(type);
        }
      }
      // Update text format
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));

      // Update scritp type
      setScriptType(getScriptType(selection));

      // Update links
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }
    }
  }, [editor]);

  useEffect(() => mergeRegister(
    editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        updateToolbar();
      });
    }),
    editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        updateToolbar();
        setActiveEditor(newEditor);

        return false;
      },
      LowPriority
    ),
    editor.registerCommand(
      CAN_UNDO_COMMAND,
      (payload) => {
        setCanUndo(payload);

        return false;
      },
      LowPriority
    ),
    editor.registerCommand(
      CAN_REDO_COMMAND,
      (payload) => {
        setCanRedo(payload);

        return false;
      },
      LowPriority
    )
  ), [editor, updateToolbar]);

  const insertLink = useCallback(() => {
    // @todo - add link logic
    if (!isLink) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, "https://");
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink]);

  const onBlockClick = (type) => () => {
    editor.update(() => {
      const selection = $getSelection();

      if ($isRangeSelection(selection)) {
        if (type === blockType || type === "paragraph") {
          $wrapNodes(selection, () => $createParagraphNode());
        } else {
          $wrapNodes(selection, () => $createHeadingNode(type));
        }
      }
    });

    setBlockType(type);
  };

  const onListClick = (type) => useCallback(() => {
    if (listType === type) {
      editor.dispatchCommand(REMOVE_LIST_COMMAND);
      setListType("");
    } else {
      const commands = {
        ul: INSERT_UNORDERED_LIST_COMMAND,
        ol: INSERT_ORDERED_LIST_COMMAND,
      };
      editor.dispatchCommand(commands[type]);
      setListType(type);
    }
  }, []);

  const onScriptClick = (type) => () => {
    // Remove the selected script
    if (scriptType) {
      activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, scriptType);
    }

    // Change the selected script
    if (scriptType === type) {
      setScriptType("");
    } else {
      activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, type);
      setScriptType(type);
    }
  };

  const onHistoryClick = (type) => useCallback(() => {
    const commands = {
      undo: UNDO_COMMAND,
      redo: REDO_COMMAND,
    };
    editor.dispatchCommand(commands[type]);
  });

  const onFormatClick = (type) => useCallback(() => {
    // to do
  });

  // CLASSNAMES
  const { toolbarItem, spaced, format, active } = styles;

  const linkClasses = classnames(styles.toolbarItem, styles.spaced, { [styles.active]: isLink });
  const linkIconClasses = classnames(styles.format, styles.link);

  return (
    <div ref={toolbarRef} className={styles.toolbar}>
      {renderTypes({ toolbarItem, spaced, format, active }, "block", blockType, onBlockClick)}
      <Divider />
      {renderBlockTypes(editor, blocks)}
      <Divider />
      <button
        aria-label="Insert Link"
        className={linkClasses}
        onClick={insertLink}
      >
        <i className={linkIconClasses} />
      </button>
      <Divider />
      {renderTypes({ toolbarItem, spaced, format, active }, "list", listType, onListClick)}
      {renderTypes({ toolbarItem, spaced, format, active }, "script", scriptType, onScriptClick)}
      <Divider />
      {renderTypes({ toolbarItem, spaced, format, active }, "format", formatType, onFormatClick)}
      <Divider />
      {renderTypes({ toolbarItem, spaced, format, active, canUndo, canRedo }, "history", null, onHistoryClick)}
    </div>
  );
}

