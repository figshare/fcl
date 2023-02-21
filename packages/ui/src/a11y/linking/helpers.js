import isFunction from "@figshare/ui/helpers/utils/isFunction";


export const computeDynamicDefault = (props, state, key, defaultValue) => {
  const stateVal = state[key];
  const propsVal = props[key];

  let nextValue = propsVal || stateVal;
  if (nextValue === undefined) {
    nextValue = isFunction(defaultValue) ? defaultValue() : defaultValue;
  }

  if (stateVal === nextValue) {
    return null;
  }

  return { [key]: nextValue };
};
