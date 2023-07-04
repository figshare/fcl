import { $getSelection, $isRangeSelection, $isTextNode, PASTE_COMMAND } from "lexical";


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
  }

  if (tool.type === "clearFormatting") {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const { anchor } = selection;
        const { focus } = selection;
        const nodes = selection.getNodes();

        if (anchor.key === focus.key && anchor.offset === focus.offset) {
          return;
        }

        nodes.forEach((node) => {
          if ($isTextNode(node)) {
            ["bold", "italic", "strikethrough", "underline"].forEach((formatStr) => {
              if (node.hasFormat(formatStr)) {
                node.toggleFormat(formatStr);
              }
            });
          }
        });
      }
    });
  }
}
