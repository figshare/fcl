import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgCaretLargeUp = (props) => (
  <svg
    fill={props.color}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    focusable={false}
    aria-hidden={true}
    role="img"
    alt={props.title}
    {...props}
  >
    <path
      d="M14.6678 12.375L3.33219 12.375C2.43322 12.375 1.92762 11.3412 2.47966 10.6318L7.58992 4.06529C8.30636 3.14469 9.69824 3.14494 10.4143 4.06581L15.5206 10.6321C16.0723 11.3416 15.5666 12.375 14.6678 12.375Z"
      fill={props.color}
    />
  </svg>
);
SvgCaretLargeUp.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgCaretLargeUp.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgCaretLargeUp.displayName = "SvgCaretLargeUp";
const Memo = memo(SvgCaretLargeUp);
export default Memo;
