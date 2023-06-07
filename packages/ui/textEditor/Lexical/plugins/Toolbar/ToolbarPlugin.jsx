import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  REDO_COMMAND,
  UNDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  CLICK_COMMAND,
  FORMAT_TEXT_COMMAND,
  $getSelection,
  $isRangeSelection,
  $createParagraphNode,
  $isTextNode,
} from "lexical";
import { $isLinkNode, $isAutoLinkNode } from "@lexical/link";
import {
  $wrapNodes,
  $isAtNodeEnd,
} from "@lexical/selection";
import {
  $findMatchingParent,
  $getNearestNodeOfType,
  mergeRegister,
  $getNearestBlockElementAncestorOrThrow,
} from "@lexical/utils";
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
  $isQuoteNode,
} from "@lexical/rich-text";
import classnames from "classnames";
import { $isDecoratorBlockNode } from "@lexical/react/LexicalDecoratorBlockNode";

import { renderBlockTypes } from "../Toolbar/Types/Blocks";
import useModal from "../LinkEditor/useModal";
import { LinkEditor } from "../LinkEditor/LinkEditor";
import icons from "../../../../icons/editor";

import { renderTypes } from "./Types";
import styles from "./Toolbar.css"; // eslint-disable-line css-modules/no-unused-class


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
  const [activeEditor, setActiveEditor] = useState(editor);

  const [isLink, setIsLink] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const blocks = { isBold, isItalic, isUnderline, isStrikethrough };
  const [modal, showModal] = useModal();
  const [hasSelection, setHasSelection] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();

    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();

      setHasSelection((selection.focus.offset - selection.anchor.offset) !== 0);

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

  const insertLink = useCallback(() => {
    showModal("Insert Link", (onClose) => (
      <LinkEditor
        activeEditor={activeEditor}
        onClose={onClose}
      />
    ));
  }, [activeEditor]);

  useEffect(() => mergeRegister(
    editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        updateToolbar();
      });
    }),
    editor.registerCommand(
      SELECTION_CHANGE_COMMAND, (_payload, newEditor) => {
        updateToolbar();
        setActiveEditor(newEditor);

        editor.registerCommand(
          CLICK_COMMAND, () => {
            const selection = $getSelection();
            const node = getSelectedNode(selection);
            const linkParent = $findMatchingParent(node, $isLinkNode);
            const autoLinkParent = $findMatchingParent(node, $isAutoLinkNode);

            if (linkParent !== null && autoLinkParent === null &&
              $isRangeSelection(selection) && !selection.anchor.offset) {
              insertLink();
            }

            return false;
          }, LowPriority
        );

        return false;
      }, LowPriority
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

  const onClearFormat = () => useCallback(() => {
    activeEditor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const { anchor } = selection;
        const { focus } = selection;
        const nodes = selection.getNodes();

        if (anchor.key === focus.key && anchor.offset === focus.offset) {
          return;
        }

        nodes.forEach((node, idx) => {
          // We split the first and last node by the selection
          // So that we don't format unselected text inside those nodes
          if ($isTextNode(node)) {
            if (idx === 0 && anchor.offset !== 0) {
              node = node.splitText(anchor.offset)[1] || node; //eslint-disable-line
            }
            if (idx === nodes.length - 1) {
              node = node.splitText(focus.offset)[0] || node; //eslint-disable-line
            }

            if (node.__style !== "") {
              node.setStyle("");
            }
            if (node.__format !== 0) {
              node.setFormat(0);
              $getNearestBlockElementAncestorOrThrow(node).setFormat("");
            }
          } else if ($isHeadingNode(node) || $isQuoteNode(node)) {
            node.replace($createParagraphNode(), true);
          } else if ($isDecoratorBlockNode(node)) {
            node.setFormat("");
          }
        });
      }
    });
  }, [activeEditor]);

  // CLASSNAMES
  const { toolbarItem, spaced, format, active } = styles;

  const linkClasses = classnames(styles.toolbarItem, { [styles.active]: isLink });

  return (
    <div ref={toolbarRef} className={styles.toolbar}>
      {renderTypes({ toolbarItem, spaced, format, active }, "block", blockType, onBlockClick)}
      <Divider />
      {renderBlockTypes(editor, blocks)}
      <Divider />
      <button
        aria-label="Insert Link"
        className={linkClasses}
        disabled={!hasSelection}
        onClick={insertLink}
      >
        <icons.Link className={styles.icon} />
      </button>
      <Divider />
      {renderTypes({ toolbarItem, spaced, format, active }, "list", listType, onListClick)}
      {renderTypes({ toolbarItem, spaced, format, active }, "script", scriptType, onScriptClick)}
      <Divider />
      {renderTypes({ toolbarItem, spaced, format, active }, "format", null, onClearFormat)}
      <Divider />
      {renderTypes({ toolbarItem, spaced, format, active, canUndo, canRedo }, "history", null, onHistoryClick)}
      {modal}
    </div>
  );
}

