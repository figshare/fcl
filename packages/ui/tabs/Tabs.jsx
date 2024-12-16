import React, { useMemo, useContext, createContext, useCallback } from "react";
import { any, bool, func, string, number, node, oneOfType } from "prop-types";
import classnames from "classnames";
import RenderSwitch from "@figshare/fcl/renderSwitch";
import { useControllableState } from "@figshare/fcl/helpers/useControllableState";

import styles from "./Tabs.css";


export const TabsContext = createContext({});

TabsContext.displayName = "TabsContext";

export function Tabs({ children, value, defaultValue, onChange }) {
  const [tab, setTab] = useControllableState({ value, defaultValue, onChange });

  const onTabClick = useCallback((e) => {
    setTab(e.target.getAttribute("data-value"));
  }, [setTab]);

  const context = useMemo(() => {
    return { tab, setTab, onTabClick };
  }, [tab, setTab]);

  return <TabsContext.Provider value={context}>{children}</TabsContext.Provider>;
}

Tabs.propTypes = {
  children: node.isRequired,
  defaultValue: oneOfType([string, number]),
  value: oneOfType([string, number]),
  onChange: func,
};

Tabs.defaultProps = {
  value: undefined,
  defaultValue: undefined,
  onChange: undefined,
};


export function TabsList({ children, className, ...rest }) {
  return (
    <div
      aria-orientation="horizontal"
      className={classnames(styles.tabs, className)}
      data-id="tabs"
      data-part="tab-list"
      data-scope="tabs"
      role="tablist"
      {...rest}
    >
      {children}
    </div>
  );
}

TabsList.propTypes = {
  children: node,
  className: string,
};

TabsList.defaultProps = {
  className: undefined,
  children: undefined,
};

export function Tab({ value, active, disabled, children, className, ...rest }) {
  const { tab, onTabClick } = useContext(TabsContext);
  const isActive = onTabClick ? tab === value : active;

  return (
    <button
      key={value}
      aria-disabled={disabled}
      aria-selected={active}
      className={classnames(styles.tab, className)}
      data-active={isActive}
      data-part="tab"
      data-scope="tabs"
      data-value={value}
      disabled={disabled}
      id={`tab-${value}`}
      role="tab"
      onClick={onTabClick}
      {...rest}
    >
      {children}
    </button>
  );
}

Tab.propTypes = {
  children: node.isRequired,
  value: oneOfType([string, number]).isRequired,
  active: bool,
  className: string,
  disabled: bool,
};

Tab.defaultProps = {
  active: false,
  className: undefined,
  disabled: false,
};


export function TabsPanel({ value, children, ...rest }) {
  const { tab, setTab } = useContext(TabsContext);
  const activeValue = setTab ? tab : value;

  return (
    <div
      aria-labelledby={`tab-${activeValue}`}
      data-id="tabs-panel"
      data-part="content"
      data-scope="tabs"
      data-value={activeValue}
      role="tabpanel"
      {...rest}
    >
      <RenderSwitch value={activeValue}>{children}</RenderSwitch>
    </div>
  );
}

TabsPanel.propTypes = { children: any.isRequired, value: oneOfType([string, number]) };
TabsPanel.defaultProps = { value: undefined };


export function TabEntry({ value, children }) {
  return (
    <RenderSwitch.Case value={value}>{children}</RenderSwitch.Case>
  );
}

TabEntry.propTypes = { children: oneOfType([node, func]).isRequired, value: oneOfType([string, number]).isRequired };

Tabs.List = TabsList;
Tabs.Tab = Tab;
Tabs.Panel = TabsPanel;
Tabs.Content = TabsPanel;
Tabs.Entry = TabEntry;


export default Tabs;
