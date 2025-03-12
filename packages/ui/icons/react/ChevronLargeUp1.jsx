import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgChevronLargeUp1 = (props) => (
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
    <g clipPath="url(#clip0_12864_33088)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 8.1344L14.8376 14.2998C15.2481 14.7334 15.9248 14.7334 16.3354 14.2998L17.7028 12.8556C18.0991 12.437 18.0991 11.7693 17.7028 11.3508L9.74891 2.9502C9.33836 2.5166 8.66164 2.5166 8.25109 2.9502L0.297226 11.3508C-0.0990754 11.7693 -0.0990754 12.437 0.297226 12.8556L1.66463 14.2998C2.07517 14.7334 2.75189 14.7334 3.16244 14.2998L9 8.1344Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33088">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgChevronLargeUp1.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgChevronLargeUp1.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgChevronLargeUp1.displayName = "SvgChevronLargeUp1";
const Memo = memo(SvgChevronLargeUp1);
export default Memo;
