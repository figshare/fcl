import { $getNearestBlockElementAncestorOrThrow } from "@lexical/utils";
import { $createTextNode, $getSelection, $isRangeSelection, $isTextNode, PASTE_COMMAND } from "lexical"; import {
  $isHeadingNode,
  $isQuoteNode,
} from "@lexical/rich-text";
import { $isDecoratorBlockNode } from "@lexical/react/LexicalDecoratorBlockNode";


export default function operation({ tool, editor }) {
  if (tool.type === "pasteWithoutFormat") {
    (async function() {
      const text = await navigator.clipboard.readText();

      const dataTransfer = new DataTransfer();
      dataTransfer.setData("text/plain", text);

      const event = new ClipboardEvent("paste", {
        bubbles: true,
        cancelable: true,
        clipboardData: dataTransfer,
      });

      editor.dispatchCommand(PASTE_COMMAND, event);
    }());
  } else {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const { anchor } = selection;
        const { focus } = selection;
        const nodes = selection.getNodes();

        if (anchor.key === focus.key && anchor.offset === focus.offset) {
          return;
        }

        nodes.forEach((node, idx) => {
          // We split the first and last node by the selection
          // So that we don't format unselected text inside those nodes
          if ($isTextNode(node)) {
            if (idx === 0 && anchor.offset !== 0) {
              node = node.splitText(anchor.offset)[1] || node; //eslint-disable-line
            }
            if (idx === nodes.length - 1) {
              node = node.splitText(focus.offset)[0] || node; //eslint-disable-line
            }

            if (node.__style !== "") {
              node.setStyle("");
            }
            if (node.__format !== 0) {
              node.setFormat(0);
              $getNearestBlockElementAncestorOrThrow(node).setFormat("");
            }
          } else if ($isHeadingNode(node) || $isQuoteNode(node)) {
            node.replace($createTextNode(), true);
          } else if ($isDecoratorBlockNode(node)) {
            node.setFormat("");
          }
        });
      }
    });
  }
}
