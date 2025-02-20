import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgChevronDown = (props) => (
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.2955 5.95473C14.7348 6.39438 14.7348 7.10718 14.2955 7.54682L9.80345 12.042C9.35974 12.486 8.64031 12.486 8.19655 12.042L3.7045 7.54682C3.26516 7.10718 3.26516 6.39438 3.7045 5.95473C4.14384 5.51509 4.85616 5.51509 5.2955 5.95473L9 9.6618L12.7045 5.95473C13.1438 5.51509 13.8562 5.51509 14.2955 5.95473Z"
      fill={props.color}
    />
  </svg>
);
SvgChevronDown.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgChevronDown.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgChevronDown.displayName = "SvgChevronDown";
const Memo = memo(SvgChevronDown);
export default Memo;
