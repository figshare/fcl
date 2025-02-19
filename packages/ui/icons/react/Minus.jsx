import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgMinus = (props) => (
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
      d="M0.75 7.3125C0.335786 7.3125 0 7.64829 0 8.0625V9.5625C0 9.97671 0.335787 10.3125 0.75 10.3125C10.8388 10.3125 7.99512 10.3125 17.25 10.3125C17.6642 10.3125 18 9.97672 18 9.5625V8.0625C18 7.64829 17.6642 7.3125 17.25 7.3125C7.91072 7.3125 10.9273 7.3125 0.75 7.3125Z"
      fill={props.color}
    />
  </svg>
);
SvgMinus.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgMinus.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgMinus.displayName = "SvgMinus";
const Memo = memo(SvgMinus);
export default Memo;
