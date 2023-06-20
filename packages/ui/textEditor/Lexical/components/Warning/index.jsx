import React from "react";
import { number } from "prop-types";

import { DEFAULT_MAX_TEXT_LENGTH, DEFAULT_MIN_TEXT_LENGTH } from "../../index";

import styles from "./Warning.css";


export const Warning = ({ contentLength, minLength, maxLength }) => {
  if (contentLength < minLength) {
    return null;
  }

  return (
    <div className={styles.editorTextLength}>
      <span>{`${contentLength} out of a total of ${maxLength} characters (includes html tags)`}</span>
    </div>
  );
};

Warning.propTypes = { contentLength: number, maxLength: number, minLength: number };
Warning.defaultProps = {
  contentLength: 0,
  minLength: DEFAULT_MIN_TEXT_LENGTH,
  maxLength: DEFAULT_MAX_TEXT_LENGTH,
};
