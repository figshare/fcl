import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgPlay = (props) => (
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
    <g clipPath="url(#clip0_12864_33453)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.375 0.989804C3.375 1.82092 3.375 16.4109 3.375 16.9846C3.375 17.7282 4.16989 18.2818 4.95607 17.8462C5.58622 17.498 14.0695 10.7162 14.9481 9.865C15.52 9.3107 15.5146 8.6838 14.9481 8.1321C14.3153 7.51621 5.83868 0.624164 4.92326 0.133403C4.2536 -0.22705 3.375 0.171005 3.375 0.989804Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33453">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgPlay.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgPlay.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgPlay.displayName = "SvgPlay";
const Memo = memo(SvgPlay);
export default Memo;
