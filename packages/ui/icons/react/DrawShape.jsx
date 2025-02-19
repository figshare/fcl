import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgDrawShape = (props) => (
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
    <g clipPath="url(#clip0_19990_3782)">
      <path
        d="M14.5 2.6875C14.8094 2.6875 15.0625 2.94062 15.0625 3.25V14.5C15.0625 14.8094 14.8094 15.0625 14.5 15.0625H3.25C2.94062 15.0625 2.6875 14.8094 2.6875 14.5V3.25C2.6875 2.94062 2.94062 2.6875 3.25 2.6875H14.5ZM3.25 1C2.00898 1 1 2.00898 1 3.25V14.5C1 15.741 2.00898 16.75 3.25 16.75H14.5C15.741 16.75 16.75 15.741 16.75 14.5V3.25C16.75 2.00898 15.741 1 14.5 1H3.25Z"
        fill={props.color}
      />
      <path
        d="M0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2Z"
        fill={props.color}
      />
      <path
        d="M0 16C0 14.8954 0.895431 14 2 14C3.10457 14 4 14.8954 4 16C4 17.1046 3.10457 18 2 18C0.895431 18 0 17.1046 0 16Z"
        fill={props.color}
      />
      <path
        d="M14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16Z"
        fill={props.color}
      />
      <path
        d="M14 2C14 0.895431 14.8954 0 16 0C17.1046 0 18 0.895431 18 2C18 3.10457 17.1046 4 16 4C14.8954 4 14 3.10457 14 2Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_19990_3782">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgDrawShape.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgDrawShape.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgDrawShape.displayName = "SvgDrawShape";
const Memo = memo(SvgDrawShape);
export default Memo;
