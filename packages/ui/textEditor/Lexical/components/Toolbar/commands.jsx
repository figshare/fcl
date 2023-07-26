import React from "react";
import {
  $getSelection,
  $isRangeSelection,
} from "lexical";
import { $findMatchingParent } from "@lexical/utils";
import { $isLinkNode, $isAutoLinkNode } from "@lexical/link";

import { getSelectedNode } from "../../utils";
import { LinkEditor } from "../LinkEditor/LinkEditor";
import { createPasteEventWithData, parsePastedLexicalContent } from "../../../utils/parsingUtils";


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

export function definePasteCommand(event) {
  const pastedText = event.clipboardData?.getData("text/html");
  let processedText = pastedText;

  if (pastedText?.includes("&lt;")) {
    const doc = new DOMParser().parseFromString(pastedText, "text/html");
    processedText = doc.body.textContent;
  }

  if (pastedText?.includes("text-decoration:underline line-through;")) {
    processedText = parsePastedLexicalContent(processedText);
  }

  if (processedText !== pastedText) {
    return createPasteEventWithData(processedText);
  }

  return false;
}
