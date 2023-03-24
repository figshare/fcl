import { EditorState, Modifier, SelectionState, BlockMapBuilder, convertFromHTML } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { stateFromHTML } from "draft-js-import-html";

import { DraftEntity } from "./constants";
import { getEntityForLink } from "./entityUtils";
import { moveSelectionToEnd } from "./selectionUtils";


export const STRIKE_THROUGH_UNDERLINE = "text-decoration:underline line-through;";

export const onConvertDraftToHTML = (editorState) => {
  const options = {
    entityStyleFn: (entity) => {
      const entityType = entity.get("type").toLowerCase();
      let entityConversionData = {};
      const data = entity.getData();
      switch (entityType) {
        case "link":
          entityConversionData = {
            element: "a",
            attributes: {
              href: data.url,
              target: "_blank",
            },
          };
          break;
        case "sub":
          entityConversionData = { element: "sub" };
          break;
        case "sup":
          entityConversionData = { element: "sup" };
          break;
        case "linksub":
          entityConversionData = {
            element: "sub a",
            attributes: {
              href: data.url,
              target: "_blank",
            },
          };
          break;
        case "linksup":
          entityConversionData = {
            element: "sup a",
            attributes: {
              href: data.url,
              target: "_blank",
            },
          };
          break;

        default:
          entityConversionData = {};
      }

      return entityConversionData;
    },
  };

  let html = stateToHTML(editorState.getCurrentContent(), options);
  // Sanitize all instances of \x00
  html = html.replace("\x00", "");

  if (html.includes("<sub a")) {
    html = html.replaceAll("<sub a", "<sub><a");
  }
  if (html.includes("</sub a>")) {
    html = html.replaceAll("</sub a>", "</a></sub>");
  }

  if (html.includes("<sup a")) {
    html = html.replaceAll("<sup a", "<sup><a");
  }
  if (html.includes("</sup a>")) {
    html = html.replaceAll("</sup a>", "</a></sup>");
  }

  return html;
};

export const onConvertHTMLtoDraft = (html) => {
  const options = {
    customInlineFn: (element, { Entity: entity }) => {
      if (element.tagName === DraftEntity.SUB) {
        return entity(DraftEntity.SUB);
      }

      if (element.tagName === DraftEntity.SUP) {
        return entity(DraftEntity.SUP);
      }

      if (element.tagName === "A") {
        const entityForLink = getEntityForLink(html, element.outerHTML);

        return entity(entityForLink, { url: element.href });
      }

      return null;
    },
  };

  return stateFromHTML(html, options);
};

// To toggle sub/superscript we insert a special character (\u0000)
// to move the focus seemingsly to the new block
// Some browsers/operating systems do not read that correctly,
// so we remove it before saving it

/* istanbul ignore next */
export const parseBlocksForUnicode = (editorState) => {
  const unicodeInstances = [];
  const blockMap = editorState.getCurrentContent().getBlockMap();

  blockMap.forEach((contentBlock) => {
    const blockKey = contentBlock.getKey();
    const text = contentBlock.getText();
    const start = text.indexOf("\u0000");

    if (start > -1) {
      const blockSelection = SelectionState.createEmpty(blockKey).merge({
        anchorOffset: start,
        focusOffset: start + 1,
      });
      unicodeInstances.push(blockSelection);
    }
  });
  let contentState = editorState.getCurrentContent();
  unicodeInstances.forEach((selectionState) => {
    contentState = Modifier.replaceText(contentState, selectionState, "");
  });

  if (unicodeInstances.length) {
    const selectionInstance = unicodeInstances[0];

    const newEditorState = EditorState.push(editorState, contentState);

    return moveSelectionToEnd(newEditorState, selectionInstance);
  }

  return editorState;
};

/* istanbul ignore next */
export const parsePastedContent = (editorState, html = "") => {
  const contentState = editorState.getCurrentContent();
  const selection = editorState.getSelection();

  // Split html into chunks an  d parse the text decoration
  const parsedHtmlChunk = html.split("</span>").map((chunk) => {
    if (chunk.includes(STRIKE_THROUGH_UNDERLINE)) {
      const parser = new DOMParser();
      const element = parser.parseFromString(chunk, "text/html");
      const text = (element.getElementsByTagName("span") || [])[0].innerText;

      return chunk.
        replace(STRIKE_THROUGH_UNDERLINE, "").
        replace(
          `white-space:pre-wrap;">${text}`,
          `white-space:pre-wrap;"><u><s>${text}</s></u>`
        );
    }

    return chunk;
  });
  const htmlContent = convertFromHTML(parsedHtmlChunk.join("</span>"));
  const htmlContentMap = BlockMapBuilder.createFromArray(
    htmlContent.contentBlocks
  );

  const newContent = Modifier.replaceWithFragment(
    contentState,
    selection,
    htmlContentMap
  );

  return EditorState.push(editorState, newContent, "insert-characters");
};
