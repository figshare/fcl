import * as React from "react";
import { memo } from "react";
import { oneOfType, string, number } from "prop-types";
const SvgChevronLargeRight = (props) => (
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
      d="M4.82968 1.4545C5.26924 1.01517 5.98192 1.01517 6.42149 1.4545L13.167 8.19655C13.6109 8.64024 13.611 9.35967 13.167 9.80345L6.42149 16.5455C5.98192 16.9848 5.26924 16.9848 4.82968 16.5455C4.39011 16.1062 4.39011 15.3938 4.82968 14.9545L10.7873 9L4.82968 3.0455C4.39011 2.60616 4.39011 1.89384 4.82968 1.4545Z"
      fill={props.color}
    />
  </svg>
);
SvgChevronLargeRight.propTypes = {
  color: string,
  height: oneOfType([string, number]),
  title: string,
  width: oneOfType([string, number]),
};
SvgChevronLargeRight.defaultProps = {
  color: "currentColor",
  height: "auto",
  width: "1em",
  title: "Icon",
};
SvgChevronLargeRight.displayName = "SvgChevronLargeRight";
const Memo = memo(SvgChevronLargeRight);
export default Memo;
