import React from "react";
import classnames from "classnames";

import { getToolbarMainSections } from "../../../utils";
import icons from "../../../../../icons/editor";

import styles from "./Types.css"; // eslint-disable-line css-modules/no-unused-class


export const renderTypes = (config, toolbarStyles = {}, section, selection, onClick) => {
  const ToolbarSections = getToolbarMainSections(config);
  const selectedToolbarSection = ToolbarSections[section];

  return selectedToolbarSection?.types.map((type) => {
    const name = type.charAt(0).toUpperCase() + type.slice(1);
    const Icon = icons[name];

    if (!Icon) {
      return "";
    }

    const handleClick = () => {
      onClick(type);
    };

    const classNames = classnames(toolbarStyles.toolbarItem,
      toolbarStyles.spaced, { [toolbarStyles.active]: selection?.hasFormat(type) });

    return (<div key={type}>
      <button
        aria-label={selectedToolbarSection.names[type]}
        className={classNames}
        data-control-group={"editor-toolbar-button"}
        onClick={handleClick}
      >
        <Icon className={styles.icon} />
      </button>
    </div>);
  });
};

