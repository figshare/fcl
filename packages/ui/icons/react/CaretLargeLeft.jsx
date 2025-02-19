import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgCaretLargeLeft = (props) => (
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
      d="M12.375 14.6678V3.33219C12.375 2.43322 11.3412 1.92762 10.6318 2.47966L4.06529 7.58992C3.14469 8.30636 3.14495 9.69824 4.06581 10.4143L10.6321 15.5206C11.3416 16.0723 12.375 15.5666 12.375 14.6678Z"
      fill={props.color}
    />
  </svg>
);
SvgCaretLargeLeft.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgCaretLargeLeft.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgCaretLargeLeft.displayName = "SvgCaretLargeLeft";
const Memo = memo(SvgCaretLargeLeft);
export default Memo;
