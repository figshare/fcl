import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgRadioChecked = (props) => (
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
    <g clipPath="url(#clip0_12864_33431)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 16.875C13.3492 16.875 16.875 13.3492 16.875 9C16.875 4.65076 13.3492 1.125 9 1.125C4.65076 1.125 1.125 4.65076 1.125 9C1.125 13.3492 4.65076 16.875 9 16.875ZM9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"
        fill={props.color}
      />
      <path
        d="M13.5 9C13.5 11.4853 11.4853 13.5 9 13.5C6.51472 13.5 4.5 11.4853 4.5 9C4.5 6.51472 6.51472 4.5 9 4.5C11.4853 4.5 13.5 6.51472 13.5 9Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_12864_33431">
        <rect width={18} height={18} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
SvgRadioChecked.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgRadioChecked.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgRadioChecked.displayName = "SvgRadioChecked";
const Memo = memo(SvgRadioChecked);
export default Memo;
