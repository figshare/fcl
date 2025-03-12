import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgBellNotification = (props) => (
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
    <g clipPath="url(#clip0_12864_33438)">
      <path
        d="M9.55367 1.05858C9.34612 0.930808 9.1015 0.857143 8.83929 0.857143C8.0851 0.857143 7.47656 1.46652 7.47656 2.21987V2.83761C4.87081 3.45368 2.94224 5.78571 2.94224 8.57143V12.7031L1.125 14.5195V15.4286H16.5536V14.5195L14.7363 12.7031V8.57143C14.7363 8.18549 14.6993 7.80827 14.6286 7.4431C14.1607 7.61842 13.6541 7.71429 13.125 7.71429C10.7581 7.71429 8.83929 5.79551 8.83929 3.42857C8.83929 2.55227 9.10229 1.73739 9.55367 1.05858Z"
        fill={props.color}
      />
      <path
        d="M8.83929 18C7.89593 18 7.13337 17.2366 7.13337 16.2941H10.5452C10.5452 17.2366 9.78181 18 8.83929 18Z"
        fill={props.color}
      />
      <path
        d="M16.5536 3.42857C16.5536 5.32212 15.0185 6.85714 13.125 6.85714C11.2315 6.85714 9.69643 5.32212 9.69643 3.42857C9.69643 1.53502 11.2315 0 13.125 0C15.0185 0 16.5536 1.53502 16.5536 3.42857Z"
        fill="#A60845"
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33438">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgBellNotification.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgBellNotification.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgBellNotification.displayName = "SvgBellNotification";
const Memo = memo(SvgBellNotification);
export default Memo;
