/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { $isAtNodeEnd } from "@lexical/selection";


export function getSelectedNode(selection) {
  const { anchor, focus } = selection;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  const isBackward = selection.isBackward();
  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  }

  return $isAtNodeEnd(anchor) ? anchorNode : focusNode;
}

export function sanitizeUrl(str) {
  return str.replace(/data:/gi, "").replace(/javascript:/gi, "");
}
