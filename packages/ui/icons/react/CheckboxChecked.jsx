import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgCheckboxChecked = (props) => (
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
    <g clipPath="url(#clip0_12864_33465)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 3C0 1.34315 1.34315 0 3 0H15C16.6569 0 18 1.34315 18 3V15C18 16.6569 16.6569 18 15 18H3C1.34315 18 0 16.6569 0 15V3ZM7.15785 9.6L4.21052 6.66669L2 8.86669L7.15785 14L16 5.2L13.7896 3L7.15785 9.6Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33465">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgCheckboxChecked.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgCheckboxChecked.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgCheckboxChecked.displayName = "SvgCheckboxChecked";
const Memo = memo(SvgCheckboxChecked);
export default Memo;
