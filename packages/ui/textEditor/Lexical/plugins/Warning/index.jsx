import React from "react";
import { node, number } from "prop-types";

import styles from "./Warning.css";


export const WarningPlugin = ({ contentLength, minLength, maxLength }) => {
  if (contentLength < minLength) {
    return null;
  }

  return (
    <div className={styles.editorTextLength}>
      <span className={styles.textNumber}>{contentLength}</span>
      <span>{`out of a total of ${maxLength} characters (includes html tags)`}</span>
    </div>
  );
};

WarningPlugin.propTypes = { contentLength: number, maxLength: number, minLength: number };
WarningPlugin.defaultProps = { contentLength: 0, minLength: 0, maxLength: 10000 };
