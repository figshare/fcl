import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgCaretRight = (props) => (
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
      d="M6.75 12.306V5.69398C6.75 4.72444 7.84681 4.16056 8.63626 4.72423L12.8452 7.72949C13.7184 8.35297 13.7182 9.64993 12.8448 10.2731L8.63591 13.276C7.84642 13.8393 6.75 13.2754 6.75 12.306Z"
      fill={props.color}
    />
  </svg>
);
SvgCaretRight.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgCaretRight.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgCaretRight.displayName = "SvgCaretRight";
const Memo = memo(SvgCaretRight);
export default Memo;
