import React, { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";


const RenderSwitchContext = createContext(undefined);

function RenderSwitch({ value, children }) {
  return (<RenderSwitchContext.Provider value={value}>{children}</RenderSwitchContext.Provider>);
}

RenderSwitch.propTypes = {
  children: PropTypes.node,
  value: PropTypes.any,
};

RenderSwitch.defaultProps = {
  value: undefined,
  children: undefined,
};

function Case({ value, rule, children }) {
  const contextValue = useContext(RenderSwitchContext);
  const canRender = useMemo(() => rule(contextValue, value), [value, rule, contextValue]);

  if (!canRender) {
    return null;
  }

  return (
    <>
      {typeof children === "function" ? children({ value, contextValue }) : children}
    </>
  );
}

Case.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  rule: PropTypes.func,
  value: PropTypes.any,
};

Case.defaultProps = {
  value: undefined,
  children: undefined,
  rule: (contextValue, ownValue) => (ownValue === contextValue),
};

RenderSwitch.Case = Case;

export { RenderSwitch, Case };

export default RenderSwitch;
