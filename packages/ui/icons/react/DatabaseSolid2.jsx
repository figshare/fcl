import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgDatabaseSolid2 = (props) => (
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
    <g clipPath="url(#clip0_19358_1937)">
      <path
        d="M13.3333 4V2.5C13.3333 1.11875 10.3482 0 6.66667 0C2.98512 0 0 1.11875 0 2.5V4C0 5.38125 2.98512 6.5 6.66667 6.5C10.3482 6.5 13.3333 5.38125 13.3333 4Z"
        fill={props.color}
      />
      <path
        d="M13.3333 5.81563C12.8899 6.18125 12.3214 6.47813 11.7024 6.70937C10.3661 7.20937 8.58631 7.5 6.66667 7.5C4.74702 7.5 2.96726 7.20937 1.63095 6.70937C1.0119 6.47813 0.443452 6.18438 0 5.81563V9C0 10.3813 2.98512 11.5 6.66667 11.5C6.84364 11.5 7.019 11.4974 7.19249 11.4923C7.4589 10.4662 7.99494 9.51978 8.75736 8.75736C9.88258 7.63214 11.4087 7 13 7C13.1115 7 13.2226 7.0031 13.3333 7.00926V5.81563Z"
        fill={props.color}
      />
      <path
        d="M7.02113 12.4967C7.0071 12.6635 7 12.8314 7 13C7 14.0487 7.27454 15.0691 7.78382 15.9651C7.42057 15.988 7.04734 16 6.66667 16C2.98512 16 0 14.8813 0 13.5V10.8156C0.443452 11.1844 1.0119 11.4781 1.63095 11.7094C2.96726 12.2094 4.74702 12.5 6.66667 12.5C6.78538 12.5 6.90356 12.4989 7.02113 12.4967Z"
        fill={props.color}
      />
      <path
        d="M13 18C14.3261 18 15.5979 17.4732 16.5355 16.5355C17.4732 15.5979 18 14.3261 18 13C18 11.6739 17.4732 10.4021 16.5355 9.46447C15.5979 8.52678 14.3261 8 13 8C11.6739 8 10.4021 8.52678 9.46447 9.46447C8.52678 10.4021 8 11.6739 8 13C8 14.3261 8.52678 15.5979 9.46447 16.5355C10.4021 17.4732 11.6739 18 13 18Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_19358_1937">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgDatabaseSolid2.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgDatabaseSolid2.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgDatabaseSolid2.displayName = "SvgDatabaseSolid2";
const Memo = memo(SvgDatabaseSolid2);
export default Memo;
