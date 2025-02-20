import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgCaretDown = (props) => (
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
      d="M5.69398 6.75L12.306 6.75C13.2756 6.75 13.8394 7.84681 13.2758 8.63626L10.2705 12.8452C9.64703 13.7184 8.35007 13.7182 7.72689 12.8448L4.72399 8.63591C4.16071 7.84642 4.72464 6.75 5.69398 6.75Z"
      fill={props.color}
    />
  </svg>
);
SvgCaretDown.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgCaretDown.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgCaretDown.displayName = "SvgCaretDown";
const Memo = memo(SvgCaretDown);
export default Memo;
