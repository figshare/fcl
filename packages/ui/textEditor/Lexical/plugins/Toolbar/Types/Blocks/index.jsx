import React from "react";
import { FORMAT_TEXT_COMMAND } from "lexical";
import classnames from "classnames";

import { ToolbarItem, ToolbarItemType } from "../../../../constants";
import icons from "../../../../../../icons/editor";

import styles from "./Blocks.css";


export const renderRichText = (editor, config, editorSelection) => {
  const boldClasses = classnames(styles.toolbarItem, { [styles.active]: editorSelection.hasFormat("bold") });
  const italicClasses = classnames(styles.toolbarItem, { [styles.active]: editorSelection.hasFormat("italic") });
  const underlineClasses = classnames(styles.toolbarItem, { [styles.active]: editorSelection.hasFormat("underline") });
  const strikeThroughClasses = classnames(styles.toolbarItem,
    { [styles.active]: editorSelection.hasFormat("strikethrough") });

  const { Bold, Strikethrough, Italic, Underline } = icons;
  const richTextItems = config.filter((item) => item.type === ToolbarItemType.RichText).map((item) => item.name);

  return (
    <>
      {richTextItems.includes(ToolbarItem.Bold) &&
      <button
        aria-label="Format Bold"
        className={boldClasses}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, ToolbarItem.Bold);
        }}
      >
        <Bold className={styles.icon} />
      </button>
      }
      {richTextItems.includes(ToolbarItem.Italic) &&
      <button
        aria-label="Format Italics"
        className={italicClasses}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, ToolbarItem.Italic);
        }}
      >
        <Italic className={styles.icon} />
      </button>
      }
      {
        richTextItems.includes(ToolbarItem.Underline) &&
        <button
          aria-label="Format Underline"
          className={underlineClasses}
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, ToolbarItem.Underline);
          }}
        >
          <Underline className={styles.icon} />
        </button>
      }
      {
        richTextItems.includes(ToolbarItem.StrikeThrough) &&
        <button
          aria-label="Format Strikethrough"
          className={strikeThroughClasses}
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, ToolbarItem.StrikeThrough);
          }}
        >
          <Strikethrough className={styles.icon} />
        </button>
      }
    </>
  );
};
