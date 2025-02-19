import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgArrowDown = (props) => (
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
    <g clipPath="url(#clip0_12864_33090)">
      <path
        d="M10.7496 11.4301L12.9105 9.29609C13.3112 8.90044 13.9607 8.90044 14.3614 9.29609L15.4495 10.3707C15.8502 10.7664 15.8502 11.4078 15.4495 11.8035L9.47543 17.7033C9.07478 18.0989 8.42522 18.0989 8.02457 17.7033L2.05048 11.8035C1.64984 11.4078 1.64984 10.7664 2.05048 10.3707L3.13862 9.29609C3.53926 8.90044 4.18883 8.90044 4.58947 9.29609L6.74963 11.4294L6.74963 1.00004C6.74963 0.447735 7.19733 -1.0199e-07 7.7496 -9.54038e-08L9.74966 -7.15534e-08C10.3019 -6.49676e-08 10.7496 0.447733 10.7496 1.00004L10.7496 11.4301Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33090">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgArrowDown.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  inline: bool,
  title: string,
  width: oneOfType([string, number]),
};
SvgArrowDown.defaultProps = {
  color: "currentColor",
  height: undefined,
  inline: true,
  width: undefined,
  title: "Icon",
};
SvgArrowDown.displayName = "SvgArrowDown";
const Memo = memo(SvgArrowDown);
export default Memo;
