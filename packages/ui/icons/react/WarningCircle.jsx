import * as React from "react";
import { memo } from "react";
import { oneOfType, bool, string, number } from "prop-types";
const SvgWarningCircle = (props) => (
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
    <g clipPath="url(#clip0_12891_36323)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02936 13.9706 -3.52258e-07 9 -7.86805e-07C4.02936 -1.22135e-06 1.22135e-06 4.02935 7.86805e-07 9C3.52258e-07 13.9706 4.02936 18 9 18ZM7.87488 4.5005C7.87488 3.87867 8.37817 3.37538 9 3.37538C9.62183 3.37538 10.1251 3.87867 10.1251 4.5005L10.1251 10.1251C10.1251 10.747 9.62183 11.2503 9 11.2503C8.37917 11.2502 7.87487 10.747 7.87487 10.1251L7.87488 4.5005ZM8.97991 12.3553C9.61279 12.3553 10.1251 12.8676 10.1251 13.5005C10.1251 14.1334 9.61279 14.6457 8.97991 14.6457C8.34803 14.6457 7.83469 14.1334 7.83469 13.5005C7.83469 12.8676 8.34703 12.3553 8.97991 12.3553Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12891_36323">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgWarningCircle.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgWarningCircle.defaultProps = {
  color: "currentColor",
  height: undefined,
  width: "1em",
  title: "Icon",
};
SvgWarningCircle.displayName = "SvgWarningCircle";
const Memo = memo(SvgWarningCircle);
export default Memo;
