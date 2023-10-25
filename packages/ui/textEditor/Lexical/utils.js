import { $isAtNodeEnd } from "@lexical/selection";

import { NodeTypes } from "./constants";


export const stripHtmlTags = (html) => {
  const regexp = /(<([^>]+)>)/gi;

  return html.replace(regexp, "");
};

export const getSelectedNode = (selection) => {
  const { anchor } = selection;
  const { focus } = selection;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  const isBackward = selection.isBackward();
  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  }

  return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
};


const Processors = {
  "no-ltr-root": (markup) => markup,
  "no-paragraph-root": (markup) => markup,
  "no-inner-span": (markup) => markup.replace(/((<span>)|(<span dir="ltr">))/gm, "").replace(/<\/span>/gm, ""),
};

export const applyMarkupProcessors = (markup, processorsToRun) => {
  let newMarkup = markup.slice();

  processorsToRun.forEach((key) => {
    const processor = Processors[key];

    if (processor) {
      newMarkup = processor(newMarkup);
    }
  });

  return newMarkup;
};
export const createBlocksForEditorState = (nodes, original) => {
  let level = 0;
  const blocks = [];

  for (const node of nodes) {
    if (node?.getType?.() === NodeTypes.customText) {
      const block = blocks[level];

      if (Array.isArray(block)) {
        const currentBlockText = block.reduce((acc, current) => {
          acc += current?.__text; //eslint-disable-line

          return acc;
        }, "");

        const currentNodeText = node?.__text;
        const nextNodeText = currentBlockText + currentNodeText;
        const hasCurrentBlockText = original.includes(currentBlockText);
        const hasNextBlockText = original.includes(nextNodeText);

        if (hasCurrentBlockText && hasNextBlockText) {
          block.push(node);
        } else {
          blocks.push([node]);
          level = blocks.length;
        }

      } else {
        blocks.push([node]);
      }
    } else {
      blocks.push(node);
      level = blocks.length;
    }
  }

  return blocks;
};
