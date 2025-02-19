import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgCaretLeft = (props) => (
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
      d="M11.25 5.69398L11.25 12.306C11.25 13.2756 10.1532 13.8394 9.36374 13.2758L5.15477 10.2705C4.28155 9.64703 4.28178 8.35007 5.15522 7.72689L9.36409 4.72399C10.1536 4.16071 11.25 4.72464 11.25 5.69398Z"
      fill={props.color}
    />
  </svg>
);
SvgCaretLeft.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgCaretLeft.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgCaretLeft.displayName = "SvgCaretLeft";
const Memo = memo(SvgCaretLeft);
export default Memo;
