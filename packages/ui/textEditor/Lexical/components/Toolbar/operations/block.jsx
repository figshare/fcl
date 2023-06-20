import { $getSelection, $isRangeSelection, $createParagraphNode } from "lexical";
import { $wrapNodes } from "@lexical/selection";
import { $createHeadingNode } from "@lexical/rich-text";


export default function operation({ tool, editor }) {
  const { type } = tool;

  editor.update(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      if (type === "paragraph") {
        $wrapNodes(selection, () => $createParagraphNode(type));
      } else {
        $wrapNodes(selection, () => $createHeadingNode(type));
      }
    }
  });
}
