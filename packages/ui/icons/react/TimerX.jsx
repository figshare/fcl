import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgTimerX = (props) => (
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
    <g clipPath="url(#clip0_15012_108806)">
      <path
        d="M11.8975 11.154C11.6922 10.9487 11.3593 10.9487 11.154 11.154C10.9487 11.3593 10.9487 11.6922 11.154 11.8976L13.7565 14.5002L11.1544 17.1024C10.9491 17.3078 10.9491 17.6407 11.1544 17.846C11.3597 18.0513 11.6926 18.0513 11.8979 17.846L14.5 15.2438L17.1021 17.846C17.3074 18.0513 17.6403 18.0513 17.8456 17.846C18.0509 17.6407 18.0509 17.3078 17.8456 17.1024L15.2435 14.5002L17.846 11.8976C18.0513 11.6922 18.0513 11.3593 17.846 11.154C17.6407 10.9487 17.3078 10.9487 17.1025 11.154L14.5 13.7566L11.8975 11.154Z"
        fill={props.color}
      />
      <path
        d="M2.36364 0.590909C2.36364 0.264559 2.6282 0 2.95455 0H8.86364C9.18999 0 9.45455 0.264559 9.45455 0.590909C9.45455 0.917259 9.18999 1.18182 8.86364 1.18182H5.90909H2.95455C2.6282 1.18182 2.36364 0.917259 2.36364 0.590909Z"
        fill={props.color}
      />
      <path
        d="M11.3982 9.28296C11.6692 8.60515 11.8182 7.86543 11.8182 7.09091C11.8182 3.82741 9.17259 1.18182 5.90909 1.18182C2.64559 1.18182 0 3.82741 0 7.09091C0 10.3544 2.64559 13 5.90909 13C7.29758 13 8.57422 12.5211 9.58284 11.7195L8.75398 10.8667C7.96245 11.464 6.97713 11.8182 5.90909 11.8182C3.29829 11.8182 1.18182 9.70171 1.18182 7.09091C1.18182 4.48011 3.29829 2.36364 5.90909 2.36364C8.51989 2.36364 10.6364 4.48011 10.6364 7.09091C10.6364 7.51974 10.5793 7.93523 10.4723 8.3302L11.3982 9.28296Z"
        fill={props.color}
      />
      <path
        d="M7.65186 5.14511C7.42109 4.91434 7.04695 4.91434 6.81618 5.14511L5.14484 6.81645C4.91408 7.04722 4.91408 7.42136 5.14484 7.65212C5.37561 7.88289 5.74975 7.88289 5.98051 7.65212L7.65186 5.98078C7.88262 5.75002 7.88262 5.37587 7.65186 5.14511Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_15012_108806">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgTimerX.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgTimerX.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgTimerX.displayName = "SvgTimerX";
const Memo = memo(SvgTimerX);
export default Memo;
