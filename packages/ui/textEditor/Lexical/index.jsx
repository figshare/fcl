import React, { useEffect, useState, useLayoutEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
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
import { $generateNodesFromDOM, $generateHtmlFromNodes } from "@lexical/html";
import {
  $getRoot,
  BLUR_COMMAND,
  FOCUS_COMMAND,
} from "lexical";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { mergeRegister } from "@lexical/utils";

import { stripHtmlTags } from "./utils";
import { LowPriority, DefaultToolbarConfig } from "./constants";
import ToolbarPlugin from "./plugins/Toolbar";
import { WarningPlugin } from "./plugins/Warning";
import DefaultTheme from "./themes/DefaultTheme";
import styles from "./editor.css"; // eslint-disable-line css-modules/no-unused-class


const DEFAULT_MAX_TEXT_LENGTH = 10000;
const DEFAULT_MIN_TEXT_LENGTH = 5000;

const defaultConfig = {
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

export default function EditorContainer(props) {
  const { disabled } = props;

  return (
    <LexicalComposer initialConfig={ { ...defaultConfig, editable: !disabled } } >
      <Editor {...props} />
    </LexicalComposer>
  );
}

const Editor = (props) => {
  const {
    onBlur,
    onFocus,
    value,
    minTextLength,
    maxTextLength,
    className,
    toolbarConfig,
    onChange,
    id,
    name,
  } = props;

  const [editor] = useLexicalComposerContext();
  const [contentLength, setContentLength] = useState(value.length);

  const callbacks = useRef({ onChange, onBlur, onFocus });


  useEffect(() => {
    editor.update(() => {
      const parser = new DOMParser();
      const dom = parser.parseFromString(value, "text/html");
      const nodes = $generateNodesFromDOM(editor, dom);
      // Select the root
      const root = $getRoot().select();

      root.insertNodes(nodes);
    });
  }, []);

  useEffect(() => {
    callbacks.current.onChange = onChange;
    callbacks.current.onFocus = onFocus;
    callbacks.current.onBlur = onBlur;
  }, [callbacks, onChange, onBlur, onFocus]);

  useLayoutEffect(() =>
    mergeRegister(
      editor.registerCommand(FOCUS_COMMAND, () => {
        if (typeof callbacks.current.onFocus === "function") {
          onFocus(event);
        }
      }, LowPriority),
      editor.registerCommand(BLUR_COMMAND, (event) => {
        if (typeof callbacks.current.onBlur === "function") {
          onBlur(event);
        }
      }, LowPriority),
    )
  , [editor, callbacks]);

  const handleChange = useCallback((editorState) => {
    editorState.read(() => {
      if (typeof callbacks.current.onChange === "function") {
        const serializedHTML = $generateHtmlFromNodes(editor);

        callbacks.current.onChange({ target: { value: serializedHTML, id, name } });

        const strippedHTML = stripHtmlTags(serializedHTML);
        setContentLength(strippedHTML.length);
      }
    });
  }, [editor, callbacks, name, id]);

  const editorClasses = classnames(styles.container, className);

  return (<>
    <div className={editorClasses} data-id="editor-content-editable">
      <RichTextPlugin
        ErrorBoundary={LexicalErrorBoundary}
        contentEditable={<ContentEditable className={styles.input} />}
        placeholder={<div className={styles.placeholder}>{props.placeholder}</div>}
      />
      <HistoryPlugin />
      <AutoFocusPlugin />
      <OnChangePlugin ignoreSelectionChange={true} onChange={handleChange} />

      <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
      <ListPlugin />
      <LinkPlugin />
      <ToolbarPlugin config={toolbarConfig} />
    </div>
    <WarningPlugin contentLength={contentLength} maxLength={maxTextLength} minLength={minTextLength} />
  </>);
};

EditorContainer.propTypes = {
  /**
    Callback called when the editor contents are edited or changed.
    Called with: target: { value: serializedHTML, id, name }
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
  id: PropTypes.string,
  /**
    Maximum number of characters for the editor text value. Includes markup.
  */
  maxTextLength: PropTypes.number,
  /**
    Minimum number of characters for the editor text value. Includes markup.
  */
  minTextLength: PropTypes.number,
  name: PropTypes.string,
  /**
    Placeholder text for the editor.
  */
  placeholder: PropTypes.string,
  /**
    Configuration options for the editor toolbar.
    Ex: For adding the Bold button, the config object would be something like:

    .[{ name: "bold", type: "richText" }].

    The full list of supported items can be found in ./constants
  */
  toolbarConfig: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
  })),
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

EditorContainer.defaultProps = {
  className: undefined,
  placeholder: "",
  maxTextLength: DEFAULT_MAX_TEXT_LENGTH,
  minTextLength: DEFAULT_MIN_TEXT_LENGTH,
  value: "",
  disabled: false,
  onBlur: undefined,
  onFocus: undefined,
  toolbarConfig: DefaultToolbarConfig,
  name: undefined,
  id: "",
};

Editor.propTypes = EditorContainer.propTypes; // eslint-disable-line
