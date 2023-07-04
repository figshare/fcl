/* eslint-disable new-cap, camelcase */
import { $getSelection, $isRangeSelection, $createParagraphNode, DEPRECATED_$isGridSelection } from "lexical";
import { $setBlocksType } from "@lexical/selection";
import { $createHeadingNode } from "@lexical/rich-text";


export default function operation({ tool, editor }) {
  const { type } = tool;

  editor.update(() => {
    const selection = $getSelection();
    if (
      $isRangeSelection(selection) ||
      DEPRECATED_$isGridSelection(selection)
    ) {
      if (type === "paragraph") {
        $setBlocksType(selection, () => $createParagraphNode());
      } else {
        $setBlocksType(selection, () => $createHeadingNode(type));
      }
    }
  });
}
