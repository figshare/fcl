import React from "react";
import {
  $getSelection,
  $isRangeSelection,
} from "lexical";
import { $findMatchingParent } from "@lexical/utils";
import { $isLinkNode, $isAutoLinkNode } from "@lexical/link";

import { getSelectedNode } from "../../utils";
import { LinkEditor } from "../LinkEditor/LinkEditor";


export function defineClickCommandListener({ showModal }) {
  return function listener() {
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
  };
}

export function defineUndoRedoCommandListeners({ dispatch, type }) {
  return function listener(payload) {
    dispatch({
      type,
      payload,
    });

    return false;
  };
}
