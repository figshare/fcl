import React from "react";
import classnames from "classnames";

import icons from "../../../../../icons/editor";

import styles from "./Types.css";


const ToolbarSections = {
  block: {
    types: [
      "h2",
      "h3",
      "h4",
      "paragraph",
    ],
    names: {
      h2: "H2",
      h3: "H3",
      h4: "H4",
      paragraph: "P",
    },
  },
  list: {
    types: [
      "ul",
      "ol",
    ],
    names: {
      ul: "Unordered List",
      ol: "Ordered List",
    },
  },
  script: {
    types: [
      "subscript",
      "superscript",
    ],
    names: {
      subscript: "Subscript",
      superscript: "Superscript",
    },
  },
  history: {
    types: [
      "undo",
      "redo",
    ],
    names: {
      undo: "Undo",
      redo: "Redo",
    },
  },
  format: {
    types: [
      "clearFormatting",
      "pasteWithoutFormat",
    ],
    names: {
      clearFormatting: "Clear Formatting",
      pasteWithoutFormat: "Paste Without Format",
    },
  },
};


export const renderTypes = (toolbarStyles = {}, section, activeType, onClick) => {
  const setWrapperClass = (type) => classnames(toolbarStyles.toolbarItem,
    toolbarStyles.spaced, { [toolbarStyles.active]: activeType === type });

  const selectedToolbarSection = ToolbarSections[section];

  return selectedToolbarSection?.types.map((type) => {
    const name = type.charAt(0).toUpperCase() + type.slice(1);
    const Icon = icons[name];

    if (!Icon) {
      return "";
    }

    return (<div key={type} className={styles.toolbarButtonContainer} >
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

