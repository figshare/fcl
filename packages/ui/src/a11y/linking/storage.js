const transformAttributeToList = (attr) => {
  if (Array.isArray(attr)) {
    return attr;
  }

  return [attr];
};


const add = (data, identifier, attributes, id) => {
  const attrList = transformAttributeToList(attributes);

  const changes = attrList.reduce((result, attr) => {
    if (attr in result) {
      return Object.assign(result, { [attr]: [...result[attr], id] });
    }

    return Object.assign(result, { [attr]: [id] });
  }, { ...data[identifier] });

  return { ...data, [identifier]: changes };
};


const remove = (data, identifier, id) => {
  const mapping = data[identifier] || {};

  const changes = Object.entries(mapping).reduce((result, [attrName, attrList]) => {
    const idExistsInList = attrList.some((val) => val === id);
    if (!idExistsInList) {
      return Object.assign(result, { [attrName]: attrList });
    }

    const nextList = attrList.filter((listId) => listId !== id);
    if (!nextList.length) {
      return result;
    }

    return Object.assign(result, { [attrName]: nextList });
  }, {});

  if (!Object.keys(changes).length) {
    const nextData = { ...data };
    delete nextData[identifier];

    return nextData;
  }

  return { ...data, [identifier]: changes };
};


const update = (data, prev, next) => {
  const prevAttributes = transformAttributeToList(prev.attributes);
  const nextAttributes = transformAttributeToList(next.attributes);
  const sameAttributes = (
    prevAttributes.every((val) => nextAttributes.includes(val)) &&
    nextAttributes.every((val) => prevAttributes.includes(val))
  );

  if (prev.id === next.id && prev.identifier === next.identifier && sameAttributes) {
    return data;
  }

  let nextData = data;
  nextData = remove(nextData, prev.identifier, prev.id);
  nextData = add(nextData, next.identifier, next.attributes, next.id);

  return nextData;
};


const getAttributeValue = (data, identifier, attribute) => {
  const mapping = data[identifier] || {};
  if (!(attribute in mapping)) {
    return undefined;
  }

  return mapping[attribute].join(" ");
};


const getPropsForAttributes = (data, identifier, attributes) => {
  const attrList = transformAttributeToList(attributes);

  return attrList.reduce((result, attr) => {
    const value = getAttributeValue(data, identifier, attr);
    if (!value) {
      return result;
    }

    return { ...result, [attr]: value };
  }, {});
};


export const mutations = { add, update, remove };
export const reading = { getPropsForAttributes, getAttributeValue };
