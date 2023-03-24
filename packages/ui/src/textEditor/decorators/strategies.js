function findEntities(contentBlock, callback, contentState, entity) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();

      return entityKey !== null && contentState.getEntity(entityKey).getType() === entity;
    },
    callback
  );
}

function findSubEntities(contentBlock, callback, contentState) {
  findEntities(contentBlock, callback, contentState, "SUB");
}

function findSupEntities(contentBlock, callback, contentState) {
  findEntities(contentBlock, callback, contentState, "SUP");
}

function findLinkEntities(contentBlock, callback, contentState) {
  findEntities(contentBlock, callback, contentState, "LINK");
}

function findLinkSubEntities(contentBlock, callback, contentState) {
  findEntities(contentBlock, callback, contentState, "LINKSUB");
}

function findLinkSupEntities(contentBlock, callback, contentState) {
  findEntities(contentBlock, callback, contentState, "LINKSUP");
}


export default { findLinkEntities, findSubEntities, findSupEntities, findLinkSubEntities, findLinkSupEntities };
