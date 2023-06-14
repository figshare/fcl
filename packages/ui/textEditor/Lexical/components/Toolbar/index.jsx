import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import PropTypes from "prop-types";
import React, { useReducer, useMemo, useCallback, useEffect, useRef } from "react";
import {
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  CLICK_COMMAND,
  $getSelection,
  $isRangeSelection,
} from "lexical";
import { $isLinkNode, $isAutoLinkNode } from "@lexical/link";
import { $isListNode, ListNode } from "@lexical/list";
import { $isHeadingNode } from "@lexical/rich-text";
import {
  $findMatchingParent,
  $getNearestNodeOfType,
  mergeRegister,
} from "@lexical/utils";

import { DefaultToolbarConfig, LowPriority } from "../../constants";
import useModal from "../LinkEditor/useModal";
import { LinkEditor } from "../LinkEditor/LinkEditor";
import { debug, getSelectedNode } from "../../utils";

import styles from "./Toolbar.css"; // eslint-disable-line css-modules/no-unused-class
import Tool from "./components/Tool";
import Divider from "./components/Divider";
import {
  checkIfToolIsActive,
  checkIfToolIsDisabled,
  describeToolsFromConfig,
  describeSelectionFormats,
} from "./utils";
import runTool from "./operations";


const initialState = {
  formats: [],
  blocks: [],
  redo: false,
  undo: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "BATCH":
      return { ...state, ...action.payload };
    case "CAN_REDO":
      return { ...state, redo: action.payload };
    case "CAN_UNDO":
      return { ...state, undo: action.payload };
    default:
      return state;
  }
}

export default function Toolbar({ config }) {
  const [editor] = useLexicalComposerContext();
  const editorRef = useRef(editor);
  const [modal, showModal] = useModal();
  const [state, dispatch] = useReducer(reducer, initialState);
  const stateRef = useRef(state);

  useEffect(() => {
    stateRef.current = state;
  }, [state, stateRef]);

  useEffect(() => {
    editorRef.current = editor;
  }, [editor, editorRef]);

  const onToolSelect = useCallback((event) => {
    const { currentTarget } = event;

    const tool = {
      type: currentTarget.getAttribute("data-tool-type"),
      group: currentTarget.getAttribute("data-tool-group"),
    };

    runTool({ tool, editor: editorRef.current, state: stateRef.current, callbacks: { showModal } });
  }, [editor, showModal]);

  const tools = useMemo(() => describeToolsFromConfig(config), [config]);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    const payload = { selection };

    payload.hasSelection = selection !== null && (selection.focus.offset - selection.anchor.offset) !== 0;
    payload.formats = describeSelectionFormats(selection);

    if ($isRangeSelection(selection)) {
      const node = getSelectedNode(selection);
      const parent = node.getParent();

      payload.isLink = $isLinkNode(parent) || $isLinkNode(node);
    }

    try {
      const anchorNode = selection.anchor.getNode();
      const element =
        anchorNode.getKey() === "root" ? anchorNode : anchorNode.getTopLevelElementOrThrow();
      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);

      if (elementDOM !== null && $isListNode(element)) {
        const parentList = $getNearestNodeOfType(anchorNode, ListNode);
        const listType = parentList ? parentList.getTag() : element.getTag();
        payload.list = listType;
      } else {
        payload.list = undefined;
      }
    } catch (e) {
      debug("updateToolbar, failed to parse list state", payload);
    }

    try {
      const anchorNode = selection.anchor.getNode();

      const element =
        anchorNode.getKey() === "root" ? anchorNode : anchorNode.getTopLevelElementOrThrow();
      const type = $isHeadingNode(element) ? element.getTag() : element.getType();

      payload.block = type;
    } catch (e) {
      debug("updateToolbar, failed to parse block state", payload);
    }

    dispatch({
      type: "BATCH",
      payload,
    });
  }, [editor]);

  useEffect(() => mergeRegister(
    editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        updateToolbar();
      });
    }),
    editor.registerCommand(
      CLICK_COMMAND, () => {
        const selection = $getSelection();
        const node = getSelectedNode(selection);
        const linkParent = $findMatchingParent(node, $isLinkNode);
        const autoLinkParent = $findMatchingParent(node, $isAutoLinkNode);

        if (linkParent !== null && autoLinkParent === null &&
          $isRangeSelection(selection) && !selection.anchor.offset) {
          showModal((onClose) => (
            <LinkEditor
              onClose={onClose}
            />
          ));
        }

        return false;
      }, LowPriority
    ),
    editor.registerCommand(
      CAN_UNDO_COMMAND,
      (payload) => {
        dispatch({
          type: "CAN_UNDO",
          payload,
        });

        return false;
      },
      LowPriority
    ),
    editor.registerCommand(
      CAN_REDO_COMMAND,
      (payload) => {
        dispatch({
          type: "CAN_REDO",
          payload,
        });

        return false;
      },
      LowPriority
    )
  ), [editor, updateToolbar, showModal]);

  return (
    <div className={styles.toolbar} data-control-id="editor-toolbar">
      {renderToolbarSections(tools, onToolSelect, state)}
      {modal}
    </div>
  );
}

function renderToolbarSections(sectioned, onToolSelect, state) {
  return (<>
    {sectioned.order.map(((sectionKey, index, list) => {
      const section = sectioned.sections[sectionKey];
      const notLast = index !== list.length - 1;

      const { type, tools } = section;

      return (
        <React.Fragment key={type}>
          {tools.map((tool) => (
            <Tool
              key={`${tool.group}-${tool.type}`}
              active={checkIfToolIsActive(tool, state)}
              disabled={checkIfToolIsDisabled(tool, state)}
              {...tool}
              onToolSelect={onToolSelect}
            />
          ))}
          {notLast && <Divider />}
        </React.Fragment>
      );
    }))}
  </>);
}

Toolbar.propTypes = { config: PropTypes.array };
Toolbar.defaultProps = { config: DefaultToolbarConfig };
