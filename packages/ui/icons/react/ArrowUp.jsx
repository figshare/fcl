import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgArrowUp = (props) => (
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
    <g clipPath="url(#clip0_12864_33093)">
      <path
        d="M10.7496 6.5699L12.9105 8.70391C13.3112 9.09956 13.9607 9.09956 14.3614 8.70391L15.4495 7.6293C15.8502 7.23365 15.8502 6.59216 15.4495 6.1965L9.47543 0.296743C9.07478 -0.0989142 8.42522 -0.0989142 8.02457 0.296743L2.05048 6.1965C1.64984 6.59216 1.64984 7.23365 2.05048 7.62931L3.13862 8.70391C3.53926 9.09956 4.18883 9.09956 4.58947 8.70391L6.74963 6.57063L6.74963 17C6.74963 17.5523 7.19733 18 7.7496 18L9.74966 18C10.3019 18 10.7496 17.5523 10.7496 17L10.7496 6.5699Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33093">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgArrowUp.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgArrowUp.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgArrowUp.displayName = "SvgArrowUp";
const Memo = memo(SvgArrowUp);
export default Memo;
