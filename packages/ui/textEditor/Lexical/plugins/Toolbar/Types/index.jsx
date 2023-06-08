import React from "react";
import classnames from "classnames";

import { getToolbarMainSections } from "../../../utils";
import icons from "../../../../../icons/editor";

import styles from "./Types.css"; // eslint-disable-line css-modules/no-unused-class


export const renderTypes = (config, toolbarStyles = {}, section, activeType, onClick) => {
  const ToolbarSections = getToolbarMainSections(config);

  const setWrapperClass = (type) => classnames(toolbarStyles.toolbarItem,
    toolbarStyles.spaced, { [toolbarStyles.active]: activeType === type });

  const selectedToolbarSection = ToolbarSections[section];

  return selectedToolbarSection?.types.map((type) => {
    const name = type.charAt(0).toUpperCase() + type.slice(1);
    const Icon = icons[name];

    if (!Icon) {
      return "";
    }

    return (<div key={type}>
      <button
        aria-label={selectedToolbarSection.names[activeType]}
        className={setWrapperClass(type)}
        onClick={onClick(type)}
      >
        <Icon className={styles.icon} />
      </button>
    </div>);

  });
};

