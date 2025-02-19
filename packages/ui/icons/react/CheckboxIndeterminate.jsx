import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgCheckboxIndeterminate = (props) => (
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
    <g clipPath="url(#clip0_12864_33433)">
      <path
        d="M4 8.5C4 8.22386 4.22386 8 4.5 8H13.5C13.7761 8 14 8.22386 14 8.5V9.5C14 9.77614 13.7761 10 13.5 10H4.5C4.22386 10 4 9.77614 4 9.5V8.5Z"
        fill={props.color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3C0 1.34315 1.34315 0 3 0H15C16.6569 0 18 1.34315 18 3V15C18 16.6569 16.6569 18 15 18H3C1.34315 18 0 16.6569 0 15V3ZM3 1H15C16.1046 1 17 1.89543 17 3V15C17 16.1046 16.1046 17 15 17H3C1.89543 17 1 16.1046 1 15V3C1 1.89543 1.89543 1 3 1Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33433">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgCheckboxIndeterminate.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgCheckboxIndeterminate.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgCheckboxIndeterminate.displayName = "SvgCheckboxIndeterminate";
const Memo = memo(SvgCheckboxIndeterminate);
export default Memo;
