import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import PropTypes from "prop-types";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  SELECTION_CHANGE_COMMAND,
  CLICK_COMMAND,
  $getSelection,
  $isRangeSelection,
} from "lexical";
import { $isLinkNode, $isAutoLinkNode } from "@lexical/link";
import {
  $findMatchingParent,
  mergeRegister,
} from "@lexical/utils";
import classnames from "classnames";

import { DefaultToolbarConfig, LowPriority, ToolbarItemType } from "../../constants";
import useModal from "../LinkEditor/useModal";
import { LinkEditor } from "../LinkEditor/LinkEditor";
import icons from "../../../../icons/editor";
import { ListPlugin, ScriptPlugin, FormatPlugin, HistoryPlugin, BlocksPlugin } from "../";
import { getSelectedNode } from "../../utils";

import { renderRichText } from "./Types/Blocks";
import styles from "./Toolbar.css"; // eslint-disable-line css-modules/no-unused-class


function Divider() {
  return <div className={styles.divider} />;
}

export default function ToolbarPlugin({ config }) {
  const [editor] = useLexicalComposerContext();
  const toolbarRef = useRef(null);

  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const [editorSelection, setEditorSelection] = useState({ hasFormat: () => false });

  const [activeEditor, setActiveEditor] = useState(editor);

  const [isLink, setIsLink] = useState(false);

  const [modal, showModal] = useModal();
  const [hasSelection, setHasSelection] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    setEditorSelection(selection);
    setHasSelection((selection.focus.offset - selection.anchor.offset) !== 0);

    if ($isRangeSelection(selection)) {
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

  const linkClasses = classnames(styles.toolbarItem, { [styles.active]: isLink });
  const allowedToolbarBlocks = config.map((item) => (item.type));

  return (
    <div ref={toolbarRef} className={styles.toolbar}>
      {allowedToolbarBlocks.includes(ToolbarItemType.Block) &&
      <BlocksPlugin
        config={config}
        editor={editor}
        editorSelection={editorSelection}
        styles={styles}
      />}

      {allowedToolbarBlocks.includes(ToolbarItemType.RichText) &&
        <>
          <Divider />
          {renderRichText(editor, config, editorSelection)}
        </>
      }

      {allowedToolbarBlocks.includes(ToolbarItemType.Link) && <>
        <Divider />
        <button
          aria-label="Insert Link"
          className={linkClasses}
          disabled={!hasSelection}
          onClick={insertLink}
        >
          <icons.Link className={styles.icon} />
        </button>
      </>}
      {allowedToolbarBlocks.includes(ToolbarItemType.List) &&
      <>
        <Divider />
        <ListPlugin
          config={config}
          editor={activeEditor}
          styles={styles}
        />
      </>}

      {allowedToolbarBlocks.includes(ToolbarItemType.Script) &&
      <>
        <ScriptPlugin
          config={config}
          editor={activeEditor}
          styles={styles}
        />
        <Divider />
      </>
      }

      {allowedToolbarBlocks.includes(ToolbarItemType.Format) &&
      <>
        <FormatPlugin
          config={config}
          editor={activeEditor}
          styles={styles}
        />
        <Divider />
      </>}
      {allowedToolbarBlocks.includes(ToolbarItemType.History) &&
      <HistoryPlugin
        config={config}
        editor={activeEditor}
        styles={ { ...styles, canUndo, canRedo } }
      />}
      {modal}
    </div>
  );
}

ToolbarPlugin.propTypes = { config: PropTypes.shape };
ToolbarPlugin.defaultProps = { config: DefaultToolbarConfig };
