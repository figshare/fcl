import { EditorState, Modifier } from "draft-js";

import { DraftEntity } from "./constants";
import { getSelectedBlock } from "./selectionUtils";


const SUP_TAG = "</sup>";
const SUB_TAG = "</sub>";

export const findEntityURL = (editorState) => {
  const startKey = editorState.getSelection().getStartKey();
  const startOffset = editorState.getSelection().getStartOffset();
  const contentState = editorState.getCurrentContent();
  const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
  const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);
  let url = "";
  if (linkKey) {
    const linkInstance = contentState.getEntity(linkKey);
    url = linkInstance?.getData()?.url;
  }

  return url;
};

export const getEntityForLink = (string, element) => {
  const startIndex = string.indexOf(element);
  const endIndex = startIndex + element.length;
  const nextElement = string.substring(endIndex, endIndex + SUP_TAG.length);

  if (nextElement === SUP_TAG) {
    return DraftEntity.LINKSUP;
  }

  if (nextElement === SUB_TAG) {
    return DraftEntity.LINKSUB;
  }

  return DraftEntity.LINK;
};

export const getSelectionEntity = (editorState) => {
  let entity = null;
  const selection = editorState.getSelection();
  let start = selection.getStartOffset();
  let end = selection.getEndOffset();
  if (start === end && start === 0) {
    end = 1;
  } else if (start === end) {
    start -= 1;
  }
  const block = getSelectedBlock(editorState);

  for (let i = start; i < end; i += 1) {
    const currentEntity = block.getEntityAt(i);
    if (!currentEntity) {
      entity = undefined;
      break;
    }
    if (i === start) {
      entity = currentEntity;
    } else if (entity !== currentEntity) {
      entity = undefined;
      break;
    }
  }

  return entity;
};

const getLinkData = (editorState) => {
  const contentState = editorState.getCurrentContent();
  const selectionKey = getSelectionEntity(editorState);

  if (!selectionKey) {
    return {};
  }

  return contentState.getEntity(`${selectionKey}`).getData();
};

/* istanbul ignore next */
const getEntityToApply = (currentEntity, entityToApply) => {
  if (currentEntity === DraftEntity.LINK && entityToApply) {
    return `${DraftEntity.LINK}${entityToApply}`;
  }

  // If current entity is a composed entity
  // And we want to change to disable sub/sup
  if ([DraftEntity.LINKSUB, DraftEntity.LINKSUP].includes(currentEntity)) {
    return DraftEntity.LINK;
  }

  // IF we already have sub/sup applied - remove it
  if (
    (currentEntity === DraftEntity.SUB && entityToApply === DraftEntity.SUB) ||
    (currentEntity === DraftEntity.SUP && entityToApply === DraftEntity.SUP)
  ) {
    return DraftEntity.UNSTYLED;
  }

  return entityToApply;
};

export const toggleEntityOnSelection = (editorState, entity, currentEntity) => {
  const contentState = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  const entityToApply = getEntityToApply(currentEntity, entity);

  const contentStateWithEntity = contentState.createEntity(
    entityToApply,
    "MUTABLE",
    getLinkData(editorState)
  );
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

  const newContentState = Modifier.applyEntity(
    contentStateWithEntity,
    selection,
    entityKey
  );

  return EditorState.set(editorState, { currentContent: newContentState });
};

export const findEntityType = (editorState) => {
  const contentState = editorState.getCurrentContent();
  const selectionKey = getSelectionEntity(editorState);
  let entityType = null;
  if (selectionKey) {
    entityType = contentState.getEntity(`${selectionKey}`).type;
  }

  return entityType;
};

/* istanbul ignore next */
export const applyEntity = (editorState, entity, currentEntity) => {
  const contentState = editorState.getCurrentContent();
  const selection = editorState.getSelection();
  const entityToApply = getEntityToApply(currentEntity, entity);

  // Create the Content State with the toggled Entity
  const contentStateWithEntity = contentState.createEntity(
    entityToApply,
    "MUTABLE",
    getLinkData(editorState)
  );

  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

  const textWithEntity = Modifier.insertText(
    contentState,
    selection,
    String.fromCodePoint(parseInt("0", 16)),
    null,
    entityKey
  );

  return EditorState.push(editorState, textWithEntity, "insert-characters");
};

/* istanbul ignore next */
export const removeEntity = (editorState, decorator) => {
  const contentState = editorState.getCurrentContent();
  const selection = editorState.getSelection();

  const currentFocusIndex = editorState.getSelection().getFocusOffset();

  // Remove entity for next chunk of text
  const textWithoutEntity = Modifier.insertText(
    contentState,
    selection,
    String.fromCodePoint(parseInt("0", 16)),
    null,
    null
  );
  const newEditorState = EditorState.createWithContent(
    textWithoutEntity,
    decorator
  );

  // Move the focus to the next element (to get out of the previous entity)
  const nextOffSet = currentFocusIndex + 1;
  const newSelection = selection.merge({
    focusOffset: nextOffSet,
    anchorOffset: nextOffSet,
  });

  return EditorState.acceptSelection(newEditorState, newSelection);
};
