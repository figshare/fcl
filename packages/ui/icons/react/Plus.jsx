import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgPlus = (props) => (
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
    <g clipPath="url(#clip0_12864_33096)">
      <path
        d="M8.25 0C7.83579 0 7.5 0.335787 7.5 0.75V7.5H0.75C0.335786 7.5 0 7.83579 0 8.25V9.75C0 10.1642 0.335787 10.5 0.75 10.5H7.5V17.25C7.5 17.6642 7.83579 18 8.25 18H9.75C10.1642 18 10.5 17.6642 10.5 17.25V10.5H17.25C17.6642 10.5 18 10.1642 18 9.75V8.25C18 7.83579 17.6642 7.5 17.25 7.5H10.5V0.75C10.5 0.335786 10.1642 0 9.75 0H8.25Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33096">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgPlus.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgPlus.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgPlus.displayName = "SvgPlus";
const Memo = memo(SvgPlus);
export default Memo;
