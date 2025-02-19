import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgCaretLargeRight = (props) => (
  <svg
    fill={props.color}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    width={props.width ?? props.inline ? "1em" : "100%"}
    focusable={false}
    aria-hidden={true}
    role="img"
    alt={props.title}
    {...props}
  >
    <path
      d="M5.625 14.6678V3.33219C5.625 2.43322 6.65881 1.92762 7.36817 2.47966L13.9347 7.58992C14.8553 8.30636 14.8551 9.69824 13.9342 10.4143L7.36786 15.5206C6.65844 16.0723 5.625 15.5666 5.625 14.6678Z"
      fill={props.color}
    />
  </svg>
);
SvgCaretLargeRight.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgCaretLargeRight.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgCaretLargeRight.displayName = "SvgCaretLargeRight";
const Memo = memo(SvgCaretLargeRight);
export default Memo;
