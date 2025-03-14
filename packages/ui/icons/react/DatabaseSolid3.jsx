import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgDatabaseSolid3 = (props) => (
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
    <g clipPath="url(#clip0_19358_1935)">
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 16.5C14.933 16.5 16.5 14.933 16.5 13C16.5 11.067 14.933 9.5 13 9.5C11.067 9.5 9.5 11.067 9.5 13C9.5 14.933 11.067 16.5 13 16.5ZM13 18C15.7614 18 18 15.7614 18 13C18 10.2386 15.7614 8 13 8C10.2386 8 8 10.2386 8 13C8 15.7614 10.2386 18 13 18Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_19358_1935">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgDatabaseSolid3.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgDatabaseSolid3.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgDatabaseSolid3.displayName = "SvgDatabaseSolid3";
const Memo = memo(SvgDatabaseSolid3);
export default Memo;
