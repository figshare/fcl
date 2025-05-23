import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgCaretLargeDown = (props) => (
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
      d="M3.33219 5.625L14.6678 5.625C15.5668 5.625 16.0724 6.65881 15.5203 7.36817L10.4101 13.9347C9.69364 14.8553 8.30176 14.8551 7.58566 13.9342L2.47942 7.36786C1.92774 6.65844 2.4334 5.625 3.33219 5.625Z"
      fill={props.color}
    />
  </svg>
);
SvgCaretLargeDown.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgCaretLargeDown.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgCaretLargeDown.displayName = "SvgCaretLargeDown";
const Memo = memo(SvgCaretLargeDown);
export default Memo;
