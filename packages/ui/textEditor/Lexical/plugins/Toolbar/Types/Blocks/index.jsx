import React from "react";
import { FORMAT_TEXT_COMMAND } from "lexical";
import classnames from "classnames";

import icons from "../../../../../../icons/editor";

import styles from "./Blocks.css";


export const renderBlockTypes = (editor, { isBold, isUnderline, isItalic, isStrikethrough }) => {
  const boldClasses = classnames(styles.toolbarItem, { [styles.active]: isBold });
  const italicClasses = classnames(styles.toolbarItem, { [styles.active]: isItalic });
  const underlineClasses = classnames(styles.toolbarItem, { [styles.active]: isUnderline });
  const strikeThroughClasses = classnames(styles.toolbarItem, { [styles.active]: isStrikethrough });

  const { Bold, Strikethrough, Italic, Underline } = icons;

  return (
    <>
      <button
        aria-label="Format Bold"
        className={boldClasses}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        }}
      >
        <Bold className={styles.icon} />
      </button>
      <button
        aria-label="Format Italics"
        className={italicClasses}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        }}
      >
        <Italic className={styles.icon} />
      </button>
      <button
        aria-label="Format Underline"
        className={underlineClasses}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
        }}
      >
        <Underline className={styles.icon} />
      </button>
      <button
        aria-label="Format Strikethrough"
        className={strikeThroughClasses}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
        }}
      >
        <Strikethrough className={styles.icon} />
      </button>
    </>
  );
};
