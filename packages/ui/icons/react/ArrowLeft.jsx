import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgArrowLeft = (props) => (
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
    <g clipPath="url(#clip0_12864_33092)">
      <path
        d="M6.5699 10.7496L8.70391 12.9105C9.09956 13.3112 9.09956 13.9607 8.70391 14.3614L7.6293 15.4495C7.23365 15.8502 6.59216 15.8502 6.1965 15.4495L0.296743 9.47543C-0.0989143 9.07478 -0.0989143 8.42522 0.296743 8.02457L6.1965 2.05048C6.59216 1.64984 7.23365 1.64984 7.6293 2.05048L8.70391 3.13862C9.09956 3.53926 9.09956 4.18883 8.70391 4.58947L6.57063 6.74963H17C17.5523 6.74963 18 7.19733 18 7.7496V9.74966C18 10.3019 17.5523 10.7496 17 10.7496H6.5699Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33092">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgArrowLeft.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgArrowLeft.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgArrowLeft.displayName = "SvgArrowLeft";
const Memo = memo(SvgArrowLeft);
export default Memo;
