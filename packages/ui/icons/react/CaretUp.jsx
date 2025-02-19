import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgCaretUp = (props) => (
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
      d="M12.306 11.25L5.69398 11.25C4.72444 11.25 4.16056 10.1532 4.72423 9.36374L7.72949 5.15477C8.35297 4.28155 9.64993 4.28178 10.2731 5.15522L13.276 9.36409C13.8393 10.1536 13.2754 11.25 12.306 11.25Z"
      fill={props.color}
    />
  </svg>
);
SvgCaretUp.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgCaretUp.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgCaretUp.displayName = "SvgCaretUp";
const Memo = memo(SvgCaretUp);
export default Memo;
