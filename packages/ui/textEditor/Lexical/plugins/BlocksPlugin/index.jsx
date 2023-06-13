import { useCallback, useEffect, useState } from "react";
import {
  $isRangeSelection,
  $createParagraphNode,
  $getSelection,
} from "lexical";
import { $wrapNodes } from "@lexical/selection";
import {
  $isListNode,
  ListNode,
} from "@lexical/list";
import { $getNearestNodeOfType } from "@lexical/utils";
import {
  $createHeadingNode,
  $isHeadingNode,
} from "@lexical/rich-text";

import { ToolbarItemType } from "../../constants";
import { renderTypes } from "../Toolbar/Types";


export const BlocksPlugin = (props) => {
  const { config, editor, styles, editorSelection } = props;
  const [blockType, setBlockType] = useState("paragraph");

  useEffect(() => {
    editor.update(() => {
      if ($isRangeSelection(editorSelection)) {
        const anchorNode = editorSelection.anchor.getNode();

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
      }
    });
  }, [editorSelection]);

  const onClick = useCallback((type) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        if (type === blockType || type === "paragraph") {
          $wrapNodes(selection, () => $createParagraphNode());
        } else {
          $wrapNodes(selection, () => $createHeadingNode(type));
        }
      }

      setBlockType(type);
    });
  }, [blockType, editor, setBlockType]);

  const selectionFn = { hasFormat: (type) => type === blockType };

  return renderTypes(config, styles, ToolbarItemType.Block, selectionFn, onClick);
};
