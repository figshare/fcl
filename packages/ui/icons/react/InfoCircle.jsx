import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgInfoCircle = (props) => (
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
    <g clipPath="url(#clip0_12864_33428)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6.13145e-08C4.02936 6.13145e-08 0 4.02936 0 9C0 13.9706 4.02936 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02936 13.9706 6.13145e-08 9 6.13145e-08ZM10.1251 13.4995C10.1251 14.1213 9.62183 14.6246 9 14.6246C8.37817 14.6246 7.87487 14.1213 7.87487 13.4995V7.87487C7.87487 7.25304 8.37817 6.74975 9 6.74975C9.62083 6.74975 10.1251 7.25304 10.1251 7.87487V13.4995ZM9.02009 5.64471C8.38721 5.64471 7.87487 5.13238 7.87487 4.4995C7.87487 3.86661 8.38721 3.35428 9.02009 3.35428C9.65197 3.35428 10.1653 3.86661 10.1653 4.4995C10.1653 5.13238 9.65298 5.64471 9.02009 5.64471Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33428">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgInfoCircle.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgInfoCircle.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgInfoCircle.displayName = "SvgInfoCircle";
const Memo = memo(SvgInfoCircle);
export default Memo;
