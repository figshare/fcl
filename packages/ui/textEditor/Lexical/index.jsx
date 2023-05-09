import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateNodesFromDOM } from "@lexical/html";
import {
  $getRoot,
  $getSelection,
} from "lexical";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { $generateHtmlFromNodes } from "@lexical/html";


import ToolbarPlugin from "./plugins/Toolbar/ToolbarPlugin";
import { WarningPlugin } from "./plugins/Warning";
import DefaultTheme from "./themes/DefaultTheme";
import styles from "./editor.css";


const DEFAULT_MAX_TEXT_LENGTH = 10000;
const DEFAULT_MIN_TEXT_LENGTH = 5000;
const KEY_ENTER = 13;
const DEBOUNCE_DELAY = 1000;

const editorConfig = {
  // The editor theme
  theme: DefaultTheme,
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
};

export default function TextEditor(props) {
  return (
    <LexicalComposer initialConfig={editorConfig} >
      <Editor {...props} />
    </LexicalComposer>
  );
}

const Editor = (props) => {
  const { value, minTextLength, maxTextLength } = props;

  const [editor] = useLexicalComposerContext();
  const [contentLength, setContentLength] = useState(value.length);

  useEffect(() => {
    editor.update(() => {
      const parser = new DOMParser();
      const dom = parser.parseFromString(value, "text/html");
      const nodes = $generateNodesFromDOM(editor, dom);

      // Select the root
      $getRoot().select();

      // // Insert them at a selection.
      const selection = $getSelection();
      selection.insertNodes(nodes);
    });
  }, [editor]);

  return (<>
    <div className={styles.container}>
      <div className={styles.inner}>
        <RichTextPlugin
          ErrorBoundary={LexicalErrorBoundary}
          contentEditable={<ContentEditable className={styles.input} />}
          placeholder={<div className={styles.placeholder}>{props.placeholder}</div>}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <OnChangePlugin
          onChange={(editorState) => {
            editorState.read(() => {
              const { onChange, id, name } = props;

              if (typeof onChange === "function") {
                const serializedHTML = $generateHtmlFromNodes(editor);
                onChange({ target: { value: serializedHTML, id, name } });

                setContentLength(serializedHTML.length);
              }
            });
          }}
        />

        <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        <ListPlugin />
        <LinkPlugin />
      </div>
      <ToolbarPlugin props={props} />
    </div>
    <WarningPlugin contentLength={contentLength} maxLength={maxTextLength} minLength={minTextLength} />
  </>);
};

Editor.propTypes = {
  /**
    Callback called when the editor contents are edited or changed.
    Called with the new `value` as the first argument by default.
    If `fieldName` is specified, the `fieldName` will be the first argument,
    followed by the new `value`.
  */
  onChange: PropTypes.func.isRequired,
  /**
    Optional class to append to the text editor wrapper node.
  */
  className: PropTypes.string,
  /**
    Disables the editor.
  */
  disabled: PropTypes.bool,
  /**
    Identify the editor through a unique field name. Will be passed to the `onChange` function as the first argument.
  */
  name: PropTypes.string,
  id: PropTypes.string,
  /**
    Maximum number of characters for the editor text value. Includes markup.
  */
  maxTextLength: PropTypes.number,
  /**
    Minimum number of characters for the editor text value. Includes markup.
  */
  minTextLength: PropTypes.number,
  /**
    Placeholder text for the editor.
  */
  placeholder: PropTypes.string,
  /**
    Configuration options for the editor toolbar.
  */
  toolbarConfig: PropTypes.array,
  /**
    Editor text value.
  */
  value: PropTypes.string,
  /**
    Callback called when the editor looses focus.
  */
  onBlur: PropTypes.func,
  /**
    Callback called when the editor gains focus.
  */
  onFocus: PropTypes.func,
};

Editor.defaultProps = {
  className: undefined,
  disabled: false,
  placeholder: "",
  fieldName: "",
  maxTextLength: DEFAULT_MAX_TEXT_LENGTH,
  minTextLength: DEFAULT_MIN_TEXT_LENGTH,
  value: "",
  onBlur: undefined,
  onFocus: undefined,
  toolbarConfig: [],
};
