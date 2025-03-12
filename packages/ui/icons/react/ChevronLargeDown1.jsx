import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgChevronLargeDown1 = (props) => (
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
    <g clipPath="url(#clip0_12864_33086)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 9.8656L14.8376 3.7002C15.2481 3.2666 15.9248 3.2666 16.3354 3.7002L17.7028 5.1444C18.0991 5.56295 18.0991 6.23068 17.7028 6.64924L9.74891 15.0498C9.33836 15.4834 8.66164 15.4834 8.25109 15.0498L0.297226 6.64924C-0.0990754 6.23068 -0.0990754 5.56295 0.297226 5.1444L1.66463 3.7002C2.07517 3.2666 2.75189 3.2666 3.16244 3.7002L9 9.8656Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33086">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgChevronLargeDown1.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgChevronLargeDown1.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgChevronLargeDown1.displayName = "SvgChevronLargeDown1";
const Memo = memo(SvgChevronLargeDown1);
export default Memo;
